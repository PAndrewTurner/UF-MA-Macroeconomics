/* Full-text search across the four content documents.
   Each document is split into sections at its ## / ### headings. */
(function () {
  const Search = {};
  let index = [];

  function cleanLatex(tex) {
    return tex
      .replace(/\\(left|right)[.|]?/g, '')
      .replace(/\\[a-zA-Z]+/g, ' ')
      .replace(/[{}&]/g, ' ');
  }

  // withMath: include cleaned-up formula text (for matching) or drop it (for snippets)
  function plain(md, withMath) {
    return md
      .replace(/```latex\n([\s\S]*?)```/g, (_, tex) => (withMath ? ' ' + cleanLatex(tex) + ' ' : ' '))
      .replace(/<[^>]+>/g, ' ')
      .replace(/\\([_*[\]()#|{}^\\])/g, '$1')
      .replace(/[*`|#>]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  Search.build = function (docs) {
    index = [];
    docs.forEach(doc => {
      const lines = doc.md.split('\n');
      let cur = { heading: doc.title, id: '', body: [] };
      let h2 = '';
      const push = () => {
        const body = cur.body.join('\n');
        const text = plain(body, false);
        const full = plain(body, true);
        if (full || cur.id) index.push({ doc: doc.id, docTitle: doc.title, heading: cur.heading, parent: cur.parent, id: cur.id, text, lower: (cur.heading + ' ' + full).toLowerCase() });
      };
      lines.forEach(line => {
        const m = line.match(/^(#{2,3}) (.+)$/);
        if (m) {
          push();
          const title = m[2].replace(/\\(.)/g, '$1');
          if (m[1] === '##') h2 = title;
          cur = { heading: title, parent: m[1] === '###' ? h2 : '', id: window.Render.slugify(title), body: [] };
        } else {
          cur.body.push(line);
        }
      });
      push();
    });
  };

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function snippet(text, terms) {
    const lower = text.toLowerCase();
    let pos = -1;
    for (const t of terms) { pos = lower.indexOf(t); if (pos >= 0) break; }
    const start = Math.max(0, pos - 60);
    let s = (start > 0 ? '… ' : '') + text.slice(start, start + 180) + (start + 180 < text.length ? ' …' : '');
    s = escapeHtml(s);
    terms.forEach(t => {
      if (!t) return;
      const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      s = s.replace(re, '<mark>$1</mark>');
    });
    return s;
  }

  Search.query = function (q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const hits = [];
    index.forEach(sec => {
      if (!terms.every(t => sec.lower.includes(t))) return;
      let score = 0;
      const hl = sec.heading.toLowerCase();
      terms.forEach(t => {
        if (hl.includes(t)) score += 10;
        score += Math.min(5, sec.lower.split(t).length - 1);
      });
      hits.push({ sec, score });
    });
    hits.sort((a, b) => b.score - a.score);
    return hits.slice(0, 25).map(h => ({
      href: '#/' + h.sec.doc + (h.sec.id ? '?s=' + h.sec.id : ''),
      where: h.sec.docTitle + (h.sec.parent ? ' › ' + h.sec.parent : ''),
      title: h.sec.heading,
      snippet: snippet(h.sec.text, terms)
    }));
  };

  window.Search = Search;
})();
