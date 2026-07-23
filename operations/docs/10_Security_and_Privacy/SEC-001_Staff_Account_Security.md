---
title: "Keeping Staff Accounts Safe"
sop_code: "SEC-001"
version: "1.1"
owner: "Security Owner"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# SEC-001 — Keeping Staff Accounts Safe

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Keep staff accounts from being hacked. Limit the damage if an account is stolen or exposed.

## 2. Scope

Discord, email, Minecraft, website, host, code repository, Cloudflare/domain, social media, payment provider, password manager, and other staff accounts.

## 3. Who does what

- **Every staff member:** Secures and monitors their own accounts.
- **System owner:** Enforces MFA and access controls where available.
- **Staff Manager:** Includes security in onboarding/offboarding.
- **Security owner/Founder:** Responds to compromise and high-risk exceptions.

## 4. Procedure

### 4.1 Required safety steps
- Use a different password for every account. Create and store it in a trusted password manager.
- Enable MFA, preferring authenticator app, passkey, or hardware key over SMS where supported.
- Store recovery codes securely and separately.
- Keep operating system, browser, Discord, Java tools, and security software updated.
- Lock the device when unattended and use separate user profiles where practical.

### 4.2 Avoid scams and fake login pages
Do not open unexpected files, run “verification” programs, scan unknown QR codes, or enter login details through links sent in DMs. Check the request through a second trusted method when it involves access, money, tokens, files, or demands for secrecy.

### 4.3 Safe device and login rules
Avoid staff administration on public/shared computers. Do not leave panels logged in. Review active sessions periodically. Remove old devices and third-party app connections.

### 4.4 Discord and Minecraft specifics
- Do not accept “test this plugin/mod/resource pack” files from untrusted users.
- Treat jar/exe/scr/bat/zip files and macro tools as high risk.
- Verify bot authorization scopes and official domains.
- Never share login tokens, session files, launcher profiles, or account cookies.

### 4.5 If an account may be hacked
1. From a clean device, secure the primary email/password manager first.
2. Change password, revoke sessions, reset MFA/recovery, and remove suspicious apps.
3. Notify the Security Owner immediately.
4. Pause affected Eldenstead access.
5. Preserve suspicious messages/files and timeline.
6. Follow SEC-003 for staff or a hacked high-level account.

### 4.6 Report mistakes quickly
Reporting a mistake quickly can reduce the damage. Staff will not be punished only for honestly reporting a security mistake. Careless actions or hiding what happened may still need review.

## 5. When to get senior help

Get senior help at once for compromised email, Discord owner/admin, host, database, code repository, domain/Cloudflare, billing, or password-manager access; malware execution; token exposure; or unexplained staff actions.

## 6. What to record

- MFA/access inventory
- Security training confirmation
- Suspicious message/file evidence
- Compromise timeline
- Session revocation and password/MFA reset
- Access restoration approval

## 7. Final checklist

- [ ] Unique password/password manager used
- [ ] MFA and recovery secured
- [ ] Device/session hygiene maintained
- [ ] Urgent requests verified separately
- [ ] Unknown executable/plugin files avoided
- [ ] Suspected compromise reported immediately
- [ ] Sessions and connected apps revoked when needed

## 8. Related guides

- `STF-002`
- `STF-005`
- `OPS-007`
- `SEC-002`
- `SEC-003`
