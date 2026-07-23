---
title: "Recovering from Major Server Failure"
sop_code: "OPS-008"
version: "1.1"
owner: "Founders"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-008 — Recovering from Major Server Failure

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Do not restore a compromised environment by simply copying it onto a new host.

## 1. Purpose

Restore important Eldenstead systems after a major failure or data loss.

## 2. Scope

Loss of primary host, multiple corrupted systems, ransomware/compromise, inaccessible domain/provider account, unrecoverable production environment, or other events requiring rebuild or migration.

## 3. Who does what

- **Disaster Lead:** Usually a Founder; owns priorities and external decisions.
- **Recovery Technical Lead:** Rebuilds infrastructure and restores data.
- **Security Lead:** Secures accounts, keys, and trust boundaries.
- **Communications owner:** Maintains player/staff updates.
- **Service owners:** Validate their restored components.

## 4. Procedure

### 4.1 Declare disaster mode
Use when normal OPS-004 recovery is insufficient. Record what is lost/inaccessible, suspected cause, safety/security status, last known good backup, and leadership assignments.

### 4.2 Secure control plane
1. Secure founder email, password manager, domain registrar, Cloudflare, hosting, source repositories, payment/store provider, and Discord ownership.
2. Revoke compromised sessions, keys, tokens, webhooks, and service accounts.
3. Establish a clean communication channel and device/account baseline.
4. Preserve compromised systems for evidence when possible; do not reconnect them blindly.

### 4.3 Recovery priorities
1. Identity, login details, and DNS/control access
2. Backups and source repositories
3. Core Minecraft server and databases
4. Permissions/economy/EldenKingdoms data
5. Discord communication and support
6. Website, store, and purchase records
7. Squaremap, media, analytics, and non-critical services

### 4.4 Rebuild cleanly
- Use a fresh trusted operating environment.
- Patch the underlying cause before restoring public access.
- Recreate accounts and keys rather than copying compromised secrets.
- Restore verified data from the selected recovery point.
- Install only inventoried, approved plugins and configurations.
- Validate offline/private before changing public DNS or opening the server.

### 4.5 Data reconciliation
Record the gap between the recovery point and the incident. Identify missing purchases, punishments, builds, inventories, claims, economy transactions, and forum content. Use logs/provider records and a consistent compensation/reconciliation plan.

### 4.6 Return to service
Open in stages. Start with staff-only final checks, then limited access if helpful, then public access. Monitor authentication, data integrity, performance, and unexpected callbacks to old systems.

### 4.7 After recovery
Complete a formal review, rotate remaining login details, update inventories/runbooks, verify offsite backups, notify affected users when privacy/security requires it, and schedule resilience improvements.

## 5. When to get senior help

A suspected legal/privacy breach, payment compromise, domain theft, or criminal intrusion requires appropriate provider/legal/reporting review by the Founders. Do not make public attribution without verified evidence.

## 6. What to record

- Disaster declaration
- Leadership assignments
- Account/login detail actions
- Backup/recovery point selection
- Rebuild inventory
- Final Checks and staged reopen results
- Reconciliation/compensation plan
- Post-disaster review

## 7. Final checklist

- [ ] Disaster mode formally declared
- [ ] Clean communication/control accounts secured
- [ ] Compromised login details revoked
- [ ] Recovery priorities agreed
- [ ] Fresh environment used
- [ ] Root cause addressed before reopen
- [ ] Critical data validated
- [ ] Data gap reconciled
- [ ] Services reopened in stages
- [ ] Resilience actions assigned

## 8. Related guides

- `OPS-003`
- `OPS-004`
- `SEC-003`
- `COM-001`
- `SUP-003`
- `SUP-005`
