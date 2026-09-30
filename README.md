# ECO5207 Macro Study App

A study web app for Macroeconomic Analysis: the full study guide, formula sheet,
worked problem sets and practice exam, with search, flashcards and a shock
simulator for the neoclassical model.

## Quick start (macOS)

```bash
cd macro-study-app
python3 build.py
python3 -m http.server 8000
```

Open http://localhost:8000. Or just double-click `index.html` (after `build.py`).

## Features

- **Study guide, formula sheet, problem sets, practice exam** — rendered with KaTeX math, a sidebar table of contents, and deep links to every section.
- **Search** — press `/` anywhere; results jump to the matching section.
- **Flashcards** — 62 cards across Concepts, Formulas, History and Shocks. Space flips, 1 = again, 2 = got it. Progress is saved in your browser.
- **Shock simulator** — pick any of the 8 shocks, drag its size, change labor-supply/demand elasticity, or make Ys upward-sloping; four linked panels and the sign table update live.

## Editing content

Edit the markdown in `content/`, then run `python3 build.py`.

## Continuing in Claude Code

Open this folder in Claude Code; `CLAUDE.md` explains the structure, conventions and backlog.
