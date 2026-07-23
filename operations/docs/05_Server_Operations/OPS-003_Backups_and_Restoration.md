---
title: "Backups and Restoring Data"
sop_code: "OPS-003"
version: "1.1"
owner: "Server Administrator"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-003 — Backups and Restoring Data

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Never assume a backup is usable until it has been tested.

## 1. Purpose

Create safe backups and restore data only after the correct checks and approvals.

## 2. Scope

Worlds, plugin data, databases, configurations, custom plugins, resource-pack sources/builds, website files/database, Discord bot data, and critical operational documentation.

## 3. Who does what

- **Server Administrator:** Owns backup schedules, monitoring, test restores, and production restoration.
- **Developer/Web owner:** Identifies application consistency needs.
- **Founder:** Approves destructive or broad production restoration.
- **Incident Lead:** Coordinates restoration during an active incident.

## 4. Procedure

### 4.1 Backup coverage
At minimum protect:
- All production worlds and dimensions
- Plugin folders/data, including EldenKingdoms and economy/permissions data
- SQL or other databases with consistent dumps/snapshots
- Server configuration, startup parameters, and dependency versions
- Custom plugin source and release artifacts in version control
- Resource-pack source and published hashes/builds
- Website files, database, and critical LeaderOS configuration
- DNS/Cloudflare and service configuration exports where supported

### 4.2 Schedule and storage
Recommended baseline:
- Frequent automated world/plugin backups appropriate to activity
- Daily database/configuration backup
- Pre-change backup before deployments, migrations, or large edits
- Multiple storage points: recent, weekly, and monthly
- At least one copy outside the primary host/account

Adjust frequency based on measured acceptable data loss, not convenience.

### 4.3 Backup verification
1. Monitor success/failure notifications.
2. Check file size and completion; a file existing is not proof of a valid backup.
3. Periodically restore into an isolated environment.
4. Verify worlds load, databases open, plugin data is readable, and critical records match.
5. Record the test date and outcome.

### 4.4 Restoration decision
Before restoring:
- Define exactly what is damaged and the target recovery point.
- Preserve the current broken state for investigation.
- Estimate legitimate changes that will be lost.
- Prefer targeted file/chunk/database restoration over a whole-server rollback.
- Obtain required approval and prepare player communication.

### 4.5 Restoration procedure
1. Stop or isolate affected writes.
2. Take a final backup/snapshot of the current state.
3. Restore to staging first when time and severity permit.
4. Validate the selected backup.
5. Restore the minimum scope.
6. Start services and run integrity/gameplay checks.
7. Monitor for reappearance of the original fault.

### 4.6 Backup security
Encrypt or tightly restrict backups. Backups may contain private data, secrets, player inventories, and unreleased content. Do not distribute raw backups to contractors or players.

## 5. When to get senior help

Escalate missing/offsite backup failure, suspected ransomware or compromise, database corruption, uncertain recovery point, broad rollback affecting many players, or any restoration that could duplicate economy/items.

## 6. What to record

- Backup inventory and schedule
- Success/failure logs
- Test restore results
- Restoration approval and target point
- Pre-restore snapshot
- Final Checks and player-impact report

## 7. Final checklist

- [ ] All critical systems covered
- [ ] Off-host copy exists
- [ ] Backup success monitored
- [ ] Test restore completed on schedule
- [ ] Current damaged state preserved
- [ ] Minimum restore scope selected
- [ ] Approval and communication prepared
- [ ] Post-restore integrity verified

## 8. Related guides

- `OPS-002`
- `OPS-004`
- `OPS-008`
- `MOD-006`
- `PRV-001`
