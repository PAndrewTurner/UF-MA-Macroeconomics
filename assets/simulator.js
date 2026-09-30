/* Shock simulator for the neoclassical model (Ch 17-18).
   A small linear/sqrt model that reproduces the textbook signs:
     labor demand   w = A (7 + bd (5 - N))
     labor supply   w = theta + bs (N - 5) - er (r - 3)
     production     Y = 10 A sqrt(N)
     IS             Y = D - k (r - 3)
     money market   P = M / (Y (1 - 0.08 i)),  i = r + pi^e
   Numbers are illustrative; the sign table comes from theory (data/shocks.js). */
(function () {
  const BASE = { A: 1, theta: 7, f: 0, At1: 0, G: 0, Gt1: 0, M: 0, pie: 0 };
  const K = 2;          // IS: dY/dr
  const Y0 = 10 * Math.sqrt(5);
  const I0 = 5, IR = 0.8, G0 = 4, M0 = Y0 * 0.6;
  const SLOPES = { elastic: 0.4, normal: 1, inelastic: 3 };

  function laborN(p, o, r) {
    const bs = SLOPES[o.ns], bd = SLOPES[o.nd], er = o.er ? 0.6 : 0;
    const N = (p.A * (7 + 5 * bd) - p.theta + 5 * bs + er * (r - 3)) / (bs + p.A * bd);
    const w = p.theta + bs * (N - 5) - er * (r - 3);
    return { N, w };
  }
  const prod = (A, N) => 10 * A * Math.sqrt(Math.max(N, 0));
  function demandShift(p) {
    return 2.5 * p.G + 2.5 * p.At1 - 2.5 * p.f - 2 * p.Gt1;
  }
  const yIS = (p, r) => Y0 + demandShift(p) - K * (r - 3);
  const yS = (p, o, r) => prod(p.A, laborN(p, o, r).N);

  function solve(p, o) {
    let lo = -30, hi = 40;
    for (let k = 0; k < 80; k++) {
      const mid = (lo + hi) / 2;
      if (yIS(p, mid) - yS(p, o, mid) > 0) lo = mid; else hi = mid;
    }
    const r = (lo + hi) / 2;
    const { N, w } = laborN(p, o, r);
    const Y = prod(p.A, N);
    const I = I0 - IR * (r - 3) + 1.5 * p.At1 - 2.5 * p.f;
    const G = G0 + 2.5 * p.G;
    const C = Y - I - G;
    const pe = 2 + p.pie;
    const i = r + pe;
    const M = M0 * (1 + p.M);
    const h = 1 - 0.08 * i;
    const P = M / (Y * h);
    return { r, N, w, Y, I, G, C, i, M, P, h, pe };
  }

  // ---------------- SVG helpers ----------------
  const W = 420, H = 270, ML = 44, MR = 16, MT = 14, MB = 36;
  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }
  function panel(xr, yr, xlab, ylab, uid) {
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img' });
    const sx = x => ML + (x - xr[0]) / (xr[1] - xr[0]) * (W - ML - MR);
    const sy = y => H - MB - (y - yr[0]) / (yr[1] - yr[0]) * (H - MT - MB);
    const clipId = 'clip-' + uid;
    const defs = el('defs', {});
    const cp = el('clipPath', { id: clipId });
    cp.appendChild(el('rect', { x: ML, y: MT, width: W - ML - MR, height: H - MT - MB }));
    defs.appendChild(cp);
    svg.appendChild(defs);
    svg.appendChild(el('path', { d: `M${ML} ${MT}V${H - MB}H${W - MR}`, fill: 'none', stroke: 'var(--muted)', 'stroke-width': 1.2 }));
    svg.appendChild(el('text', { x: ML - 8, y: MT + 10, 'text-anchor': 'end', 'font-size': 13, fill: 'var(--muted)' }, ylab));
    svg.appendChild(el('text', { x: W - MR, y: H - 10, 'text-anchor': 'end', 'font-size': 13, fill: 'var(--muted)' }, xlab));
    const g = el('g', { 'clip-path': `url(#${clipId})` });
    svg.appendChild(g);
    const api = {
      svg, sx, sy,
      line(pts, color, width, dash) {
        const d = pts.map((q, k) => (k ? 'L' : 'M') + sx(q[0]).toFixed(1) + ' ' + sy(q[1]).toFixed(1)).join('');
        const a = { d, fill: 'none', stroke: color, 'stroke-width': width || 2 };
        if (dash) a['stroke-dasharray'] = dash;
        g.appendChild(el('path', a));
      },
      guide(x, y, color) {
        api.line([[x, yr[0]], [x, y], [xr[0], y]], color, 1, '4 4');
      },
      dot(x, y, color) {
        g.appendChild(el('circle', { cx: sx(x), cy: sy(y), r: 4, fill: color }));
      },
      label(x, y, text, color, anchor) {
        const tx = Math.min(Math.max(sx(x), ML + 4), W - MR - 4);
        const ty = Math.min(Math.max(sy(y), MT + 12), H - MB - 4);
        svg.appendChild(el('text', { x: tx, y: ty, 'font-size': 13, fill: color, 'text-anchor': anchor || 'start', 'font-weight': 600 }, text));
      }
    };
    return api;
  }
  const range = (a, b, n) => Array.from({ length: n + 1 }, (_, k) => a + (b - a) * k / n);

  // ---------------- view ----------------
  const state = { shock: 'At', size: 1, ns: 'normal', nd: 'normal', er: false };

  function params(shock, size) {
    const p = Object.assign({}, BASE);
    if (shock) p[shock.param] += shock.delta * size;
    return p;
  }

  function fmt(x) { return (Math.abs(x) < 0.005 ? 0 : x).toFixed(2); }
  function signClass(s) {
    return s === '+' ? 'sign-up' : s === '−' ? 'sign-down' : s === '?' ? 'sign-q' : 'sign-zero';
  }

  function draw(root) {
    const shock = window.SHOCKS.find(s => s.id === state.shock) || window.SHOCKS[0];
    const o = { ns: state.ns, nd: state.nd, er: state.er };
    const p0 = params(null, 0), p1 = params(shock, state.size);
    const e0 = solve(p0, o), e1 = solve(p1, o);
    const GREY = 'var(--muted)', BLUE = 'var(--accent)';
    const panelsEl = root.querySelector('.panels');
    panelsEl.innerHTML = '';

    function box(title, sub, svg) {
      const d = document.createElement('div');
      d.className = 'panel';
      d.innerHTML = `<h4>${title}</h4><p class="sub">${sub}</p>`;
      d.appendChild(svg);
      panelsEl.appendChild(d);
    }

    // 1. labor market
    {
      const pl = panel([0, 10], [0, 14], 'N', 'w', 'labor');
      [[p0, e0, GREY], [p1, e1, BLUE]].forEach(([p, e, c], k) => {
        const bs = SLOPES[o.ns], bd = SLOPES[o.nd], er = o.er ? 0.6 : 0;
        pl.line(range(0, 10, 2).map(N => [N, p.A * (7 + bd * (5 - N))]), c, 2);
        pl.line(range(0, 10, 2).map(N => [N, p.theta + bs * (N - 5) - er * (e.r - 3)]), c, 2);
        pl.guide(e.N, e.w, c);
        pl.dot(e.N, e.w, c);
        if (k === 0) {
          pl.label(9.2, p.A * (7 + bd * (5 - 9.2)) + 0.6, 'Nᵈ', GREY);
          pl.label(9.2, p.theta + bs * (9.2 - 5) - er * (e.r - 3) + 0.6, 'Nˢ', GREY);
        }
      });
      box('Labor market', 'Nˢ and Nᵈ set employment and the real wage.', pl.svg);
    }
    // 2. production function
    {
      const pl = panel([0, 10], [0, 40], 'N', 'Y', 'prod');
      [[p0, e0, GREY], [p1, e1, BLUE]].forEach(([p, e, c]) => {
        pl.line(range(0, 10, 60).map(N => [N, prod(p.A, N)]), c, 2);
        pl.guide(e.N, e.Y, c);
        pl.dot(e.N, e.Y, c);
      });
      pl.label(9.6, prod(p0.A, 9.6) - 5, 'A F(K, N)', GREY, 'end');
      box('Production function', 'Y = Aₜ F(Kₜ, Nₜ) maps labor into output.', pl.svg);
    }
    // 3. IS - Ys
    {
      const pl = panel([14, 32], [-2, 8], 'Y', 'r', 'isys');
      [[p0, e0, GREY], [p1, e1, BLUE]].forEach(([p, e, c]) => {
        pl.line(range(-2, 8, 2).map(r => [yIS(p, r), r]), c, 2);
        pl.line(range(-2, 8, 40).map(r => [yS(p, o, r), r]), c, 2);
        pl.guide(e.Y, e.r, c);
        pl.dot(e.Y, e.r, c);
      });
      pl.label(yIS(p0, 5.8) + 0.4, 5.8, 'IS', GREY);
      pl.label(yS(p0, o, 7.6) + 0.3, 7.6, 'Yˢ', GREY);
      box('IS and Yˢ', 'Their intersection sets output and the real interest rate.', pl.svg);
    }
    // 4. money market
    {
      const pl = panel([0, 25], [0, 2], 'M', 'P', 'money');
      [[e0, GREY], [e1, BLUE]].forEach(([e, c]) => {
        pl.line([[0, 0], [25, 25 / (e.Y * e.h)]], c, 2);
        pl.line([[e.M, 0], [e.M, 2]], c, 2);
        pl.guide(e.M, e.P, c);
        pl.dot(e.M, e.P, c);
      });
      pl.label(24, 24 / (e0.Y * e0.h) - 0.12, 'Mᵈ', GREY, 'end');
      pl.label(e0.M + 0.3, 1.9, 'Mˢ', GREY);
      box('Money market', 'M = P Mᵈ(r + πᵉ, Y): given r and Y, Mˢ pins down P.', pl.svg);
    }

    // table
    const vars = window.SHOCK_VARS;
    const val = { Y: 'Y', C: 'C', I: 'I', N: 'N', w: 'w', r: 'r', i: 'i', P: 'P' };
    let html = '<table><thead><tr><th></th>' + vars.map(v => `<th>${v}<sub>t</sub></th>`).join('') + '</tr></thead><tbody>';
    html += '<tr><th>Theory</th>' + vars.map(v => `<td class="${signClass(shock.signs[v])}">${shock.signs[v]}</td>`).join('') + '</tr>';
    html += '<tr><th>Before</th>' + vars.map(v => `<td>${fmt(e0[val[v]])}</td>`).join('') + '</tr>';
    html += '<tr><th>After</th>' + vars.map(v => `<td>${fmt(e1[val[v]])}</td>`).join('') + '</tr>';
    html += '</tbody></table>';
    root.querySelector('.sim-table').innerHTML = html;

    root.querySelector('.steps').innerHTML =
      `<strong>${shock.label}: ${shock.name}</strong> — ${shock.type}; ${shock.curve}.<ol>` +
      shock.steps.map(s => `<li>${s}</li>`).join('') + '</ol>';
    window.Render.prettifyScripts(root.querySelector('.steps'));
    window.Render.prettifyScripts(root.querySelector('.shock-row'));

    root.querySelectorAll('.shock-row .chip').forEach(c => c.classList.toggle('on', c.dataset.shock === state.shock));
  }

  function mount(main, query) {
    if (query.shock && window.SHOCKS.some(s => s.id === query.shock)) state.shock = query.shock;
    main.innerHTML = `
      <div class="doc">
        <h1>Shock simulator</h1>
        <p class="page-intro">Pick a shock and drag its size. Grey is the economy before the shock, blue after. The sign row is the answer to memorize; the numbers come from an illustrative model.</p>
        <div class="sim-top">
          <div class="shock-row">${window.SHOCKS.map(s => `<button class="chip" data-shock="${s.id}" title="${s.name}">${s.label}</button>`).join('')}</div>
          <div class="sim-options">
            <label>Shock size <input type="range" id="simSize" min="0" max="1" step="0.05" value="${state.size}"></label>
            <label>Labor supply
              <select id="simNs"><option value="elastic">elastic (flat)</option><option value="normal">normal</option><option value="inelastic">inelastic (steep)</option></select></label>
            <label>Labor demand
              <select id="simNd"><option value="elastic">elastic (flat)</option><option value="normal">normal</option><option value="inelastic">inelastic (steep)</option></select></label>
            <label><input type="checkbox" id="simEr"> Labor supply rises with r (upward-sloping Yˢ)</label>
          </div>
        </div>
        <div class="legend"><span><span class="swatch" style="background:var(--muted)"></span>Before</span><span><span class="swatch" style="background:var(--accent)"></span>After</span></div>
        <div class="panels"></div>
        <div class="sim-table"></div>
        <div class="steps"></div>
      </div>`;
    const root = main;
    root.querySelector('#simNs').value = state.ns;
    root.querySelector('#simNd').value = state.nd;
    root.querySelector('#simEr').checked = state.er;
    root.querySelectorAll('.shock-row .chip').forEach(c => c.addEventListener('click', () => {
      state.shock = c.dataset.shock;
      history.replaceState(null, '', '#/simulator?shock=' + state.shock);
      draw(root);
    }));
    root.querySelector('#simSize').addEventListener('input', e => { state.size = Number(e.target.value); draw(root); });
    root.querySelector('#simNs').addEventListener('change', e => { state.ns = e.target.value; draw(root); });
    root.querySelector('#simNd').addEventListener('change', e => { state.nd = e.target.value; draw(root); });
    root.querySelector('#simEr').addEventListener('change', e => { state.er = e.target.checked; draw(root); });
    draw(root);
  }

  window.Simulator = { mount, solve, params, BASE };
})();
