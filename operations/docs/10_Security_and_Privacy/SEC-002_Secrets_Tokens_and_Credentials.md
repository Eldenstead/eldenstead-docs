---
title: "Protecting Passwords, Tokens, and Secrets"
sop_code: "SEC-002"
version: "1.1"
owner: "Security Owner"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# SEC-002 — Protecting Passwords, Tokens, and Secrets

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Deleting a leaked token from Discord or Git history does not make it safe; rotate it.

## 1. Purpose

Keep passwords, tokens, keys, and other secrets out of public or unsafe places.

## 2. Scope

Passwords, API keys, bot tokens, database login details, SSH keys, webhooks, OAuth secrets, recovery codes, store/provider keys, signing keys, and private configuration values.

## 3. Who does what

- **Secret owner:** Knows purpose, systems, and rotation process.
- **Developers/Administrators:** Use secrets through approved injection/storage.
- **Security owner:** Maintains inventory and responds to exposure.
- **Founders:** Control highest-impact owner/billing/domain secrets.

## 4. Procedure

### 4.1 Storage
Use an approved password/secret manager or protected service environment. Do not store secrets in:
- Source code or committed config
- Discord messages, tickets, forum posts, or email drafts
- Public paste sites or AI prompts
- Screenshots, videos, stream overlays, or documentation examples
- Shared text files or unencrypted backups

### 4.2 Access
Grant only to accounts/services that need the secret. Prefer separate per-service/per-environment login details. Avoid one shared admin password across Minecraft, website, host, and database.

### 4.3 Development and logs
Use placeholders such as `${DB_PASSWORD}`. Ensure exception traces, debug commands, build output, and configuration dumps do not print secrets. Redact before sharing logs.

### 4.4 Rotation
Rotate when:
- A staff member with access leaves or changes role
- A secret is pasted, committed, screenshotted, logged, or sent insecurely
- A device/account is compromised
- A vendor recommends rotation
- The secret is old/high-impact under the established schedule

Rotation means create replacement, update dependent services, verify, revoke old secret, and record completion.

### 4.5 Exposure response
1. Treat a secret as compromised even if the message/file was quickly deleted.
2. Revoke/rotate immediately according to impact.
3. Remove it from active files/history where practical, while recognizing deletion does not undo exposure.
4. Search logs/repos/chats for reuse or additional exposure.
5. Follow SEC-003 if unauthorized use may have occurred.

### 4.6 Contractors and tools
Do not give full production login detail bundles to contractors. Create scoped temporary accounts/tokens and revoke them after the task. Review third-party tools before uploading configs or logs.

## 5. When to get senior help

Get senior help at once for exposure of domain, Cloudflare, host root, production database, billing/store, Discord bot/owner, code repository admin, signing, or backup decryption login details.

## 6. What to record

- Secret inventory (name/purpose/owner, not value)
- Access list
- Creation/rotation/revocation dates
- Exposure incident and affected services
- Verification that old secret is unusable

## 7. Final checklist

- [ ] Secret stored outside code/chat
- [ ] Scope and owner documented
- [ ] Production/staging login details separated
- [ ] Logs/screenshots redacted
- [ ] Temporary access expires
- [ ] Exposure triggers immediate rotation
- [ ] All dependent services verified
- [ ] Old login detail revoked

## 8. Related guides

- `SEC-001`
- `SEC-003`
- `OPS-007`
- `DEV-004`
