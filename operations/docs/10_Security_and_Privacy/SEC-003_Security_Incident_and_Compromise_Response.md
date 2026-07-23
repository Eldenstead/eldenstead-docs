---
title: "Responding to Hacked Accounts and Security Problems"
sop_code: "SEC-003"
version: "1.1"
owner: "Security Owner"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# SEC-003 — Responding to Hacked Accounts and Security Problems

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> Contain access first; do not focus on public attribution while an attacker may still be present.

## 1. Purpose

Stop and recover from hacked accounts, leaked secrets, malware, or other security problems.

## 2. Scope

Staff/account compromise, leaked login details, malware, unauthorized console/database/code repository/domain access, website defacement, bot takeover, data exposure, suspicious admin actions, and supply-chain concerns.

## 3. Who does what

- **Security Incident Lead:** Directs containment, evidence, recovery, and communications.
- **System owners:** Revoke access and validate affected systems.
- **Scribe:** Maintains a restricted timeline.
- **Founder:** Controls legal/provider/player notification and major service shutdown decisions.
- **All staff:** Report immediately and avoid independent public discussion.

## 4. Procedure

### 4.1 Declare and restrict
Create a restricted SEV-1/SEV-2 incident record. Identify suspected accounts/systems, first known time, current attacker access, data at risk, and Incident Lead.

### 4.2 Containment order
1. Secure trusted founder/security email and password manager.
2. Revoke active sessions, tokens, keys, webhooks, and suspicious apps.
3. Disable compromised accounts or remove high-level roles.
4. Isolate affected host/service or disable vulnerable integration.
5. Preserve logs, disk snapshots, audit history, messages, and malicious files safely.
6. Freeze unrelated changes.

Do not rotate every secret from a potentially compromised device before establishing a clean control point.

### 4.3 Scope investigation
Review authentication/audit logs, commands, code repository commits, plugin/config changes, database queries, webhooks, payment/store activity, Discord actions, DNS/Cloudflare changes, backups, and exfiltration indicators. Distinguish confirmed access from suspected exposure.

### 4.4 Eradication and recovery
- Remove malicious accounts/files/apps and patch the entry point.
- Rotate affected and reused login details from a clean device.
- Rebuild compromised systems when integrity cannot be trusted.
- Restore known-good data/configuration and verify hashes/history.
- Validate permissions, economy, claims, player data, website/store, bots, and DNS.
- Monitor for re-entry before and after reopening.

### 4.5 Communication
Only approved staff communicate publicly. Do not identify an attacker without proof, reveal defenses, or minimize confirmed impact. Founder/Privacy Owner determines whether affected users/providers must be notified.

### 4.6 Post-incident
Document root cause, impact, accessed/changed data, duration, containment, recovery, notifications, and preventive actions. Review staff access, logging, backups, MFA, vendor risk, and secret handling.

## 5. When to get senior help

Engage hosting/domain/payment/platform support as needed. Threats, extortion, doxxing, payment compromise, significant personal-data exposure, or potential criminal activity require immediate Founder review and may require external reporting.

## 6. What to record

- Restricted incident timeline
- Affected accounts/systems/data
- Revoked/rotated login details inventory
- Preserved logs/snapshots/evidence
- Recovery final checks
- Provider/user communications
- Post-incident actions

## 7. Final checklist

- [ ] Clean control account/device established
- [ ] Sessions/tokens/access contained
- [ ] Evidence preserved
- [ ] Scope investigated across connected systems
- [ ] Entry point removed/patched
- [ ] Compromised systems rebuilt or verified
- [ ] Login Details rotated and old ones revoked
- [ ] Communications approved
- [ ] Post-incident review completed

## 8. Related guides

- `OPS-004`
- `OPS-008`
- `SEC-001`
- `SEC-002`
- `PRV-001`
- `STF-005`
