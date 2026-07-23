---
title: "First Review of Bug Reports"
sop_code: "SUP-002"
version: "1.1"
owner: "Development Lead"
approvers: "Administrators"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# SUP-002 — First Review of Bug Reports

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Review bug reports, decide how serious they are, and send them to the right team.

## 2. Scope

Gameplay bugs, plugin errors, website defects, Discord bot issues, resource-pack problems, NPC failures, map issues, and configuration mistakes.

## 3. Who does what

- **Support:** Collects the minimum reproducible report and checks known issues.
- **Developer:** Confirms reproducibility, root area, and technical priority.
- **Administrator:** Handles active production impact and containment.
- **Content/Build owners:** Review issues limited to their assets or areas.

## 4. Procedure

### 4.1 Collect the report
Capture:
- What the player expected
- What actually happened
- Exact steps leading to the issue
- Date/time, world/location, command, item, NPC, menu, or webpage
- Minecraft version and relevant client information
- Screenshots/video/log output when available
- Whether it happens every time
- Whether items, currency, permissions, claims, or purchases are affected

### 4.2 Safety and duplicate check
1. Search known issues and recent incidents.
2. If the report describes a dupe, exploit, crash, permission bypass, or security issue, move it to a restricted channel and follow MOD-006 or SEC-003.
3. If it duplicates an existing issue, link it and add any new environment details.

### 4.3 Reproduce safely
Support may repeat harmless steps on normal gameplay. Risky steps must be tested by authorized staff in staging or a controlled copy. Do not reproduce actions that could create value, damage builds, reveal hidden content, or crash production.

### 4.4 Classify
- **Severity:** SEV-1 through SEV-4.
- **Area:** EldenKingdoms, economy, chat, claims, war, Citizens/NPCs, resource pack/custom items, permissions, website, Discord, host, build/world, or other.
- **Reproducibility:** Always, intermittent, environment-specific, unable to reproduce.
- **Workaround:** None, partial, or safe workaround available.

### 4.5 Create development task
Include a concise title, environment, steps, expected/actual result, evidence, severity, suspected area, workaround, and player-impact notes. Remove private player data not needed for development.

### 4.6 Player response
Thank the player, confirm whether the issue is known, provide a safe workaround when available, and avoid promising a release date. If fixed, ask the reporter to verify only when doing so is safe and useful.

## 5. When to get senior help

Get senior help for any bug that causes data loss, duplicated value, unauthorized permissions, repeated crashes, failure to deliver a paid purchase, exposure of secrets, or broad inability to join/play.

## 6. What to record

- Original report
- Duplicate/known-issue link
- Reproduction result and environment
- Severity and owner
- Development task
- Workaround and player update

## 7. Final checklist

- [ ] Expected and actual behavior recorded
- [ ] Reproduction steps captured
- [ ] Sensitive exploit/security report restricted
- [ ] Duplicate search completed
- [ ] Severity and component assigned
- [ ] Safe reproduction attempted
- [ ] Development task created
- [ ] Player updated without a false promise

## 8. Related guides

- `SUP-001`
- `MOD-006`
- `DEV-002`
- `DEV-003`
- `OPS-004`
