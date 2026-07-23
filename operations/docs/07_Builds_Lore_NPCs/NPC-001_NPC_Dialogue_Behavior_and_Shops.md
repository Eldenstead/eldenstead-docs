---
title: "NPC Dialogue, Movement, and Shops"
sop_code: "NPC-001"
version: "1.1"
owner: "Content Lead"
approvers: "Development Lead"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# NPC-001 — NPC Dialogue, Movement, and Shops

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Create NPCs that are safe, useful, consistent with the lore, and tested before release.

## 2. Scope

Citizens NPC creation, traits, skins, names, dialogue, commands, pathfinding, sitting, schedules, shops, demand/stock behavior, permissions, and related holograms/models.

## 3. Who does what

- **Content/Lore owner:** Approves identity, personality, dialogue, and canon.
- **NPC implementer:** Creates Citizens configuration, locations, traits, and commands.
- **Developer:** Reviews custom behavior, shop logic, and exploit safety.
- **Builder:** Confirms navigation, seating, protection, and visual placement.
- **Administrator:** Approves production commands and high-value shops.

## 4. Procedure

### 4.1 NPC brief
Define:
- Internal ID and display name
- Role and location
- Canon level and personality boundaries
- Interaction method and dialogue pool
- Movement/sitting schedule
- Shop/service behavior
- Required permissions/cooldowns
- Failure behavior and maintenance owner

### 4.2 Creation safety
Use a consistent naming/ID registry. Record Citizens NPC ID and any linked trait, hologram, model, shop, command, or database identifier. Do not use a display name alone as the permanent reference.

### 4.3 Dialogue standards
- Write in the NPC's voice, but keep instructions understandable.
- Avoid repetitive spam; use cooldowns or random pools.
- Do not reveal staff secrets, commands, unreleased lore, or exact exploit information.
- Joke NPCs may be silly without targeting real protected groups or pressuring players into sexual/harassing content.
- Guard messages should use the standard `&8[&6Guard&8]` prefix where configured.
- Test color codes, line lengths, placeholders, and duplicate-send behavior.

### 4.4 Movement and seating
1. Build paths in a protected, walkable region.
2. Test doors, stairs, slabs, crowds, unloaded chunks, and obstruction recovery.
3. Set a safe home point and fallback behavior.
4. For seated NPCs, verify restart persistence and that interaction hitboxes remain usable.
5. Limit simultaneous pathfinding and high-frequency recalculation.

### 4.5 Shops and services
- Define stock, prices, buy/sell direction, caps, reset schedule, and demand behavior.
- Confirm no infinite buy/sell loop, price inversion, free-item path, or duplication through disconnect/restart.
- Use virtual economy consistently and log high-value transactions.
- Do not allow store cosmetics or staff-only items to enter normal economy unintentionally.
- Test full inventories, insufficient funds, rapid clicking, multiple players, restart, and NPC deletion.

### 4.6 Production verification
Interact as a normal player and staff account. Verify protection, permissions, dialogue frequency, movement, shop math, logs, restart persistence, and cleanup when the NPC is removed.

## 5. When to get senior help

Get senior help for any shop exploit, NPC command running with excessive authority, pathfinding causing server load, canon conflict, unlicensed skin/model, or NPC tied to an unannounced major feature.

## 6. What to record

- NPC brief and ID registry
- Location and Citizens ID
- Dialogue/config source
- Linked shop/commands/permissions
- Test results and restart check
- Maintenance owner and removal steps

## 7. Final checklist

- [ ] NPC brief and ID assigned
- [ ] Lore/personality approved
- [ ] Dialogue formatting and cooldown tested
- [ ] No duplicate messages/commands
- [ ] Path/seating/restart behavior tested
- [ ] Shop math and exploit cases tested
- [ ] Permissions use only the access needed
- [ ] Production interaction verified
- [ ] IDs/configuration documented

## 8. Related guides

- `LOR-001`
- `BLD-001`
- `DEV-002`
- `DEV-004`
- `MOD-006`
