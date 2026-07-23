---
title: "Safe WorldEdit and Large Build Changes"
sop_code: "BLD-002"
version: "1.1"
owner: "Build Lead"
approvers: "Server Administrator"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# BLD-002 — Safe WorldEdit and Large Build Changes

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Never perform a destructive large selection without both a region schematic and a recent server backup.

## 1. Purpose

Use WorldEdit and other large-edit tools without causing major world damage.

## 2. Scope

WorldEdit/FAWE commands, schematic pastes, large fills/replaces, biome changes, terrain tools, structure deletion, region moves, and mass block/entity operations.

## 3. Who does what

- **Builder:** Prepares selection, estimate, and schematic.
- **Build lead:** Reviews visual scope and destination.
- **Administrator:** Approves high-volume production edits and monitors server impact.
- **Incident Lead:** Responds if the edit causes lag, corruption, or player impact.

## 4. Procedure

### 4.1 Pre-edit requirements
1. Confirm exact world and coordinates.
2. Inspect nearby claims, builds, NPCs, containers, redstone, portals, and protected regions.
3. Estimate selection volume and block-entity/entity impact.
4. Save a schematic of affected content and ensure a recent server backup.
5. Test the command/paste in a build or staging world.
6. Schedule a low-activity window for high-volume edits.

### 4.2 Selection safety
- Use two-point selection verification and visually inspect boundaries.
- Run information/count commands before destructive changes.
- Avoid commands while teleported across worlds unless the target is rechecked.
- Do not rely on clipboard memory from an earlier session.
- Use masks and include/exclude air intentionally.

### 4.3 Paste/replace strategy
Choose based on outcome:
- Ignore air when preserving destination terrain/interiors is intended.
- Include air only when clearing the destination is explicitly approved.
- For ships/caves/complex structures, test whether water, kelp, seagrass, containers, or entities require separate handling.
- Avoid replacing broad natural block categories without reviewing edge effects.

### 4.4 Execution
1. Announce/coordinate with online staff.
2. Confirm no players are inside the affected region.
3. Execute one planned operation at a time.
4. Monitor TPS/MSPT, console, and completion.
5. Do not queue multiple giant operations because the first appears slow.
6. Inspect immediately before saving additional edits.

### 4.5 Undo and recovery
Use WorldEdit undo only when the session/history is known and server state remains stable. For uncertain or cross-session damage, use the destination schematic or targeted backup restoration. Preserve evidence if the edit caused an incident.

### 4.6 Finalization
Check terrain seams, fluids, lighting, entities, containers, redstone, navigation, protections, and nearby player content. Remove temporary markers and staff blocks.

## 5. When to get senior help

Immediately stop and escalate if TPS collapses, selection boundaries are wrong, chunks fail to save, containers/player builds are affected, undo history is uncertain, or a large paste introduces duplicate entities/items.

## 6. What to record

- Operator and approver
- World/coordinates/selection volume
- Exact commands and masks
- Pre-edit schematic/backup
- Performance notes
- Final Checks and recovery action

## 7. Final checklist

- [ ] World and coordinates rechecked
- [ ] Nearby player/staff content reviewed
- [ ] Volume and entities estimated
- [ ] Schematic and backup created
- [ ] Operation tested outside production
- [ ] Air/mask behavior intentional
- [ ] Players cleared from region
- [ ] One operation executed and monitored
- [ ] Fluids/entities/protections validated

## 8. Related guides

- `BLD-001`
- `OPS-003`
- `OPS-004`
- `OPS-005`
