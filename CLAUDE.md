# KUAL Studios: Meta glasses apps

Monorepo of Meta Ray-Ban Display web apps (one folder per app, e.g. `recipe-steps/`) plus reference notes in
`docs/meta-wearables/`. Status and setup steps are in `SETUP.md`. The developer has no glasses, so test with the
Chrome Display Simulator and the 600 × 600 viewport.

## Stack
React 19 + TypeScript + Vite + React Router 7, `@wearables-ui-toolkit/mrbd` (+ `/icons`), Playwright QA.
Games: Vite + TypeScript + Three.js (`meta-wearables-webapp-game`). Native (later): Kotlin/Android DAT (`mwdat-android`).

## Which plugin owns what
- **Glasses app UI (inside an app folder):** the `meta-wearables-webapp` skills and the UI Toolkit skills
  (`wearables-ui-toolkit-web` → its production patterns) are authoritative. Do not apply `frontend-design` or other
  generic design guidance there: no custom styling of toolkit components, no literal colors, sizes or fonts, tokens only.
- **Companion pages** (landing page, install/QR page, KUAL Studios site; put them under `sites/`): use
  `taste-skill` for art direction first, then `impeccable` (`/impeccable critique`, `audit`, `polish`) to refine,
  plus `frontend-design` and `modern-web-guidance`. Impeccable's auto-detector hook is **off** for this repo
  (`.impeccable/config.json`) because it would fight the toolkit in glasses apps. Run `/impeccable audit <path>`
  by hand on companion pages, or turn the hook back on in a separate site repo.
- **Glasses games** (`meta-wearables-webapp-game`): the game framework owns its own rendering, so `taste-skill`
  art direction (palette, mood, HUD look) is welcome. Keep to the game plugin's display, performance and validation rules.
- **Glasses app review:** `/impeccable critique` may be used for read-only feedback on hierarchy and copy.
  Apply its suggestions only where the UI Toolkit allows them.
- **Docs lookups:** Meta APIs → Wearables MCP (`search_webapps_docs`, `search_dat_docs`); React, Vite,
  React Router or Three.js versions → `context7`.
- **Performance:** `ai-glasses-webapp-optimize-performance` first; `chrome-devtools-mcp` for traces and LCP/memory debugging.
- **Publishing:** `ai-glasses-webapp-publish` / the `vercel` plugin, only when the user asks to go public.

## Workflow
1. Build with `ai-glasses-webapp-build` (new app) or `feature-dev` (bigger feature in an existing app).
2. Verify: the selected toolkit pattern's `verify-app.mjs`, then
   `node <meta-wearables-webapp>/skills/ai-glasses-webapp-test/scripts/check-webapp.mjs <app>`. Fix every failure.
3. Tidy with `code-simplifier`, then review with `/code-review` before committing.

## Windows gotchas
- `init-webapp.mjs` crashes with `spawnSync npm.cmd EINVAL` on Node 24. Run
  `npm install @wearables-ui-toolkit/mrbd @wearables-ui-toolkit/icons` in the app folder instead.
- `check-webapp` fails any focusable row that extends past 600 × 600, even in a scrolling list.
