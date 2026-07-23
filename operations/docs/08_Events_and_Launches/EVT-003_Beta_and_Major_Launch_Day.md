---
title: "Beta and Major Launch Day"
sop_code: "EVT-003"
version: "1.1"
owner: "Launch Lead"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# EVT-003 — Beta and Major Launch Day

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Prepare staff and systems for a beta or major launch day.

## 2. Scope

Closed/open beta, seasonal opening, major feature release, version migration, network relaunch, or any event expected to produce unusually high traffic and scrutiny.

## 3. Who does what

- **Launch Lead:** Owns readiness, go/no-go, command center, and launch timeline.
- **Technical Lead:** Owns server, database, website/store, map, bots, and monitoring.
- **Support/Moderation Leads:** Staff shown to players channels and escalation.
- **Content owner:** Publishes approved announcements and known issues.
- **Founders:** Make final go/no-go and policy/compensation decisions.

## 4. Procedure

### 4.1 Readiness gates
At least 48 hours before planned launch, review:
- Critical bugs and accepted known issues
- Capacity/performance test
- Backups and disaster recovery
- Production versions/configuration lock
- Permissions and staff access
- Website, store, Discord, map, and resource-pack readiness
- Rules, terms, privacy, support categories, and announcements
- Moderation coverage and escalation contacts
- Spawn safety, onboarding route, NPCs, commands, claims/economy, and custom items

### 4.2 Change freeze
Freeze non-essential changes before launch. Any exception requires Launch Lead approval and a clear rollback. Do not add last-minute features because they appear small.

### 4.3 Launch runbook
Prepare timestamps, responsible owners, exact deployment/opening steps, smoke tests, monitoring, announcement sequence, known-issue response, emergency closure, and rollback criteria.

### 4.4 Go/no-go
A **no-go** is appropriate for data corruption risk, broken login/resource pack, unusable spawn/onboarding, critical permissions exposure, missing backups, unstable performance, unavailable incident leadership, or failed core kingdom/economy flows.

### 4.5 Opening
1. Bring services online privately for staff checks.
2. Verify server list/address, login, pack, spawn, chat, claims, economy, website/store, map, and Discord links.
3. Open access in the planned order.
4. Publish the approved announcement only after the service is actually available.
5. Maintain a launch command channel and one source of truth for status.

### 4.6 Launch monitoring
Track players online, joins/failures, TPS/MSPT, memory, errors, database latency, tickets, reports, store delivery, and exploit indicators. Review issues by severity; do not let cosmetic complaints hide critical failures.

### 4.7 Post-launch
After stabilization, publish known issues/fixes as appropriate, remove temporary access, review support backlog, record incidents, and schedule a retrospective.

## 5. When to get senior help

Get senior help at once for security/privacy/payment incidents, destructive exploits, widespread inability to join, severe performance collapse, broken data migrations, or a need to wipe/rollback player progress.

## 6. What to record

- Readiness checklist
- Change freeze exceptions
- Launch runbook and staff roster
- Go/no-go decision
- Monitoring/incident records
- Announcements and known issues
- Retrospective/action items

## 7. Final checklist

- [ ] Readiness gates reviewed
- [ ] Critical systems tested
- [ ] Backups/recovery verified
- [ ] Change freeze active
- [ ] Staff coverage assigned
- [ ] Go/no-go documented
- [ ] Private smoke test passed
- [ ] Monitoring and incident channel active
- [ ] Post-launch review scheduled

## 8. Related guides

- `OPS-002`
- `OPS-003`
- `OPS-004`
- `DEV-003`
- `COM-001`
- `SUP-001`
