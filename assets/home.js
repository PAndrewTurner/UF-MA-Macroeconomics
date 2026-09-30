/* Overview page. The hero is a one-question drill on the IS-Ys graph:
   a shock is shown, the student calls which curve moves, and the graph
   animates the answer. Answers come from `curve` in data/shocks.js. */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  // Graph geometry (viewBox units). IS: r falls as Y rises; Ys vertical.
  const W = 480, H = 330, X0 = 56, Y0 = 290, SHIFT = 72;
  const IS_A = [96, 70], IS_B = [436, 262];
  const YS_X = 250;
  const isY = x => IS_A[1] + (x - IS_A[0]) * (IS_B[1] - IS_A[1]) / (IS_B[0] - IS_A[0]);

  function node(tag, attrs, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  // 'IS' | 'Ys' | 'none', and +1 (right) / -1 (left)
  // "r" with a real subscript ("0" / "1"), since mono fonts rarely carry ₀ ₁
  function tick(x, y, base, subscript, cls, anchor) {
    const t = node('text', { x, y, class: cls, 'text-anchor': anchor });
    t.appendChild(document.createTextNode(base));
    t.appendChild(node('tspan', { dy: 4, 'font-size': '0.72em' }, subscript));
    return t;
  }

  function answerOf(shock) {
    const c = shock.curve;
    const which = /^IS/.test(c) ? 'IS' : /^Ys/.test(c) ? 'Ys' : 'none';
    return { which, dir: /right/.test(c) ? 1 : /left/.test(c) ? -1 : 0 };
  }

  function equilibrium(ans) {
    const d = SHIFT * ans.dir;
    if (ans.which === 'IS') return [YS_X, isY(YS_X - d)];
    if (ans.which === 'Ys') return [YS_X + d, isY(YS_X + d)];
    return [YS_X, isY(YS_X)];
  }

  function buildGraph(ans) {
    const svg = node('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'IS and Ys curves in the (Y, r) plane' });
    const e0 = [YS_X, isY(YS_X)];
    svg.appendChild(node('path', { d: `M${X0} 18V${Y0}H${W - 14}`, class: 'g-axis' }));
    svg.appendChild(node('text', { x: X0 - 12, y: 30, class: 'g-axlab', 'text-anchor': 'end' }, 'r'));
    svg.appendChild(node('text', { x: W - 16, y: Y0 + 24, class: 'g-axlab', 'text-anchor': 'end' }, 'Y'));

    // starting equilibrium guides
    svg.appendChild(node('path', { d: `M${e0[0]} ${Y0}V${e0[1]}H${X0}`, class: 'g-guide' }));
    svg.appendChild(tick(X0 - 8, e0[1] + 3, 'r', '0', 'g-tick', 'end'));
    svg.appendChild(tick(e0[0], Y0 + 20, 'Y', '0', 'g-tick', 'middle'));
    const clip = node('clipPath', { id: 'drill-clip' });
    clip.appendChild(node('rect', { x: X0 + 1, y: 10, width: W - X0 - 14, height: Y0 - 10 }));
    svg.appendChild(clip);

    // original curves
    svg.appendChild(node('line', { x1: IS_A[0], y1: IS_A[1], x2: IS_B[0], y2: IS_B[1], class: 'g-curve' }));
    svg.appendChild(node('line', { x1: YS_X, y1: 34, x2: YS_X, y2: Y0, class: 'g-curve' }));
    svg.appendChild(node('text', { x: IS_B[0] - 6, y: IS_B[1] - 12, class: 'g-lab', 'text-anchor': 'end' }, 'IS'));
    svg.appendChild(node('text', { x: YS_X + 8, y: 44, class: 'g-lab' }, 'Yˢ'));

    // the curve that moves, drawn on top in accent; starts on its original
    const clipped = node('g', { 'clip-path': 'url(#drill-clip)' });
    const mover = node('g', { class: 'g-mover' });
    mover.style.setProperty('--dx', (SHIFT * ans.dir) + 'px');
    if (ans.which === 'IS') {
      mover.appendChild(node('line', { x1: IS_A[0], y1: IS_A[1], x2: IS_B[0], y2: IS_B[1], class: 'g-new' }));
      mover.appendChild(node('text', { x: 360, y: isY(360) + 24, class: 'g-lab g-lab-new', 'text-anchor': 'end' }, 'IS′'));
    } else if (ans.which === 'Ys') {
      mover.appendChild(node('line', { x1: YS_X, y1: 34, x2: YS_X, y2: Y0, class: 'g-new' }));
      mover.appendChild(node('text', { x: YS_X + 8, y: 66, class: 'g-lab g-lab-new' }, 'Yˢ′'));
    }
    clipped.appendChild(mover);
    svg.appendChild(clipped);

    // new equilibrium guides, shown once the curve lands
    const e1 = equilibrium(ans);
    const after = node('g', { class: 'g-after' });
    if (ans.which !== 'none') {
      after.appendChild(node('path', { d: `M${e1[0]} ${Y0}V${e1[1]}H${X0}`, class: 'g-guide g-guide-new' }));
      after.appendChild(tick(X0 - 8, e1[1] + 3, 'r', '1', 'g-tick g-tick-new', 'end'));
      if (e1[0] !== e0[0]) after.appendChild(tick(e1[0], Y0 + 20, 'Y', '1', 'g-tick g-tick-new', 'middle'));
    } else {
      after.appendChild(node('text', { x: e0[0] + 14, y: e0[1] - 14, class: 'g-note' }, 'Y and r unchanged'));
    }
    svg.appendChild(after);

    const dot = node('circle', { r: 6.5, cx: 0, cy: 0, class: 'g-dot' });
    dot.style.transform = `translate(${e0[0]}px, ${e0[1]}px)`;
    dot.dataset.to = `translate(${e1[0]}px, ${e1[1]}px)`;
    svg.appendChild(dot);
    return svg;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function fcProgress() {
    let status = {};
    try { status = JSON.parse(localStorage.getItem('eco5207-flashcards-v1')) || {}; } catch (e) { /* ignore */ }
    const cards = window.Flashcards.allCards();
    return { total: cards.length, known: cards.filter(c => status[c.id] === 'known').length };
  }

  const drill = { order: [], pos: 0, streak: 0 };

  function mountDrill(root) {
    const stage = root.querySelector('.drill');
    if (!drill.order.length || drill.pos >= drill.order.length) { drill.order = shuffle(window.SHOCKS.slice()); drill.pos = 0; }
    const shock = drill.order[drill.pos];
    const ans = answerOf(shock);

    stage.querySelector('.drill-shock').textContent = shock.label;
    stage.querySelector('.drill-name').textContent = shock.name;
    window.Render.prettifyScripts(stage.querySelector('.drill-shock'));
    const graph = stage.querySelector('.drill-graph');
    graph.innerHTML = '';
    graph.classList.remove('shifted');
    graph.appendChild(buildGraph(ans));

    const result = stage.querySelector('.drill-result');
    result.hidden = true;
    stage.querySelector('.drill-streak').textContent = drill.streak ? `Streak ${drill.streak}` : '';
    stage.querySelectorAll('.drill-choice').forEach(b => {
      b.disabled = false;
      b.classList.remove('is-right', 'is-wrong');
      b.onclick = () => reveal(b.dataset.choice);
    });

    function reveal(choice) {
      const ok = choice === ans.which;
      drill.streak = ok ? drill.streak + 1 : 0;
      stage.querySelectorAll('.drill-choice').forEach(b => {
        b.disabled = true;
        if (b.dataset.choice === ans.which) b.classList.add('is-right');
        else if (b.dataset.choice === choice) b.classList.add('is-wrong');
      });
      const dot = graph.querySelector('.g-dot');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        graph.classList.add('shifted');
        dot.style.transform = dot.dataset.to;
      }));
      result.querySelector('.drill-verdict').textContent = ok ? 'Correct.' : 'Not this time.';
      result.querySelector('.drill-verdict').className = 'drill-verdict ' + (ok ? 'ok' : 'miss');
      result.querySelector('.drill-why').textContent = `${shock.type}: ${shock.curve}. ${shock.steps[ans.which === 'none' ? 1 : 2] || ''}`;
      window.Render.prettifyScripts(result.querySelector('.drill-why'));
      result.querySelector('.drill-signs').innerHTML = window.SHOCK_VARS.map(v => {
        const s = shock.signs[v];
        const cls = s === '+' ? 'up' : s === '−' ? 'down' : s === '?' ? 'q' : 'zero';
        return `<span class="sign ${cls}"><span class="sign-var">${v}</span>${s}</span>`;
      }).join('');
      result.querySelector('.drill-sim').href = '#/simulator?shock=' + shock.id;
      stage.querySelector('.drill-streak').textContent = drill.streak ? `Streak ${drill.streak}` : '';
      result.hidden = false;
      result.querySelector('.drill-next').focus({ preventScroll: true });
    }
    stage.querySelector('.drill-next').onclick = () => { drill.pos++; mountDrill(root); };
  }

  function mount(main, docs) {
    const md = id => docs.find(d => d.id === id).md;
    // modules (## Module N) with the topic headings (###) inside each
    const modules = [];
    window.Render.outline(md('guide'), [2, 3]).forEach(o => {
      const mod = o.level === 2 && window.Render.splitModule(o.title);
      if (mod) modules.push(Object.assign({ id: o.id, topics: [] }, mod));
      else if (o.level === 2) modules.push(null);
      else if (modules.length && modules[modules.length - 1] && /\s\(Ch [^()]+\)$/.test(o.title)) {
        modules[modules.length - 1].topics.push(o.title.replace(/\s+\(Ch [^()]+\)$/, ''));
      }
    });
    const units = modules.filter(Boolean);
    // rows of the "| Formula | Notes |" tables (header and --- rows excluded)
    const nFormulas = md('formulas').split(/\n(?=\| Formula)/).slice(1)
      .reduce((n, block) => n + Math.max(0, (block.match(/^(\|.*)$/m) ? block.split('\n\n')[0].split('\n').length : 2) - 2), 0);
    const nSets = window.Render.outline(md('problems'), 2).length;
    const nQuestions = (md('practice').match(/^\*\*\d+\./gm) || []).length;
    const fc = fcProgress();
    const pct = fc.total ? Math.round(100 * fc.known / fc.total) : 0;

    main.innerHTML = `
      <div class="home">
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">ECO 5207 · Garín, Lester &amp; Sims</p>
            <h1>Which curve <span class="hl">moves?</span></h1>
            <p class="lede">Every shock in the neoclassical model moves IS, Yˢ, or neither. Call it before you look, then watch the equilibrium settle.</p>
          </div>
          <div class="drill">
            <div class="drill-graph graph-paper"></div>
            <div class="drill-panel">
              <div class="drill-head">
                <span class="drill-label">Shock</span>
                <span class="drill-streak" aria-live="polite"></span>
              </div>
              <div class="drill-shock"></div>
              <div class="drill-name"></div>
              <div class="drill-choices" role="group" aria-label="Which curve moves?">
                <button class="drill-choice" data-choice="IS">IS shifts</button>
                <button class="drill-choice" data-choice="Ys">Yˢ shifts</button>
                <button class="drill-choice" data-choice="none">Neither</button>
              </div>
              <div class="drill-result" hidden aria-live="polite">
                <p><span class="drill-verdict"></span> <span class="drill-why"></span></p>
                <div class="drill-signs"></div>
                <div class="drill-actions">
                  <button class="btn primary drill-next">Next shock</button>
                  <a class="btn ghost drill-sim" href="#/simulator">Open in simulator</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="home-section">
          <h2 class="section-label">Read</h2>
          <div class="tiles">
            <a class="tile" href="#/guide"><span class="tile-title">Study guide</span><span class="tile-meta">${units.length} modules, one per lecture</span></a>
            <a class="tile" href="#/formulas"><span class="tile-title">Formula sheet</span><span class="tile-meta">${nFormulas} formulas, every symbol defined</span></a>
            <a class="tile" href="#/problems"><span class="tile-title">Problem sets, worked</span><span class="tile-meta">${nSets} sets, steps in exam order</span></a>
            <a class="tile" href="#/practice"><span class="tile-title">Practice questions</span><span class="tile-meta">${nQuestions} questions, answers hidden</span></a>
          </div>
        </section>

        <section class="home-section">
          <h2 class="section-label">Drill</h2>
          <div class="tiles tiles-2">
            <a class="tile" href="#/flashcards">
              <span class="tile-title">Flashcards</span>
              <span class="tile-meta">${fc.known} of ${fc.total} known</span>
              <span class="meter" aria-hidden="true"><span style="width:${pct}%"></span></span>
            </a>
            <a class="tile" href="#/simulator">
              <span class="tile-title">Shock simulator</span>
              <span class="tile-meta">${window.SHOCKS.length} shocks across four linked graphs</span>
            </a>
          </div>
        </section>

        <section class="home-section">
          <h2 class="section-label">Course path</h2>
          <p class="section-note">One module per lecture deck, with the textbook topics it covers.</p>
          <ol class="path">
            ${units.map(u => `<li><a href="#/guide?s=${u.id}"><span class="path-n">${u.n}</span><span class="path-title"></span><span class="path-src">${u.src}</span><span class="path-topics"></span></a></li>`).join('')}
          </ol>
        </section>
      </div>`;

    main.querySelectorAll('.path li').forEach((li, k) => {
      li.querySelector('.path-title').textContent = units[k].title;
      li.querySelector('.path-topics').textContent = units[k].topics.join(' · ');
      window.Render.prettifyScripts(li.querySelector('.path-topics'));
    });
    mountDrill(main);
  }

  window.Home = { mount, answerOf };
})();
