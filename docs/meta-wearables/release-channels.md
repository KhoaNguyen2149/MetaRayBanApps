# Versions & release channels

## Versions
Change the name, icon, permissions, or config → create a **new version** to ship it to testers.
Saved details are under **Distribute > Version details > Project data**.
- **Major**: breaking changes. **Minor**: new backward-compatible features. **Patch**: fixes.
- Create: Developer Center → project → **Distribute > Versions** → **Create new version** → pick a type → **Create version**.
- Versions made before DAT 1.0 don't work with 1.0 SDK builds.

## The Beta channel
- One private, invite-only **Beta** channel is created automatically per integration. It distributes one version at a time.
- Configure: project → **Distribute > Release channels** → Beta ⋯ → **View**
  - Overview: rename/describe → Save changes
  - Version: Edit → pick a version (must be build **Ready**) → Save changes
  - Users: **+ Invite users** → emails → **Send invites**
- Testers need a **regular Meta account** (auth.meta.com). A **Managed Meta Account is NOT supported**.
- Testers accept by email, can leave any time, and you can revoke or reinvite. The limit is shown on the Users tab.
- Removing a tester doesn't unregister an app they already connected.
- Testers see their invites at https://wearables.meta.com/invites

## Tester checks in the Meta AI app
- **Permissions**: device menu → Settings → **App connections** → app → set camera etc.
  (Always allow / Allow once / Don't allow) → Confirm. Applies to all devices.
- **Release channel**: device menu → Settings → **Release Channel** → make sure the private channel is selected → Confirm.
- Distribution needs glasses firmware **v125+**.
