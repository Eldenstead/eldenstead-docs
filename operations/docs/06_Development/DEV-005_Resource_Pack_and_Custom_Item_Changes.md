---
title: "Resource Pack and Custom Item Changes"
sop_code: "DEV-005"
version: "1.1"
owner: "Content Development Lead"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# DEV-005 — Resource Pack and Custom Item Changes

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Never reuse a distributed custom item identifier for a different item without a tested migration.

## 1. Purpose

Change the resource pack and custom items without breaking old items or player access.

## 2. Scope

Eldenstead resource-pack source, custom item plugin definitions, model data/components, ModelEngine assets, sounds, language files, server pack URL/hash, and related recipes/loot/store cosmetics.

## 3. Who does what

- **Asset creator:** Produces original/licensed assets and source files.
- **Content developer:** Assigns identifiers and integrates pack/plugin data.
- **Tester:** Tests clean client download and existing-item compatibility.
- **Lore/gameplay owner:** Approves names, recipes, stats, and canon fit.
- **Founder:** Approves paid/cosmetic products and major visual direction.

## 4. Procedure

### 4.1 Asset intake and licensing
Record creator/source, license, proof of purchase/permission, allowed modification, and redistribution rights. Do not bundle assets because they are downloadable online. Preserve attribution when required.

### 4.2 Identifier discipline
Maintain a registry for custom item IDs, model/component identifiers, namespaces, armor/equipment slots, sounds, and ModelEngine model IDs. Never reuse an identifier for a different item once distributed to players unless a migration is provided.

### 4.3 Design review
Confirm:
- Visual fit with Eldenstead's grounded medieval style
- Item name, lore, rarity, recipe/source, and gameplay stats
- Non-pay-to-win compliance for store cosmetics
- No conflict with existing items or future reserved identifiers
- Performance impact of model size, textures, animations, and sounds

### 4.4 Build and final checks
1. Build from the tracked source.
2. Check pack format and JSON/model final checks.
3. Inspect startup/resource-pack logs.
4. Test on a clean client cache and an updating client.
5. Test inventory, equipment, crafting, death/drop, storage, trade, restart, and migration behavior.
6. Verify missing-pack behavior does not create misleading or exploitable items.
7. Test armor/model combinations on representative skins and settings.

### 4.5 Existing item migration
For renamed, re-IDed, or stat-changed items:
- Define old-to-new mapping
- Preserve important metadata where possible
- Prevent duplication on conversion
- Test items in inventories, chests, shops, NPCs, and dropped form
- Keep a rollback copy of old definitions and pack

### 4.6 Publish
Upload the approved pack to the controlled endpoint, record file hash/version, update server configuration, restart when required, and verify the actual served file. Announce shown to players changes without leaking hidden recipes/lore unless approved.

### 4.7 Removal
Do not simply delete distributed definitions. Deprecate, migrate, replace with a safe legacy representation, or remove through an approved cleanup plan.

## 5. When to get senior help

Escalate unclear asset rights, identifier collision, existing-item corruption, store advantage concerns, pack download compromise, malicious files, or a change that makes rare/player-owned items unrecoverable.

## 6. What to record

- Asset source/license
- Identifier registry update
- Design approval
- Pack/plugin source commit
- Build hash/version
- Migration and test results
- Published URL/hash and rollback files

## 7. Final checklist

- [ ] Asset rights recorded
- [ ] Unique identifiers reserved
- [ ] Gameplay/lore/non-P2W review complete
- [ ] Pack validates and builds cleanly
- [ ] Clean/update client tests pass
- [ ] Existing items tested/migrated
- [ ] Published file/hash verified
- [ ] Rollback package retained

## 8. Related guides

- `DEV-002`
- `DEV-003`
- `SUP-003`
- `NPC-001`
- `CNT-001`
