# KUAL Studios: Meta glasses dev setup

Hardware: **no glasses yet**. PC: Windows (no Mac). Everything below can be built and tested with simulators.
On-glasses testing waits until you own a pair.
Reference notes: [docs/meta-wearables/](docs/meta-wearables/README.md). Org onboarding: [WDC-onboarding-checklist.md](WDC-onboarding-checklist.md).

## Done (by Claude, 2026-10-18)
- [x] Wearables MCP connected for this project (`.mcp.json`; `search_dat_docs` / `search_webapps_docs` work)
- [x] Plugins installed (project scope): `meta-wearables-webapp` 128.1.0, `meta-wearables-webapp-game` 1.0.1, `mwdat-android` 1.0.1
- [x] General plugins (project scope): `typescript-lsp` (+ global typescript-language-server), `context7`,
      `frontend-design`, `modern-web-guidance`, `chrome-devtools-mcp`, `vercel`, `feature-dev`, `code-simplifier`.
      Who owns what is in [CLAUDE.md](CLAUDE.md).
- [x] UI design skills (project scope): `impeccable` 4.6.0 (pbakaus; auto-hook turned off here) and `taste-skill` 2.0.0 (Leonxlnx)
- [x] Popular GitHub skills (project scope): `web-quality-skills` (addyosmani), `ui-ux-pro-max` (nextlevelbuilder),
      `web-design-guidelines` + `vercel-composition-patterns` (vercel-labs, via `npx skills`), 10 `threejs-*` skills
      (cloudai-x). All checked: Markdown only, no hooks. Pinned in `skills-lock.json`.
- [x] UI Toolkit LLM skills (24) installed at account scope in `~/.claude/skills/`
- [x] Tooling: Node 24.13 / npm 11.6, git 2.52, Chrome, VS Code, GitHub CLI (signed in), ImageMagick 7.1.2,
      Playwright Chromium
- [x] Git repo, private GitHub remote: https://github.com/KhoaNguyen2149/MetaRayBanApps

## Your to-do list
### Now (about 10 minutes)
1. [x] Developer Center sign-up (freelancer, legal name, United States).
2. [x] "Meta Ray-Ban Display Simulator" Chrome extension.
3. [ ] **Start a new Claude Code session in this folder.** Plugins and skills only load at session start.
4. [ ] **Sign in to two plugins:** open an interactive `claude` terminal in this folder, run `/mcp`, and authenticate
       **context7** (free account, live library docs) and **vercel** (free Hobby account, needed later to publish).
       Until then those two stay offline, and everything else works.
5. [ ] *Optional:* add the claude.ai directory plugins suggested in chat (Design, VectorLab UI/UX, A11y Enforcer).

### When you want the app public (so anyone with Display glasses can install it)
6. [ ] Have a Vercel account (step 4), then ask Claude to "publish recipe-steps". The `ai-glasses-webapp-publish` skill
       deploys it and makes the add-to-glasses QR code.

### When you start a native Android (DAT) app
7. [ ] Get an Android 10+ phone and the Meta AI app. Ask Claude to install Android Studio (winget) and add the
       `chrisbanes/skills` Kotlin/Compose plugin. Then create the project in the Developer Center
       (package name, icon ≤ 200 × 200, permission justifications).

### When you buy glasses
8. [ ] Meta AI app ≥ v272, glasses firmware ≥ v125, Developer Mode (Settings > App Info → tap App version 5×).
       Then scan the app's QR code to test on the real display.

## First app: `recipe-steps/` (built and published 2026-10-18)
- **Live:** https://recipe-steps.vercel.app (Vercel project `recipe-steps`, team `kual-studios`).
  Add-to-glasses QR: `recipe-steps/qr-publish.png`
  (deep link `fb-viewapp://web_app_deep_link?appName=recipe-steps&appUrl=https%3A%2F%2Frecipe-steps.vercel.app`).
- Redeploy: `cd recipe-steps && vercel --prod --yes`. The same URL keeps working for existing installs.
  Meta's `publish-to-vercel.mjs` crashes on Windows (`spawnSync vercel ENOENT`), so run its steps by hand.
- Performance baseline: [recipe-steps/PERF.md](recipe-steps/PERF.md). The first load (~5.5 s) misses Meta's targets; optimization is a to-do.
- Recipes list → Cooking screen with **Next step / Finish / Start over**. Progress is saved per recipe in localStorage.
- Built on Meta's routed-list pattern. `verify-app` and the `check-webapp` quality gate both pass
  (~187 KB gzipped, 5 requests, no console errors).
- Run locally: `cd recipe-steps && npm run preview -- --host 127.0.0.1 --port 4173` → http://127.0.0.1:4173/
- Gate quirk: any focusable row past the 600 × 600 frame fails `check-webapp`, so the starter has 4 recipes.
- Windows quirk: Meta's `init-webapp.mjs` crashes (`spawnSync npm.cmd EINVAL` on Node 24). Run
  `npm install @wearables-ui-toolkit/mrbd @wearables-ui-toolkit/icons` in the app folder yourself instead.

## Path A: Display Web App (recommended start, no glasses needed)
- Build in React + Meta's UI toolkit, or as a game (Vite + Three.js) with the game plugin.
- Test: desktop Chrome at 600 × 600 + the Simulator extension. Claude can drive Chrome to screenshot and click through it.
- Host on a public HTTPS URL (GitHub Pages or Vercel) so anyone with Display glasses can install it via QR.
- Limitation: the simulator can't reproduce real Neural Band input, sensors, phone location or speech exactly.

## Path B: Native DAT app (Android)
- **Mock Device Kit** simulates the glasses (camera stream, photos, permissions, device state) and, in v1.0,
  renders the 600 × 600 Display surface in your app or in Chrome.
- Needs Android Studio (Flamingo+) and an Android 10+ phone or emulator. Emulator support for MDK isn't confirmed in the docs.
- iOS isn't possible without a Mac.

## If you buy glasses later
- Ray-Ban Display = both paths, including Web Apps. Non-display Ray-Ban Meta = native DAT only (no Web Apps).
- Then do: Meta AI app ≥ v272, glasses ≥ v125, Developer Mode (Settings > App Info → tap App version 5×).
