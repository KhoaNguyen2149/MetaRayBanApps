# Wearables Developer Center: solo-developer onboarding checklist

Setup: one person. You are the org admin, the only developer and the first tester.
Sources: DAT v1.0 docs, "Onboarding and organization management", plus the Wearables MCP
(`search_dat_docs`) as of 2026-10-18. Items marked *(not in docs)* are my recommendations
or assumptions, not Meta's guidance. The docs are written for companies and don't mention solo developers.

## ⛔ Decide before signing up (you are the admin)
1. [x] **No existing MMA org:** solo developer, so create a new one.
2. [x] **Org name:** **KUAL Studios**
3. [ ] **Pick the email for your MMA** (your developer identity). You enter it on the **work.meta.com
   MMA setup screen**, which opens automatically when you click sign up at https://wearables.developer.meta.com.
   Use an email that is **not** already your personal Meta / glasses login, such as a KUAL Studios
   address if you own the domain, or a new dedicated inbox. *(not in docs: the docs don't say whether a
   personal email works or whether one email can be both)*
4. [ ] **Plan for losing access.** With no backup admin, losing your MMA locks you out of the org.
   Turn on 2FA and keep your recovery details up to date. *(not in docs)*

## Org setup (≈15 min, all done by you)
- [ ] Log out of developers.meta.com (Horizon) first. The other domain causes link errors.
- [ ] Sign up at https://wearables.developer.meta.com → redirected to MMA setup on work.meta.com.
- [ ] Create the MMA org in Admin Center. You become its admin automatically.
- [ ] Log into the Developer Center with your MMA. Your **default personal team** is enough,
      so there's no team to create and no one to invite.

## Two accounts, one person
| Purpose | Account | Notes |
|---|---|---|
| Developer Center, projects, versions | **Managed Meta Account (MMA)** | Created during org setup |
| Release-channel tester, glasses pairing | **Regular Meta account** (auth.meta.com) | Docs say an MMA is **not** supported as a tester |

- [ ] Make sure your glasses are paired in the Meta AI app under your **regular** Meta account, with Developer Mode on
      and firmware ≥ v125.
- [ ] Invite your regular-account email to your project's **Beta** release channel to test your own builds.

## Before writing integration code
- [ ] Create **separate** Developer Center apps for Android and iOS. On Windows, Android is the only
      realistic option for now.
- [ ] If you build for iOS later, the bundle ID can't contain a `-` dash.
- [ ] App name = voice-invocation keyword. Pick something phonetically clear.
- [ ] Voice Invocation permission needs **Meta approval**, so request it early.

## Later (only if you add people)
- Collaborators must join your MMA org. As admin, invite them in Admin Center, or use
  Team → **Invite member** once they have an MMA.
- External testers only need a regular Meta account, not an MMA and not org membership.
