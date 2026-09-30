/* App shell: loads content, routes between views, wires search and theme. */
(function () {
  const DOCS = [
    { id: 'guide', title: 'Study guide', file: 'content/study-guide.md' },
    { id: 'formulas', title: 'Formula sheet', file: 'content/formula-sheet.md' },
    { id: 'problems', title: 'Problem sets worked', file: 'content/problem-sets.md' },
    { id: 'practice', title: 'Practice exam', file: 'content/practice-exam.md' }
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
    return { view: path || 'guide', query };
  }

  function buildToc(docId, level) {
    const doc = DOCS.find(d => d.id === docId);
    const box = document.getElementById('toc-' + docId);
    if (!box || !doc) return;
    box.innerHTML = window.Render.outline(doc.md, level)
      .map(o => `<a href="#/${docId}?s=${o.id}" data-sec="${o.id}"></a>`).join('');
    box.querySelectorAll('a').forEach((a, k) => {
      a.textContent = window.Render.outline(doc.md, level)[k].title;
      window.Render.prettifyScripts(a);
    });
  }

  function setActive(view, sec) {
    document.querySelectorAll('.sidebar a[data-view]').forEach(a => a.classList.toggle('active', a.dataset.view === view));
    document.querySelectorAll('.toc').forEach(t => { t.style.display = t.id === 'toc-' + view ? '' : 'none'; });
    document.querySelectorAll('.toc a').forEach(a => a.classList.toggle('current', a.dataset.sec === sec));
  }

  let spy = null;
  function scrollSpy(view) {
    if (spy) spy.disconnect();
    const heads = main.querySelectorAll('.doc h2');
    if (!heads.length || !('IntersectionObserver' in window)) return;
    spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) document.querySelectorAll('#toc-' + view + ' a').forEach(a => a.classList.toggle('current', a.dataset.sec === e.target.id));
      });
    }, { rootMargin: '-60px 0px -75% 0px' });
    heads.forEach(h => spy.observe(h));
  }

  function route() {
    const { view, query } = parseHash();
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('searchResults').hidden = true;
    const doc = DOCS.find(d => d.id === view);
    if (doc) {
      if (!cache[doc.id]) cache[doc.id] = window.Render.markdown(doc.md);
      main.innerHTML = '';
      main.appendChild(cache[doc.id]);
      document.title = doc.title + ' · ECO5207 Macro';
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
      document.title = 'Flashcards · ECO5207 Macro';
      setActive(view);
      window.scrollTo(0, 0);
    } else if (view === 'simulator') {
      window.Simulator.mount(main, query);
      document.title = 'Shock simulator · ECO5207 Macro';
      setActive(view);
      window.scrollTo(0, 0);
    } else {
      location.hash = '#/guide';
    }
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
    document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
    try {
      await loadDocs();
    } catch (e) {
      main.innerHTML = `<div class="doc"><h1>Content not found</h1><p>${e.message}. Run <code>python3 build.py</code> or serve the folder with <code>python3 -m http.server</code>.</p></div>`;
      return;
    }
    window.Search.build(DOCS);
    buildToc('guide', 2);
    buildToc('problems', 2);
    wireSearch();
    window.addEventListener('hashchange', route);
    route();
  }

  start();
})();
