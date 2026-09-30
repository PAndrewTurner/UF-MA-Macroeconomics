"""Headless smoke test: every view renders, math has no KaTeX errors,
search returns hits, flashcards flip, and the simulator matches the
theory sign table for every shock.

    pip install playwright && python3 -m playwright install chromium
    python3 tests/smoke_test.py
"""
from __future__ import annotations

import functools
import http.server
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PORT = 8765


def serve() -> http.server.ThreadingHTTPServer:
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):  # silence request logging
            pass

    handler = functools.partial(Quiet, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


SIGN_CHECK = """
() => {
  const out = [];
  const map = {Y:'Y', C:'C', I:'I', N:'N', w:'w', r:'r', i:'i', P:'P'};
  const o = {ns:'normal', nd:'normal', er:false};
  for (const s of window.SHOCKS) {
    const e0 = window.Simulator.solve(window.Simulator.params(null, 0), o);
    const e1 = window.Simulator.solve(window.Simulator.params(s, 1), o);
    for (const v of window.SHOCK_VARS) {
      const d = e1[map[v]] - e0[map[v]];
      const got = Math.abs(d) < 1e-6 ? '0' : (d > 0 ? '+' : '\\u2212');
      const want = s.signs[v];
      if (want !== '?' && want !== got) out.push(`${s.id} ${v}: theory ${want}, model ${got}`);
    }
  }
  return out;
}
"""


def main() -> int:
    failures: list[str] = []
    server = serve()
    base = f"http://127.0.0.1:{PORT}/index.html"
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        errors: list[str] = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)

        for view in ["guide", "formulas", "problems", "practice"]:
            page.goto(f"{base}#/{view}", wait_until="networkidle")
            if page.locator(".doc h1").count() == 0:
                failures.append(f"{view}: no heading rendered")
            bad = page.locator(".katex-error").count()
            if bad:
                failures.append(f"{view}: {bad} KaTeX errors")

        page.goto(f"{base}#/guide", wait_until="networkidle")
        page.fill("#search", "euler equation")
        page.wait_for_timeout(200)
        if page.locator(".search-results a").count() == 0:
            failures.append("search: no hits for 'euler equation'")

        page.goto(f"{base}#/flashcards", wait_until="networkidle")
        page.locator("#fcCard .card").click()
        if page.locator(".card .back").count() != 1:
            failures.append("flashcards: card did not flip")

        page.goto(f"{base}#/simulator?shock=At", wait_until="networkidle")
        if page.locator(".panel svg").count() != 4:
            failures.append("simulator: expected 4 panels")
        failures += page.evaluate(SIGN_CHECK)

        failures += [f"console: {e}" for e in errors]
        browser.close()
    server.shutdown()

    if failures:
        print("FAIL")
        for f in failures:
            print(" -", f)
        return 1
    print("OK: all views render, search works, flashcards flip, simulator matches theory signs")
    return 0


if __name__ == "__main__":
    sys.exit(main())
