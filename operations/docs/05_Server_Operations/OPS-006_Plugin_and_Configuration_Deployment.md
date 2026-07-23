---
title: "Installing Plugins and Settings Changes"
sop_code: "OPS-006"
version: "1.1"
owner: "Development Lead"
approvers: "Server Administrator"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-006 — Installing Plugins and Settings Changes

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Avoid `/reload` and general plugin hot-reloads on production unless a specific, tested plugin procedure explicitly supports them.

## 1. Purpose

Install plugins and settings changes safely, with testing and a clear way to undo them.

## 2. Scope

New plugins, updates, removals, configuration changes, message changes, command aliases, database migrations, Citizens scripts, Squaremap integrations, and server startup settings.

## 3. Who does what

- **Change owner:** Prepares and documents the change.
- **Reviewer:** Checks technical safety and compatibility.
- **Deployer:** Executes the approved production steps.
- **Administrator:** Approves downtime, backups, and rollback.
- **Founder:** Approves major feature, cost, privacy, or policy impact.

## 4. Procedure

### 4.1 Prepare the change
Document current and target versions, source/download origin, checksums where available, dependencies, configuration diff, data migration, restart requirement, test plan, and rollback plan.

Only use trusted official sources or internally built artifacts. Verify licensing and redistribution terms for bundled assets/plugins.

### 4.2 Review compatibility
Check Paper/Minecraft version, Java version, dependency versions, database schema, API changes, command/permission conflicts, resource-pack interactions, and compatibility with EldenKingdoms and other critical systems.

### 4.3 Staging
1. Back up staging.
2. Apply the exact artifact/configuration intended for production.
3. Review startup logs.
4. Test normal behavior, permissions, data conversion, restart persistence, and failure cases.
5. Capture the final approved artifact and configuration diff; do not rebuild differently on production.

### 4.4 Production readiness
- Approved change request
- Recent verified backup
- Maintenance/player notice if needed
- Rollback files and prior jar/config ready
- Staff available for final checks
- No conflicting incident or deployment active

### 4.5 Deploy
1. Stop/restart gracefully when required; do not hot-reload plugins unless the plugin explicitly supports it and Eldenstead has validated that method.
2. Copy the approved artifact.
3. Preserve previous versions outside the active plugin directory.
4. Apply reviewed configuration exactly.
5. Start and inspect the entire relevant log section.
6. Run release checks.

### 4.6 Rollback triggers
Rollback for startup failure, missing critical plugin, schema error, data loss, severe performance regression, permission exposure, broken claims/economy, or inability to complete critical gameplay flows.

### 4.7 Closeout
Record deployed versions, actual time, final checks, errors, rollback status, and follow-up work. Update configuration documentation and dependency inventory.

## 5. When to get senior help

Escalate untrusted artifacts, unknown licensing, irreversible migration, production-only behavior, secrets in config, major permission changes, or a plugin that conflicts with non-pay-to-win/privacy commitments.

## 6. What to record

- Change request and approvals
- Artifact hash/source/version
- Configuration diff
- Staging results
- Backup and rollback point
- Deployment log
- Final Checks and follow-up

## 7. Final checklist

- [ ] Trusted artifact/source verified
- [ ] Compatibility reviewed
- [ ] Exact change tested in staging
- [ ] Backup and rollback ready
- [ ] Required notice sent
- [ ] Graceful deployment used
- [ ] Startup logs reviewed
- [ ] Critical features validated
- [ ] Versions and diff recorded

## 8. Related guides

- `GOV-002`
- `OPS-001`
- `OPS-002`
- `OPS-003`
- `DEV-002`
- `DEV-003`
- `DEV-004`
