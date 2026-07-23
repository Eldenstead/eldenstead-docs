---
title: "Removing Staff Access"
sop_code: "STF-005"
version: "1.1"
owner: "Staff Manager"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# STF-005 — Removing Staff Access

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Removing a Discord role alone is not complete offboarding.

## 1. Purpose

Remove access safely when a staff member leaves, changes role, or is removed.

## 2. Scope

Voluntary departures, inactivity removals, end of contracts, failed probation, role changes, emergency suspensions, and disciplinary removals.

## 3. Who does what

- **Staff Manager:** Coordinates the checklist and communication.
- **Access owners:** Remove service permissions and rotate shared secrets.
- **Team lead:** Transfers unfinished work and Eldenstead-owned files.
- **Founders:** Approve emergency or senior-role removals and any public statement.

## 4. Procedure

### 4.1 Classify the offboarding
- **Routine:** Resignation, planned inactivity, end of temporary role.
- **Role change:** Some access remains but must be reduced.
- **Immediate suspension:** Access is paused while facts are reviewed.
- **Adverse removal:** Access is removed due to conduct, security, or performance concerns.

### 4.2 Preserve records first when safe
Before notifying a person in a high-risk removal, preserve relevant logs, code repository history, audit records, tickets, and evidence. Do not access unrelated personal accounts or devices.

### 4.3 Remove access
Review every service, including:
- Minecraft staff permissions and allowlists
- Discord roles, private channels, bots, and webhooks
- Host/panel/console/SFTP/SSH
- Website/LeaderOS administration
- Source repositories and CI/CD
- Domain, Cloudflare, email, analytics, social media, and media storage
- Database tools, backups, password managers, API keys, and third-party dashboards

Disable individual accounts. Rotate any login detail the departing person could still know, especially shared passwords, tokens, SSH keys, recovery codes, and webhook URLs.

### 4.4 Transfer work
1. Identify open tasks, builds, branches, files, tickets, events, and promised deliverables.
2. Assign a new owner.
3. Preserve Eldenstead-owned work according to any written agreement.
4. Remove personal test data and unauthorized copies of secrets.

### 4.5 Communication
Use a short factual message. Thank routine departures where appropriate. Do not publicly disclose private disciplinary details. A public announcement is optional and should only state what the community needs to know.

### 4.6 Post-offboarding review
Within seven days:
- Confirm no unexpected login or token use
- Verify permissions through actual account testing or audit logs
- Close or transfer open work
- Update staff lists and contact trees
- Record eligibility for future reapplication if applicable

## 5. When to get senior help

For suspected malicious access, use SEC-003 immediately. Do not warn the person before critical access is contained when doing so could increase risk. Matters involving pay, contracts, ownership, or legal claims require Founder review.

## 6. What to record

- Offboarding reason and effective time
- Access removal checklist
- Login Detail rotation record
- Work transfer record
- Final communication
- Post-removal audit

## 7. Final checklist

- [ ] Offboarding type classified
- [ ] Evidence preserved when needed
- [ ] All accounts and roles reviewed
- [ ] Shared login details rotated
- [ ] Open work transferred
- [ ] Staff lists updated
- [ ] Post-offboarding audit completed

## 8. Related guides

- `GOV-003`
- `OPS-007`
- `SEC-001`
- `SEC-002`
- `SEC-003`
