/* Markdown rendering: marked for the prose, KaTeX for ```latex blocks,
   heading ids for deep links, and a small pass that turns plain-text
   subscripts/superscripts (Y_t, Y_{t+1}, C^d) into <sub>/<sup>. */
(function () {
  const Render = {};

  Render.slugify = function (text) {
    return String(text)
      .toLowerCase()
      .replace(/<[^>]+>/g, '')
      .replace(/[–—]/g, '-')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  function renderLatex(src) {
    try {
      return window.katex.renderToString(src, { displayMode: true, throwOnError: false, strict: 'ignore' });
    } catch (e) {
      const pre = document.createElement('pre');
      pre.textContent = src;
      return pre.outerHTML;
    }
  }

  // ---- sub/superscript prettifier -------------------------------------
  const LOWER = /[a-zα-ω]/;
  const UPPER = /[A-ZΑ-Ω]/;
  const DIGIT = /[0-9]/;

  function charClass(c) {
    if (LOWER.test(c)) return 'l';
    if (UPPER.test(c)) return 'u';
    if (DIGIT.test(c)) return 'd';
    if (c === '*') return 's';
    return null;
  }

  // Is the text before position i a variable name that can take a subscript?
  function canTakeSub(text, i) {
    const m = text.slice(0, i).match(/([A-Za-zΑ-Ωα-ω]+)(\d*)(['*]*)$/);
    if (!m) return false;
    if (m[2].length > 1) return false; // e.g. "L03_01" is a file name, not math
    return true;
  }
  function canTakeSup(text, i) {
    return /[A-Za-z0-9Α-Ωα-ω)'*]$/.test(text.slice(0, i));
  }

  function readScript(text, j) {
    // returns [scriptText, endIndex] or null
    if (text[j] === '{') {
      let depth = 0;
      for (let k = j; k < text.length; k++) {
        if (text[k] === '{') depth++;
        else if (text[k] === '}') { depth--; if (depth === 0) return [text.slice(j + 1, k), k + 1]; }
      }
      return null;
    }
    const cls = charClass(text[j] || '');
    if (!cls) return null;
    let k = j + 1;
    while (k < text.length && charClass(text[k]) === cls) k++;
    return [text.slice(j, k), k];
  }

  function prettifyText(text) {
    if (!/[_^]/.test(text)) return null;
    const frag = document.createDocumentFragment();
    let buf = '';
    let i = 0;
    let changed = false;
    while (i < text.length) {
      const c = text[i];
      if ((c === '_' && canTakeSub(text, i)) || (c === '^' && canTakeSup(text, i))) {
        const got = readScript(text, i + 1);
        if (got) {
          if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ''; }
          const el = document.createElement(c === '_' ? 'sub' : 'sup');
          el.textContent = got[0];
          frag.appendChild(el);
          i = got[1];
          changed = true;
          continue;
        }
      }
      buf += c;
      i++;
    }
    if (buf) frag.appendChild(document.createTextNode(buf));
    return changed ? frag : null;
  }

  Render.prettifyScripts = function (root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || p.closest('code, pre, .katex, script, style, sub, sup')) return NodeFilter.FILTER_REJECT;
        return /[_^]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const frag = prettifyText(n.nodeValue);
      if (frag) n.parentNode.replaceChild(frag, n);
    });
  };

  // ---- markdown -> element -----------------------------------------------
  Render.markdown = function (md) {
    const latexBlocks = [];
    // Pull latex fences out first so marked never touches them.
    const src = md.replace(/```latex\n([\s\S]*?)```/g, (_, body) => {
      latexBlocks.push(body.trim());
      return `\n<div class="math-block" data-math="${latexBlocks.length - 1}"></div>\n`;
    });
    const html = window.marked.parse(src, { gfm: true, breaks: false });
    const el = document.createElement('div');
    el.className = 'doc';
    el.innerHTML = html;
    el.querySelectorAll('.math-block[data-math]').forEach(div => {
      div.innerHTML = renderLatex(latexBlocks[Number(div.dataset.math)]);
    });
    const used = {};
    el.querySelectorAll('h1, h2, h3').forEach(h => {
      let id = Render.slugify(h.textContent) || 'section';
      if (used[id]) id += '-' + (++used[id]); else used[id] = 1;
      h.id = id;
    });
    // "Unit 3 — The Solow growth model (Ch 5, Lecture 4)" -> eyebrow, title, sources.
    el.querySelectorAll('h2').forEach(h => {
      const parts = Render.splitUnit(h.textContent);
      if (!parts) return;
      h.textContent = '';
      h.classList.add('unit-head');
      [['h-eyebrow', parts.unit], ['h-title', parts.title], ['h-src', parts.src]].forEach(([cls, txt]) => {
        if (!txt) return;
        const s = document.createElement('span');
        s.className = cls;
        s.textContent = txt;
        h.appendChild(s);
      });
    });
    // The "where …" line that defines each symbol of the formula above it.
    el.querySelectorAll('.math-block + p').forEach(p => {
      if (/^where\s/i.test(p.textContent.trim())) p.classList.add('where');
    });
    Render.prettifyScripts(el);
    return el;
  };

  Render.splitUnit = function (text) {
    const m = String(text).match(/^(Unit \d+)\s+[—–-]\s+(.+?)(?:\s+\(([^()]+)\))?$/);
    return m ? { unit: m[1], title: m[2], src: m[3] || '' } : null;
  };

  // Headings (level 2) for the sidebar table of contents, straight from markdown.
  Render.outline = function (md, level) {
    const re = new RegExp('^' + '#'.repeat(level) + ' (.+)$', 'gm');
    const out = [];
    let m;
    while ((m = re.exec(md))) {
      const title = m[1].replace(/\\(.)/g, '$1');
      out.push({ title, id: Render.slugify(title) });
    }
    return out;
  };

  window.Render = Render;
})();
