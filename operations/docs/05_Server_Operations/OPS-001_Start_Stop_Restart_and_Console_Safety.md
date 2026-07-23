---
title: "Starting, Stopping, and Restarting the Server Safely"
sop_code: "OPS-001"
version: "1.1"
owner: "Server Administrator"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-001 — Starting, Stopping, and Restarting the Server Safely

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Do not use a force stop as a normal restart method.

## 1. Purpose

Start, stop, and restart Eldenstead safely without risking world or player data.

## 2. Scope

Manual or automated start, stop, restart, kill, console command, and emergency process-control actions for the production Minecraft server and closely related services.

## 3. Who does what

- **Authorized Administrator/Developer:** Performs normal operations and verification.
- **Incident Lead:** Approves emergency actions during an incident.
- **Founder:** Approves forced termination when risk is unclear or data loss is possible.
- **Communications staff:** Publishes player notices when impact is visible.

## 4. Procedure

### 4.1 Before a planned restart
1. Confirm the reason and that no deployment/backup/restore is already active.
2. Check player count, active events/wars, backups, console errors, disk space, and current TPS/MSPT.
3. Give in-game notices at approximately 10, 5, and 1 minute when practical.
4. Ask staff to pause sensitive actions such as large WorldEdit operations, economy corrections, or bulk permissions changes.

### 4.2 Normal stop/restart
1. Use the server's normal save and stop command or host-panel graceful restart.
2. Watch console for save completion and plugin shutdown errors.
3. Wait for the process to exit cleanly.
4. Start the service if the panel does not do so automatically.
5. Watch the full startup log for plugin load failures, world errors, port conflicts, database errors, or resource-pack/config warnings.
6. Join and complete the post-start checks.

### 4.3 Post-start checks
- Server accepts connections
- Correct Paper/server version loaded
- Core plugins enabled, especially EldenKingdoms, permissions, economy, Citizens/NPC dependencies, Squaremap integration, and required custom systems
- Worlds load and spawn is safe
- Chat channels and commands function
- Claims/kingdom data is present
- Resource pack/custom items load
- Website/map/Discord integrations are not producing repeated errors
- TPS/MSPT and memory are stable after initial loading

### 4.4 Console safety
- Verify command syntax and target before pressing Enter.
- Avoid wildcard, mass-delete, mass-permission, and economy commands without a reviewed plan.
- Never paste commands from an untrusted user or public source directly into production.
- Record high-impact commands in the change/incident record.
- Do not expose console screenshots containing IPs, tokens, file paths, or player private data.

### 4.5 Forced termination
Use kill/force stop only when the process cannot shut down and continued running creates greater risk. Before force-stopping, capture console output and current symptoms. Afterward, treat the restart as an incident and verify world/data integrity.

## 5. When to get senior help

Escalate repeated crash loops, save failures, world corruption warnings, database connection failures, unexplained plugin loss, disk-full conditions, or any need to force-stop during active writes.

## 6. What to record

- Reason and operator
- Player notices
- Start/stop timestamps
- Console anomalies
- Post-start checklist
- Incident/change link when applicable

## 7. Final checklist

- [ ] Reason and authority confirmed
- [ ] Active events/changes checked
- [ ] Players notified when possible
- [ ] Graceful stop used
- [ ] Startup log reviewed
- [ ] Core features tested
- [ ] Performance checked
- [ ] Errors documented and escalated

## 8. Related guides

- `OPS-002`
- `OPS-003`
- `OPS-004`
- `OPS-006`
