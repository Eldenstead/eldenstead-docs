---
title: "Releases and Emergency Fixes"
sop_code: "DEV-003"
version: "1.1"
owner: "Development Lead"
approvers: "Server Administrator"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# DEV-003 — Releases and Emergency Fixes

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Release planned updates and emergency fixes with backups, checks, and a rollback plan.

## 2. Scope

Custom plugin releases, bundled configuration changes, database migrations, web/bot releases, and emergency hotfixes.

## 3. Who does what

- **Release owner:** Coordinates version, notes, approvals, and deployment.
- **Developer:** Produces the artifact and migration instructions.
- **Reviewer/tester:** Confirms approved commit and test results.
- **Administrator:** Deploys or supervises production deployment.
- **Founder:** Approves major releases and risk exceptions.

## 4. Procedure

### 4.1 Version and release candidate
Assign a version. Build from the reviewed commit in a clean environment. Record artifact hash, dependencies, configuration changes, migration steps, and compatible server version.

### 4.2 Release notes
Include:
- Player-visible additions/fixes
- Staff/admin changes
- New permissions/commands/configuration
- Data migration or restart requirement
- Known limitations
- Rollback notes

Keep exploit and security details appropriately restricted until risk is resolved.

### 4.3 Go/no-go review
Release only when:
- Required reviews are complete
- DEV-002 tests pass
- Backup and rollback are ready
- Deployment window/notice is approved
- Exact artifact matches the tested candidate
- A release owner and validator are available

### 4.4 Deployment
Follow OPS-006. Record start time, deployed version/hash, configuration diff, migration output, startup logs, and smoke-test results.

### 4.5 Observation
For significant releases, monitor logs, TPS/MSPT, database errors, support tickets, economy/claim anomalies, duplicate events/messages, and memory/task behavior. Keep the old artifact and backup available during observation.

### 4.6 Hotfix path
A hotfix is limited to urgent security, data loss, outage, destructive exploit, or severe player-blocking defect.
1. Create an incident/work item.
2. Make the smallest safe change.
3. Require at least one reviewer when available.
4. Run focused tests plus critical smoke tests.
5. Deploy with rollback ready.
6. Complete full documentation and review afterward.

Do not label convenience changes as hotfixes to bypass review.

### 4.7 Rollback
Rollback when critical functionality fails, data is at risk, security is weakened, or performance becomes unstable. Confirm whether data written by the new version is backward-compatible before replacing the jar/config.

## 5. When to get senior help

Escalate irreversible migrations, releases touching billing/privacy/security, repeated failed deployments, missing source provenance, or a hotfix that cannot receive even minimal independent review.

## 6. What to record

- Version and artifact hash
- Release notes
- Approved commit/review/test links
- Backup/rollback point
- Deployment and migration logs
- Smoke/observation results
- Rollback or hotfix retrospective

## 7. Final checklist

- [ ] Version and tested artifact identified
- [ ] Release notes complete
- [ ] Tests and approvals complete
- [ ] Backup and rollback ready
- [ ] Deployment follows OPS-006
- [ ] Smoke tests pass
- [ ] Observation period completed
- [ ] Hotfix exceptions documented afterward

## 8. Related guides

- `DEV-001`
- `DEV-002`
- `DEV-004`
- `OPS-002`
- `OPS-003`
- `OPS-006`
