---
title: "Development Steps"
sop_code: "DEV-001"
version: "1.1"
owner: "Development Lead"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# DEV-001 — Development Steps

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Production is a deployment target, not a development environment.

## 1. Purpose

Give developers a clear path from an idea or bug report to a tested release.

## 2. Scope

Custom Java plugins, scripts, Discord/website integrations, build tooling, CI/CD, database migrations, and code changes to EldenKingdoms or other Eldenstead-owned systems.

## 3. Who does what

- **Issue owner:** Defines the player/business need and acceptance criteria.
- **Developer:** Implements on an isolated branch and documents testing.
- **Reviewer:** Checks correctness, security, maintainability, and scope.
- **Release owner:** Packages and deploys through DEV-003/OPS-006.
- **Founder/Product owner:** Approves major design, economy, war, store, or privacy changes.

## 4. Procedure

### 4.1 Create a work item
Every meaningful change should have a tracked issue containing:
- Problem or desired behavior
- Affected plugin/component
- Requirements for what players will see
- Permissions, commands, messages, configuration, and data changes
- Compatibility target, such as Paper 1.21.4 and Java version
- Risks, dependencies, and rollback considerations

### 4.2 Branch and environment
1. Start from the current approved main branch.
2. Create a descriptive branch linked to the work item.
3. Do not develop directly on production files or use the production server as an IDE/testing environment.
4. Keep secrets out of source; use environment/config placeholders.

### 4.3 Implementation standards
- Favor clear, maintainable code over clever shortcuts.
- Validate player input and permissions server-side.
- Avoid blocking database/network/file work on the Minecraft main thread.
- Prevent duplicate messages, commands, rewards, and event registration.
- Make high-impact values configurable when appropriate.
- Log enough context to diagnose failures without exposing secrets or unnecessary personal data.
- Preserve backward compatibility or provide an explicit migration.

### 4.4 Local checks
Compile from a clean state. Run automated tests where available. Check startup/shutdown, command syntax, permissions, null/error cases, reload/restart persistence, and configuration generation.

### 4.5 Review
A reviewer should verify:
- Scope matches the work item
- Permissions cannot be bypassed
- Economy/items/claims are transaction-safe and not duplicated
- Scheduled tasks/listeners are registered once and canceled correctly
- Errors fail safely
- Data migrations and rollback are understood
- Messages are clear and not double-sent

### 4.6 Merge
Resolve review comments, update documentation/config examples, and merge only after acceptance criteria pass in staging. Tag or identify the exact commit used for release.

### 4.7 Technical debt
If a temporary solution is accepted, create a follow-up task with an owner and reason. Do not hide known risks in private chat.

## 5. When to get senior help

Escalate changes involving payment/store delivery, player personal data, security/authentication, destructive database migration, large economy redesign, war rules, or a major departure from announced server direction.

## 6. What to record

- Work item and acceptance criteria
- Branch/commit/pull request
- Review comments and approval
- Test results
- Migration/configuration documentation
- Release version link

## 7. Final checklist

- [ ] Work item defines expected behavior
- [ ] Isolated branch/environment used
- [ ] Permissions and input validated
- [ ] Duplicate actions/messages considered
- [ ] Clean build succeeds
- [ ] Review completed
- [ ] Staging acceptance criteria pass
- [ ] Documentation updated
- [ ] Exact release commit identified

## 8. Related guides

- `DEV-002`
- `DEV-003`
- `DEV-004`
- `OPS-006`
- `SEC-002`
