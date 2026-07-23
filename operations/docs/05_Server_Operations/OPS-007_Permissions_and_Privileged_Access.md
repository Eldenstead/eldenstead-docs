---
title: "Permissions and High-Level Access"
sop_code: "OPS-007"
version: "1.1"
owner: "Staff Manager"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-007 — Permissions and High-Level Access

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Minecraft OP, host console, database, billing, and domain access are exceptional privileges, not default staff benefits.

## 1. Purpose

Give staff only the access they need and remove access when it is no longer needed.

## 2. Scope

Minecraft permissions, operator status, Discord roles, host/panel/console/SFTP/SSH, website administration, code repository access, Cloudflare/domain, databases, backups, bots, social media, and billing systems.

## 3. Who does what

- **Staff Manager:** Approves role-based access.
- **System owner:** Implements and tests access.
- **Founder:** Approves owner-level, billing, domain, security, production database, and broad production access.
- **Auditor/reviewer:** Performs periodic access reviews.

## 4. Procedure

### 4.1 Access request
Every non-routine grant should state user, role, service, exact permission, reason, approver, start date, and expiration for temporary access.

### 4.2 Only the access needed
Grant the smallest role that completes the task. Prefer named roles/groups over custom one-off permissions. Do not use Minecraft OP as a substitute for properly configured permissions when a narrower role is possible.

### 4.3 Separation of duties
Where practical:
- The person approving a high-risk change should not be the only person deploying and validating it.
- Billing access should be separate from normal support.
- Backup deletion should be more restricted than backup creation.
- Permanent staff punishments and staff access changes require senior review.

### 4.4 Implementation
1. Verify the correct account/UUID/email.
2. Apply the role through the authoritative system.
3. Test allowed and denied actions using a safe method.
4. Record the final access state.
5. Notify the person of responsibilities without sending secrets insecurely.

### 4.5 Temporary access
Use an expiration date. Remove it when the task ends, even if the expiration has not arrived. Do not convert temporary access to permanent through silence.

### 4.6 Reviews
Review high-level access at least quarterly and after:
- Staff departure or role change
- Security incident
- Major launch or project completion
- Provider migration
- Discovery of shared login details

Look for inactive accounts, duplicated admins, unexpected OP, stale SSH keys, old webhooks, orphaned service accounts, and overly broad Discord channel access.

### 4.7 Emergency access
Emergency elevation must be time-limited, documented, and reviewed afterward. Never ask someone to share their password as an emergency shortcut.

## 5. When to get senior help

Get senior help at once for unexplained admin accounts, unknown SSH keys/tokens, reappearing permissions, unauthorized OP, owner-role requests, or access linked to suspected misconduct/compromise.

## 6. What to record

- Access request and approval
- Account identifier
- Granted role/permissions
- Test result
- Expiration/removal date
- Quarterly review record

## 7. Final checklist

- [ ] Correct identity verified
- [ ] Need and exact scope recorded
- [ ] Least-privilege role used
- [ ] Required approval obtained
- [ ] Allowed/denied behavior tested
- [ ] Temporary expiration set
- [ ] Access inventory updated
- [ ] Review/removal scheduled

## 8. Related guides

- `GOV-001`
- `STF-002`
- `STF-005`
- `SEC-001`
- `SEC-002`
