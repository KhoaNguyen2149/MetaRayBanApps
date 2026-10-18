# AI coding tools setup (Claude Code)

Recommended combo = a **GitHub plugin** (coding patterns and workflows) + the **Wearables MCP server** (live docs).

## Wearables MCP server
```bash
claude mcp add --transport http wearables --scope project https://mcp.developer.meta.com/wearables
claude mcp list
```
- Tools: `search_dat_docs` (DAT native SDK), `search_webapps_docs` (Display Web Apps).
  `wdc_*` tools read your own Developer Center projects and need a Developer Center MCP token.
- Use the MCP host above, **not** the developer-site URL. Ask for Markdown output where supported.
- Start a fresh Claude Code session if the tools don't show up.

## DAT plugin (native)
```bash
claude plugin marketplace add facebook/meta-wearables-dat-android
claude plugin install mwdat-android@mwdat-android-marketplace
# iOS (needs a Mac + Xcode):
claude plugin marketplace add facebook/meta-wearables-dat-ios
claude plugin install mwdat-ios@mwdat-ios-marketplace
```
Other tools: `./install-skills.sh copilot|cursor|agents` from the repo. Tell prompts which platform you're on
and which module (`MWDATCore`, `MWDATCamera`, `MWDATMockDevice`).

## Web Apps plugin (Ray-Ban Display)
```text
/plugin marketplace add https://github.com/facebook/meta-wearables-webapp
/plugin install meta-wearables-webapp@meta-wearables
/plugin install meta-wearables-webapp-game@meta-wearables   # games
```
Game skills: `create-webapp-game`, `webapp-game-director`, `iterate-webapp-game`, `update-webapp-game-framework`,
`read-webapp-game-docs`, `validate-webapp-game`, `add-webapp-game-logging`.
Needs Node + npm on PATH (Chrome and ImageMagick are optional).

## Meta's suggested prompts
- DAT setup: "Use …/dat/getting-started-toolkit/ and …/dat/ai-assisted-mcp/ to prepare my DAT development setup… Do not edit app code until setup gaps are clear."
- Web Apps setup: "Use …/webapps/setup/ and …/webapps/ai-assisted-mcp/ … smallest checklist for tooling, hardware, Meta AI app version, Developer Mode, HTTPS hosting, local browser verification."
- Project config: "Use …/dat/manage-projects/ … checklist for project, application ID, client token, bundle ID/package name, icon, permission justification, version fields… keep secrets out of source control."
- Test release: "Use …/dat/set-up-release-channels/ … release plan for version creation, Beta channel config, tester eligibility, permissions, validation."
