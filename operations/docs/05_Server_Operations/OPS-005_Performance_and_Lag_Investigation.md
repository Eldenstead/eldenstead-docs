---
title: "Finding the Cause of Lag"
sop_code: "OPS-005"
version: "1.1"
owner: "Server Administrator"
approvers: "Development Lead"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-005 — Finding the Cause of Lag

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Find the cause of lag without guessing or making risky changes on the live server.

## 2. Scope

Low TPS, high MSPT, tick freezes, memory pressure, excessive CPU, slow chunk loading, entity buildup, network symptoms, website/map load, and plugin performance regressions.

## 3. Who does what

- **Support/Moderator:** Records player reports, time, location, and visible patterns.
- **Administrator:** Captures server metrics and coordinates containment.
- **Developer:** Profiles code/plugin behavior and implements fixes.
- **Builder/Event owner:** Corrects content-driven entity, redstone, or event load.

## 4. Procedure

### 4.1 Confirm the symptom
Record time, player count, TPS, MSPT, CPU, memory/GC, disk, network, affected worlds/regions, and whether all players or only one route/location is affected. Separate server tick lag from client FPS, latency, or resource-pack loading.

### 4.2 Check common correlations
- Recent deployments or configuration changes
- Chunk generation or map rendering
- Large WorldEdit operations
- Entity/mob/item accumulation
- Redstone/farms/hoppers
- Citizens/ModelEngine or scripted NPC behavior
- Database timeouts
- Backups/compression
- War/event systems and boss bars
- Plugin exceptions repeating in console

### 4.3 Capture diagnostics
Use approved Paper/spark/timings/profiling tools. Capture a representative window long enough to include the spike. Redact IPs, tokens, and private data before sharing outside the technical team.

### 4.4 Contain safely
Possible temporary actions:
- Pause an event or feature
- Stop map rendering/backups if proven to be competing for resources
- Remove runaway entities/items in a targeted area
- Disable a failing task/plugin feature
- Reduce new chunk generation

Avoid blanket entity wipes, random plugin removals, or JVM flag changes without evidence and rollback.

### 4.5 Analyze
Identify the main thread/task, plugin, world, entity type, database call, or system resource causing delay. Compare against baseline and recent changes. Reproduce in staging when code/config changes are required.

### 4.6 Fix and verify
Apply the smallest correction, then repeat the same measurement under similar load. Confirm that gameplay behavior remains correct. Document any capacity limitation and create longer-term work if the quick fix is temporary.

### 4.7 Player guidance
When the issue is client-side, provide tested steps and distinguish them clearly from server lag. Do not blame a player's hardware without evidence.

## 5. When to get senior help

Escalate unexplained tick freezes, repeated watchdog crashes, memory exhaustion, disk saturation, host-level steal/load, database failure, or any optimization that requires removing a major feature or changing capacity/hosting.

## 6. What to record

- Player report times/locations
- Baseline and incident metrics
- Profile/timings link
- Correlated changes
- Temporary containment
- Fix and before/after final checks

## 7. Final checklist

- [ ] Server vs client/network symptom separated
- [ ] Metrics captured during impact
- [ ] Recent changes reviewed
- [ ] Profile collected safely
- [ ] Containment is targeted
- [ ] Root cause identified or narrowed
- [ ] Fix measured against baseline
- [ ] Follow-up capacity work recorded

## 8. Related guides

- `OPS-004`
- `OPS-006`
- `DEV-002`
- `BLD-002`
- `EVT-001`
