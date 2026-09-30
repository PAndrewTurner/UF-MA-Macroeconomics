/* Flashcards with simple self-grading. Progress is kept in localStorage
   (per browser), which is fine for a personal study tool. */
(function () {
  const KEY = 'eco5207-flashcards-v1';

  function shockCards() {
    const vars = window.SHOCK_VARS;
    return window.SHOCKS.map(s => ({
      deck: 'Shocks',
      front: `${s.label} (${s.name}): signs of ${vars.join(', ')}?`,
      back: `${s.type}; ${s.curve}.\n\n| ${vars.join(' | ')} |\n| ${vars.map(() => '---').join(' | ')} |\n| ${vars.map(v => s.signs[v]).join(' | ')} |\n\n${s.steps[1] || ''}`
    }));
  }

  function allCards() {
    return window.FLASHCARDS.concat(shockCards()).map(c => Object.assign({ id: c.deck + '|' + c.front }, c));
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode */ }
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  let keyHandler = null;

  function mount(main) {
    const cards = allCards();
    const decks = ['All'].concat([...new Set(cards.map(c => c.deck))]);
    let status = load();
    let deck = 'All';
    let onlyLearning = false;
    let queue = [];
    let flipped = false;

    main.innerHTML = `
      <div class="doc">
        <h1>Flashcards</h1>
        <p class="page-intro">${cards.length} cards: concepts, formulas, history, and every shock in the neoclassical model. Answer in your head, flip, then grade yourself honestly.</p>
        <div class="fc-controls">
          <div class="segmented" role="group" aria-label="Deck">
            ${decks.map(d => `<button class="chip" data-deck="${d}">${d}</button>`).join('')}
          </div>
          <label class="check"><input type="checkbox" id="fcLearning"> Only cards I'm still learning</label>
        </div>
        <div class="fc-stats" id="fcStats"></div>
        <div class="progress" aria-hidden="true"><div id="fcBar"></div></div>
        <div id="fcCard"></div>
        <div class="fc-actions">
          <button class="btn bad" id="fcAgain">Again <kbd>1</kbd></button>
          <button class="btn" id="fcFlip">Flip <kbd>Space</kbd></button>
          <button class="btn good" id="fcGot">Got it <kbd>2</kbd></button>
        </div>
        <div class="fc-actions fc-secondary">
          <button class="btn ghost" id="fcShuffle">Restart deck</button>
          <button class="btn ghost" id="fcReset">Reset progress</button>
        </div>
      </div>`;

    const $ = s => main.querySelector(s);

    function pool() {
      return cards.filter(c => (deck === 'All' || c.deck === deck) && (!onlyLearning || status[c.id] !== 'known'));
    }
    function restart() {
      queue = shuffle(pool().slice());
      flipped = false;
      render();
    }
    function render() {
      main.querySelectorAll('[data-deck]').forEach(b => b.classList.toggle('on', b.dataset.deck === deck));
      const inDeck = cards.filter(c => deck === 'All' || c.deck === deck);
      const known = inDeck.filter(c => status[c.id] === 'known').length;
      const learning = inDeck.filter(c => status[c.id] === 'learning').length;
      $('#fcStats').innerHTML = `<span class="st-known"><b>${known}</b> known</span><span class="st-learning"><b>${learning}</b> learning</span><span><b>${inDeck.length - known - learning}</b> unseen</span><span class="st-left"><b>${queue.length}</b> left this round</span>`;
      $('#fcBar').style.width = (inDeck.length ? (100 * known / inDeck.length) : 0) + '%';
      const box = $('#fcCard');
      box.innerHTML = '';
      const card = queue[0];
      ['#fcAgain', '#fcGot', '#fcFlip'].forEach(s => { $(s).disabled = !card; });
      if (!card) {
        box.innerHTML = '<div class="card done"><div class="card-head"><span class="deck-tag">Round complete</span></div><div class="card-body"><div class="front">You went through every card in this round.</div><p>Restart the deck to go again, or tick “Only cards I\'m still learning” to drill the misses.</p></div></div>';
        return;
      }
      const el = document.createElement('div');
      el.className = 'card' + (flipped ? ' flipped' : '');
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', flipped ? 'Hide answer' : 'Show answer');
      const st = status[card.id];
      el.innerHTML = `<div class="card-head"><span class="deck-tag">${card.deck}</span>${st ? `<span class="card-status ${st}">${st === 'known' ? 'Known' : 'Learning'}</span>` : ''}</div><div class="card-body"><div class="front"></div></div>${flipped ? '' : '<div class="card-hint">Click or press Space to flip</div>'}`;
      el.querySelector('.front').textContent = card.front;
      window.Render.prettifyScripts(el.querySelector('.front'));
      if (flipped) {
        const back = window.Render.markdown(card.back);
        back.className = 'back';
        el.querySelector('.card-body').appendChild(back);
      }
      el.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); flip(); } });
      el.addEventListener('click', flip);
      box.appendChild(el);
    }
    function flip() { if (queue.length) { flipped = !flipped; render(); } }
    function grade(ok) {
      const card = queue.shift();
      if (!card) return;
      status[card.id] = ok ? 'known' : 'learning';
      save(status);
      if (!ok) queue.splice(Math.min(queue.length, 3 + Math.floor(Math.random() * 3)), 0, card);
      flipped = false;
      render();
    }

    main.querySelectorAll('[data-deck]').forEach(b => b.addEventListener('click', () => { deck = b.dataset.deck; restart(); }));
    $('#fcLearning').addEventListener('change', e => { onlyLearning = e.target.checked; restart(); });
    $('#fcAgain').addEventListener('click', () => grade(false));
    $('#fcGot').addEventListener('click', () => grade(true));
    $('#fcFlip').addEventListener('click', flip);
    $('#fcShuffle').addEventListener('click', restart);
    $('#fcReset').addEventListener('click', () => {
      if (confirm('Clear all flashcard progress in this browser?')) { status = {}; save(status); restart(); }
    });

    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = e => {
      if (!document.body.contains($('#fcCard'))) return;
      if (e.target.matches('input, textarea, select')) return;
      if (e.code === 'Space') { e.preventDefault(); flip(); }
      else if (e.key === '1') grade(false);
      else if (e.key === '2') grade(true);
    };
    document.addEventListener('keydown', keyHandler);
    restart();
  }

  window.Flashcards = { mount, allCards };
})();
