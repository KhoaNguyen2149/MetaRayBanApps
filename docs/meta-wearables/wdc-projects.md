# Developer Center projects

## Create
**New project** → name + short description.

## Configuration (sidebar)
- Add your mobile app details: Android **package name** and/or iOS **bundle ID**.
- Copy the **Wearables Application ID** integration details into your app's manifest and registration call.
  This is needed to register without Developer Mode. Keep IDs and client tokens out of git.
- If the package name and bundle ID differ, create two apps (one Android-only, one iOS-only). No `-` in iOS bundle IDs.

## Product listing
- App name + icon: **PNG or JPEG, max 200 × 200**. Separate dark and light icons are allowed.
- Users see these in the Meta AI app permission screens.

## Permissions tab
- Camera, microphone, and voice invocation need a **justification**. Meta reviewers see it; end users don't.

## Distribute
- Each version auto-builds a DAT app. Builds usually take ≤10 min (up to 30).
  Status: N/A (no artifact) / In Progress / Ready / Failed (rare; fix by creating a new version).
- Only assign a version to a release channel once its build is **Ready**.

## Remove / restore
- First take any version off the production channel. Then Overview → **Remove project** → type the name → Remove.
- Recoverable for **180 days** under **Deleted projects** → Restore (it returns to development mode and isn't re-published).
- Users who already connected keep access until they disconnect.
