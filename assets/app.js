/* App shell: loads content, routes between views, wires search and theme. */
(function () {
  const DOCS = [
    { id: 'guide', title: 'Study guide', file: 'content/study-guide.md' },
    { id: 'formulas', title: 'Formula sheet', file: 'content/formula-sheet.md' },
    { id: 'problems', title: 'Problem sets worked', file: 'content/problem-sets.md' },
    { id: 'practice', title: 'Practice questions', file: 'content/practice-questions.md' }
  ];
  const main = document.getElementById('main');
  const cache = {};

  async function loadDocs() {
    const bundled = window.CONTENT || {};
    await Promise.all(DOCS.map(async d => {
      if (bundled[d.id]) { d.md = bundled[d.id]; return; }
      const res = await fetch(d.file);
      if (!res.ok) throw new Error('Could not load ' + d.file);
      d.md = await res.text();
    }));
  }

  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const query = {};
    (qs || '').split('&').filter(Boolean).forEach(kv => {
      const [k, v] = kv.split('=');
      query[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return { view: path || 'home', query };
  }

  function buildToc(docId, levels) {
    const doc = DOCS.find(d => d.id === docId);
    const box = document.getElementById('toc-' + docId);
    if (!box || !doc) return;
    const items = window.Render.outline(doc.md, levels);
    const top = Math.min(...items.map(o => o.level));
    box.innerHTML = items.map(o => `<a href="#/${docId}?s=${o.id}" data-sec="${o.id}" class="${o.level > top ? 'toc-sub' : 'toc-top'}"></a>`).join('');
    box.querySelectorAll('a').forEach((a, k) => {
      const mod = window.Render.splitModule(items[k].title);
      const sub = items[k].level > top && items[k].title.match(/^(.+?)\s+\(Ch [^()]+\)$/);
      if (mod) {
        a.classList.add('toc-mod');
        a.innerHTML = `<span class="toc-n">${mod.n}</span><span class="toc-t"></span>`;
        a.querySelector('.toc-t').textContent = mod.title;
      } else {
        a.innerHTML = '<span class="toc-t"></span>';
        a.querySelector('.toc-t').textContent = sub ? sub[1] : items[k].title;
      }
      window.Render.prettifyScripts(a);
    });
  }

  // Highlight the section being read; a topic also lights up its module.
  function markCurrent(view, sec) {
    const links = [...document.querySelectorAll('#toc-' + view + ' a')];
    const hit = links.find(a => a.dataset.sec === sec);
    if (sec && !hit) return;
    let mod = null;
    if (hit) for (let k = links.indexOf(hit); k >= 0; k--) { if (links[k].classList.contains('toc-top')) { mod = links[k]; break; } }
    links.forEach(a => {
      a.classList.toggle('current', a === hit);
      a.classList.toggle('in-current', a === mod && a !== hit);
    });
  }

  function setActive(view, sec) {
    document.querySelectorAll('.sidebar a[data-view]').forEach(a => a.classList.toggle('active', a.dataset.view === view));
    document.querySelectorAll('.toc').forEach(t => { t.style.display = t.id === 'toc-' + view ? '' : 'none'; });
    markCurrent(view, sec);
  }

  let spy = null;
  function scrollSpy(view) {
    if (spy) spy.disconnect();
    const heads = main.querySelectorAll('.doc h2, .doc h3');
    if (!heads.length || !('IntersectionObserver' in window)) return;
    spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) markCurrent(view, e.target.id);
      });
    }, { rootMargin: '-60px 0px -75% 0px' });
    heads.forEach(h => spy.observe(h));
  }

  // Practice questions: hide each answer behind a button so the student attempts it first.
  function enhancePractice(el) {
    const isQuestion = n => n.tagName === 'P' && n.firstElementChild && n.firstElementChild.tagName === 'STRONG' &&
      /^\d+\./.test(n.firstElementChild.textContent) && n.firstChild === n.firstElementChild;
    let total = 0;
    [...el.children].filter(isQuestion).forEach(q => {
      const parts = [];
      let n = q.nextElementSibling;
      while (n && !isQuestion(n) && !/^H[1-3]$/.test(n.tagName)) { parts.push(n); n = n.nextElementSibling; }
      const wrap = document.createElement('section');
      wrap.className = 'question';
      q.replaceWith(wrap);
      wrap.appendChild(q);
      if (!parts.length) return;
      total++;
      const ans = document.createElement('div');
      ans.className = 'answer';
      parts.forEach(p => ans.appendChild(p));
      const btn = document.createElement('button');
      btn.className = 'reveal-btn';
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Show answer';
      btn.addEventListener('click', () => setOpen(wrap, !wrap.classList.contains('open')));
      wrap.append(btn, ans);
    });
    function setOpen(wrap, open) {
      wrap.classList.toggle('open', open);
      const b = wrap.querySelector('.reveal-btn');
      b.textContent = open ? 'Hide answer' : 'Show answer';
      b.setAttribute('aria-expanded', String(open));
      count();
    }
    const bar = document.createElement('div');
    bar.className = 'practice-bar';
    bar.innerHTML = '<span class="practice-count"></span><button class="btn ghost" data-all="1">Show all answers</button><button class="btn ghost" data-all="0">Hide all</button>';
    function count() {
      bar.querySelector('.practice-count').textContent = `${el.querySelectorAll('.question.open').length} of ${total} answers shown`;
    }
    bar.querySelectorAll('[data-all]').forEach(b => b.addEventListener('click', () => {
      el.querySelectorAll('.question').forEach(w => { if (w.querySelector('.reveal-btn')) setOpen(w, b.dataset.all === '1'); });
    }));
    const intro = el.querySelector('h1 + p');
    (intro || el.querySelector('h1')).after(bar);
    count();
  }

  function closeNav() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('scrim').hidden = true;
    document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');
  }

  function readProgress() {
    const bar = document.getElementById('readBar');
    const max = document.documentElement.scrollHeight - innerHeight;
    const on = !!main.querySelector('.doc') && max > 200;
    bar.style.transform = `scaleX(${on ? Math.min(1, scrollY / max) : 0})`;
  }

  function route() {
    const { view, query } = parseHash();
    closeNav();
    document.getElementById('searchResults').hidden = true;
    const doc = DOCS.find(d => d.id === view);
    main.dataset.view = view;
    if (view === 'home') {
      window.Home.mount(main, DOCS);
      document.title = 'UF MA Macroeconomics';
      setActive(view);
      window.scrollTo(0, 0);
    } else if (doc) {
      if (!cache[doc.id]) {
        cache[doc.id] = window.Render.markdown(doc.md);
        if (doc.id === 'practice') enhancePractice(cache[doc.id]);
      }
      main.innerHTML = '';
      main.appendChild(cache[doc.id]);
      document.title = doc.title + ' · UF MA Macroeconomics';
      setActive(view, query.s);
      if (query.s) {
        const target = document.getElementById(query.s);
        if (target) target.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
      scrollSpy(view);
    } else if (view === 'flashcards') {
      window.Flashcards.mount(main);
      document.title = 'Flashcards · UF MA Macroeconomics';
      setActive(view);
      window.scrollTo(0, 0);
    } else if (view === 'simulator') {
      window.Simulator.mount(main, query);
      document.title = 'Shock simulator · UF MA Macroeconomics';
      setActive(view);
      window.scrollTo(0, 0);
    } else {
      location.hash = '#/home';
    }
    readProgress();
  }

  // ---- search ----
  function wireSearch() {
    const input = document.getElementById('search');
    const box = document.getElementById('searchResults');
    let active = -1;
    function show() {
      const q = input.value.trim();
      if (q.length < 2) { box.hidden = true; return; }
      const hits = window.Search.query(q);
      active = -1;
      box.innerHTML = hits.length
        ? hits.map(h => `<a href="${h.href}"><div class="sr-where">${h.where}</div><div class="sr-title"></div><div class="sr-snip">${h.snippet}</div></a>`).join('')
        : '<div class="sr-empty">No matches.</div>';
      box.querySelectorAll('.sr-title').forEach((t, k) => { t.textContent = hits[k].title; window.Render.prettifyScripts(t); });
      box.querySelectorAll('.sr-snip').forEach(s => window.Render.prettifyScripts(s));
      box.hidden = false;
    }
    input.addEventListener('input', show);
    input.addEventListener('focus', show);
    input.addEventListener('keydown', e => {
      const items = [...box.querySelectorAll('a')];
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        active = Math.max(0, Math.min(items.length - 1, active + (e.key === 'ArrowDown' ? 1 : -1)));
        items.forEach((a, k) => a.classList.toggle('active', k === active));
      } else if (e.key === 'Enter' && items.length) {
        location.hash = items[Math.max(active, 0)].getAttribute('href');
        box.hidden = true; input.blur();
      } else if (e.key === 'Escape') {
        box.hidden = true; input.blur();
      }
    });
    box.addEventListener('click', () => { box.hidden = true; });
    document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) box.hidden = true; });
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !e.target.matches('input, textarea, select')) { e.preventDefault(); input.focus(); }
    });
  }

  // ---- theme ----
  function wireTheme() {
    const saved = (() => { try { return localStorage.getItem('eco5207-theme'); } catch (e) { return null; } })();
    const prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
    document.getElementById('themeBtn').addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('eco5207-theme', next); } catch (e) { /* ignore */ }
    });
  }

  async function start() {
    wireTheme();
    document.getElementById('menuBtn').addEventListener('click', () => {
      const open = document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('scrim').hidden = !open;
      document.getElementById('menuBtn').setAttribute('aria-expanded', String(open));
    });
    document.getElementById('scrim').addEventListener('click', closeNav);
    window.addEventListener('scroll', readProgress, { passive: true });
    window.addEventListener('resize', readProgress);
    try {
      await loadDocs();
    } catch (e) {
      main.innerHTML = `<div class="doc"><h1>Content not found</h1><p>${e.message}. Run <code>python3 build.py</code> or serve the folder with <code>python3 -m http.server</code>.</p></div>`;
      return;
    }
    window.Search.build(DOCS);
    buildToc('guide', [2, 3]);
    buildToc('problems', 2);
    const practice = DOCS.find(d => d.id === 'practice').md;
    document.getElementById('countPractice').textContent = (practice.match(/^\*\*\d+\./gm) || []).length;
    document.getElementById('countCards').textContent = window.Flashcards.allCards().length;
    document.getElementById('countShocks').textContent = window.SHOCKS.length;
    wireSearch();
    window.addEventListener('hashchange', route);
    route();
  }

  start();
})();
