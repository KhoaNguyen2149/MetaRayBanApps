# Meta Ray-Ban Display (MRBD) Web Apps

Plain HTML/CSS/JS loaded by the glasses from an HTTPS URL. **MRBD only.** No camera access. Display is 600 × 600.

## Requirements
- Hardware: Meta Ray-Ban Display glasses. Meta Neural Band is optional but recommended.
- Meta AI app **v272+** (Settings > App Info > App version). Glasses **v125+**
  (Devices → device → gear → General > About > Release Version).
- Developer Mode on: Settings > App Info → tap App version 5× → Enable. It persists.
- Hosting: a **public HTTPS** URL with a valid TLS cert. HTTP is rejected.
  Options: Vercel, Netlify, Cloudflare Pages, GitHub Pages, Replit, Lovable, or your own server.

## Four setup steps
1. AI tools (plugin + MCP; see [ai-tooling.md](ai-tooling.md)) → 2. hardware → 3. Meta AI app version + Dev Mode → 4. HTTPS hosting.

## Testing
1. Open the production URL in desktop Chrome and check the console and network panel.
2. Preview at 600 × 600 and in the **Meta Ray-Ban Display Simulator** (Chrome extension).
3. Always validate on the glasses. The simulator doesn't replace the device.

## Installing on glasses
- **QR code** of an *install link*. A plain URL QR won't work. Generate it with the Simulator's
  **View on Glasses QR** or the AI Coding plugin. The wearer looks at it, and an add-to-glasses confirmation appears
  (marked "unverified" because the app isn't reviewed).
- **`navigator.install(installUrl?, { name? })`** from a page already open on the glasses:
```js
if (navigator.install) installButton.hidden = false;
installButton.addEventListener('click', async () => {
  try { await navigator.install(); }          // resolved = request dispatched, NOT installed
  catch (err) { showManualInstructions(); }   // DataError | NotSupportedError | AbortError
});
```
  - `navigator.install` is undefined in normal browsers. On glasses it can still reject, so always catch.
  - Name fallback order: `options.name` → `<meta name="application-name">` → title → hostname → "App". Set one of the first two.
  - Never treat a resolved promise as an install. There's no callback for accept or decline.
- `<install installurl="https://…">Add to glasses</install>` also works, but failures are silent. Prefer `navigator.install()`.

## UI toolkit
`npm install @wearables-ui-toolkit/mrbd react@^19.2.7 react-dom@^19.2.7` (optional `@wearables-ui-toolkit/icons`).
Give `html, body, #root` 100% height and wrap the UI in `<App>`. Node 18+.
