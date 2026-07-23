---
title: "Planned Server Maintenance"
sop_code: "OPS-002"
version: "1.1"
owner: "Server Administrator"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-002 — Planned Server Maintenance

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Plan and carry out maintenance with clear checks, backups, and player updates.

## 2. Scope

Server version updates, plugin maintenance, host work, database work, website maintenance, map maintenance, resource-pack releases, network changes, and scheduled downtime.

## 3. Who does what

- **Maintenance Lead:** Owns the plan, execution, and go/no-go decision.
- **Technical owners:** Execute assigned changes and verification.
- **Communications owner:** Publishes notices and status updates.
- **Founder/Administrator:** Approves high-risk production maintenance.

## 4. Procedure

### 4.1 Create the maintenance plan
Document:
- Goal and services affected
- Start window and expected player impact
- Change list and owners
- Dependencies and compatibility notes
- Backup/snapshot requirement
- Verification tests
- Rollback trigger and exact rollback method
- Communication schedule

### 4.2 Pre-maintenance readiness
1. Confirm approved change requests and required files.
2. Test changes in staging when applicable.
3. Verify recent backups and available disk space.
4. Freeze unrelated production changes for the maintenance window.
5. Notify players through Discord/website/in-game channels appropriate to impact.
6. Assign one Maintenance Lead and a separate communication owner for major work.

### 4.3 Execution
- Record actual start time.
- Take services offline gracefully.
- Perform steps in the documented order.
- Log deviations and do not stack unplanned “while we are here” changes.
- After each major stage, verify before continuing.
- Stop and roll back if a predefined trigger occurs.

### 4.4 Final Checks
Use both technical and gameplay checks. Include login, worlds, claims, chat, economy, NPCs, resource pack, website/store, map, Discord integrations, permissions, and performance as relevant.

### 4.5 Reopen
1. Confirm the Maintenance Lead's go decision.
2. Reopen services gradually when practical.
3. Publish completion or extended-maintenance notice.
4. Monitor logs, performance, tickets, and player reports closely.
5. Keep rollback materials until the observation period ends.

### 4.6 Review
Record what changed, actual impact, errors, rollback use, and follow-up tasks. Update SOPs when the maintenance exposed missing steps.

## 5. When to get senior help

If final checks fails, the change exceeds the window, a backup is unusable, or unexpected data conversion occurs, pause and escalate. Do not reopen solely because the announced time has arrived.

## 6. What to record

- Maintenance plan and approvals
- Backup identifiers
- Start/end timestamps
- Execution log and deviations
- Final Checks results
- Announcements
- Follow-up tasks

## 7. Final checklist

- [ ] Scope and owners documented
- [ ] Staging test completed where applicable
- [ ] Backup verified
- [ ] Rollback method ready
- [ ] Players notified
- [ ] Changes executed in order
- [ ] Full final checks passed
- [ ] Completion notice sent
- [ ] Observation and review completed

## 8. Related guides

- `OPS-001`
- `OPS-003`
- `OPS-006`
- `DEV-002`
- `DEV-003`
- `COM-001`
