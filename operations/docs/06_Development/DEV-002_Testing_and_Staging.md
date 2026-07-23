---
title: "Testing Before Release"
sop_code: "DEV-002"
version: "1.1"
owner: "Development Lead"
approvers: "Server Administrator"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# DEV-002 — Testing Before Release

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Test changes in a safe place before they are released to players.

## 2. Scope

Custom code, plugin/config changes, resource packs, database migrations, commands, permissions, economy behavior, NPCs, events, website integrations, and bug reproductions.

## 3. Who does what

- **Developer/change owner:** Writes the test plan and prepares the build.
- **Tester:** Executes tests and records actual results.
- **Administrator:** Maintains staging safety and representative data/configuration.
- **Product/role owner:** Confirms shown to players behavior and acceptance criteria.

## 4. Procedure

### 4.1 Staging baseline
Staging should resemble production in version, Java, critical plugins, configurations, database schema, resource-pack flow, and representative data without exposing unnecessary live personal information. Use sanitized copies where possible.

### 4.2 Test plan
Include:
- Feature or fix objective
- Setup and test accounts/roles
- Normal success paths
- Permission-denied paths
- Invalid/missing input
- Restart persistence
- Concurrent/multiple-player behavior
- Failure/rollback behavior
- Performance or large-data conditions when relevant
- Regression checks for related systems

### 4.3 Core regression set
For changes touching central systems, test:
- Server startup/shutdown
- Login and resource pack
- `/k` and `/e` core flows, balances, claims, and chat
- Global/local/kingdom/empire chat formatting and permissions
- Economy deposit/withdraw and “all” handling
- NPC interaction, shops, and Citizens persistence
- Gates/war features where affected
- Permissions for player, helper, moderator, admin, and owner test accounts
- Squaremap markers where data changes

### 4.4 Bug reproduction
Confirm the issue on the old build where practical, then verify it no longer occurs on the candidate build. Record exact versions and steps. A fix that cannot be reproduced should receive extra regression review.

### 4.5 Data migration testing
Use a disposable copy. Test upgrade from the current production schema/data, restart, repeated startup, partial failure, and rollback feasibility. Verify counts/totals before and after.

### 4.6 Acceptance
Record pass, fail, blocked, or accepted limitation for each test. Failed critical tests block release. Known non-critical limitations must be documented and approved, not ignored.

### 4.7 Test cleanup
Remove generated currency/items, staff permissions, test NPCs, claims, webhooks, and accounts. Do not let staging login details or callbacks point unintentionally to production.

## 5. When to get senior help

Get senior help for any test that corrupts data, exposes production secrets, sends real store/Discord actions, reveals a permission bypass, or cannot be safely rolled back.

## 6. What to record

- Test plan
- Candidate build/commit/config hash
- Environment versions
- Test results and evidence
- Known limitations
- Acceptance/sign-off
- Cleanup record

## 7. Final checklist

- [ ] Staging matches relevant production versions
- [ ] Test plan covers success and failure
- [ ] Permission-denied cases tested
- [ ] Restart persistence tested
- [ ] Related regressions checked
- [ ] Migration tested on a copy
- [ ] Critical failures resolved
- [ ] Test data and callbacks cleaned up
- [ ] Sign-off recorded

## 8. Related guides

- `DEV-001`
- `DEV-003`
- `DEV-005`
- `OPS-006`
