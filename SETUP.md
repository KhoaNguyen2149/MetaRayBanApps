# KUAL Studios: Meta glasses dev setup

Hardware: **no glasses yet**. PC: Windows (no Mac). Everything below can be built and tested with simulators.
On-glasses testing waits until you own a pair.
Reference notes: [docs/meta-wearables/](docs/meta-wearables/README.md). Org onboarding: [WDC-onboarding-checklist.md](WDC-onboarding-checklist.md).

## Done (by Claude, 2026-10-18)
- [x] Wearables MCP connected for this project (`.mcp.json`; `search_dat_docs` / `search_webapps_docs` work)
- [x] Plugins installed (project scope): `meta-wearables-webapp` 128.1.0, `meta-wearables-webapp-game` 1.0.1, `mwdat-android` 1.0.1
- [x] Tooling: Node 24.13 / npm 11.6, git 2.52, Chrome, VS Code, GitHub CLI (signed in), ImageMagick 7.1.2
- [x] Git repo initialized with a `.gitignore` that keeps secrets out.

## You need to do these
1. [x] **Finish Developer Center sign-up** (freelancer, your legal name, United States). Done 2026-10-18.
2. [x] **Install the "Meta Ray-Ban Display Simulator"** Chrome extension (done 2026-10-18):
       https://chromewebstore.google.com/detail/meta-ray-ban-display-simu/jpjlmmodokemlepklkdbimceggpbjcll
3. [ ] Skip for now (needs glasses): Meta AI app version, glasses firmware, Developer Mode.

## First app: `recipe-steps/` (built 2026-10-18)
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
