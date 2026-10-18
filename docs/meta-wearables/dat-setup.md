# Device Access Toolkit (DAT): native iOS / Android

## Requirements
- Phone OS: same as the Meta AI app, **iOS 15.2+ / Android 10+**.
- IDE: **Xcode 14.0+** (iOS, Mac only) or **Android Studio Flamingo+** (Android).
- Glasses: Ray-Ban Meta Gen 1/Gen 2, Ray-Ban Meta Optics, Meta Ray-Ban Display (the FAQ also lists Oakley Meta HSTN/Vanguard).
- No glasses? Use **Mock Device Kit (MDK)**: it simulates the whole SDK stack (registration, permissions, camera, photos,
  device state, inputs). In v1.0 it can also render the 600 × 600 Display surface in your app or in Chrome.
  (The older FAQ said MDK didn't support display glasses, but the v1.0 docs supersede that.)
- Minimums: **Meta AI app v272+**, **glasses firmware v125+** (exact table: `/docs/develop/dat/version-dependencies/`).
- The app runs on the **phone**. Glasses connect over Bluetooth (camera, 5 mics, speakers, display on MRBD).

## Glasses setup
1. Update the Meta AI app and glasses firmware to the minimums.
2. Pair the glasses in the Meta AI app.
3. Enable Developer Mode (below). Unpublished apps then appear under
   **Meta AI settings > App connections > Developer mode apps**, and testing via release channels works.
4. For Display features, install DAT on the glasses: put the glasses **on** → Dev Mode → press **Install**
   (takes about 5–10 s; keep the Meta AI app open; iOS shows a Wi-Fi prompt).

### Check glasses firmware
Meta AI app → Devices tab (glasses icon) → your device → gear icon → **General > About > Version**.

### Enable Developer Mode
Meta AI app → **Settings > App Info** → tap **App version** 5× → toggle **Developer Mode** → **Enable**.
It stays on across sessions.

## Developer Center gotchas
- Create separate apps in the Developer Center for iOS and Android if the bundle ID and package name differ.
- iOS bundle IDs can't contain `-`.
- Without Developer Mode, registration needs the **Wearables Application ID** in the manifest and in the registration call.
- Versions created **before DAT 1.0** don't work with 1.0 SDK builds.
- If the Meta AI app has multiple glasses, registering installs the DAT app on only one; install it manually on the others.

## Permissions (runtime)
- Need a user prompt via the Meta AI flow: `CAMERA`, `MICROPHONE` (speech).
- No prompt needed: Motion, Inputs, Device state.
- Voice invocation is configured in the Developer Center, not in the manifest. It needs Meta approval, and the app name is the spoken keyword.

## Android MDK instrumentation test base (from docs)
```kotlin
mockDeviceKit = MockDeviceKit.getInstance(targetContext); mockDeviceKit.enable()
// grant: pm grant <pkg> android.permission.BLUETOOTH_CONNECT (+ CAMERA if using setCameraFeed(CameraFacing))
// tearDown: mockDeviceKit.disable()
```
Samples: github.com/facebook/meta-wearables-dat-android/tree/main/samples
