---
title: "Responding to Live Server Problems"
sop_code: "OPS-004"
version: "1.1"
owner: "Server Administrator"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# OPS-004 — Responding to Live Server Problems

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

> [!IMPORTANT]
> During a major incident, one Incident Lead makes the final operational call.

## 1. Purpose

Give staff one clear process for outages, crashes, damaged data, major bugs, exploits, and other urgent problems on the live server.

## 2. Scope

SEV-1 through SEV-3 incidents affecting gameplay, data, website/store, Discord integrations, map, network, security, or critical staff systems.

## 3. Who does what

- **Incident Lead:** Owns decisions, assignments, timeline, and resolution.
- **Technical responders:** Diagnose and execute approved containment/recovery.
- **Communications owner:** Publishes shown to players updates.
- **Scribe:** Records events, commands, hypotheses, and decisions during major incidents.
- **Founder:** Approves high-risk recovery, broad compensation, and final external statements.

## 4. Procedure

### 4.1 Name the problem and choose its level
Write down the incident name, seriousness level, affected systems, known player impact, Incident Lead, and start time. Create a separate private record or channel for SEV-1 and SEV-2 incidents.

### 4.2 Stop the problem from getting worse
1. Protect people, accounts, and data first.
2. Stop destructive writes or disable the affected feature.
3. Preserve logs, backups, metrics, and current state.
4. Avoid speculative fixes that destroy evidence.
5. Reduce change volume: freeze unrelated deployments and edits.

### 4.3 Establish facts
Track:
- Confirmed symptoms
- First known time and triggering event
- Scope and affected players/services
- Recent changes
- Current hypotheses, each labeled unconfirmed
- Actions taken and results

### 4.4 Keep players and staff informed
For problems players can see, post a short update. State what is affected, what players should avoid, and where more updates will appear. Do not guess about attackers, blame staff, reveal exploit steps, or promise an exact return time without proof.

### 4.5 Diagnose and recover
Use the safest path:
1. Reproduce in staging or inspect logs.
2. Roll back the recent change if strongly correlated and reversible.
3. Patch/disable the failing component.
4. Restore targeted data if necessary.
5. Validate all critical flows before reopening.

### 4.6 Resolve
Resolution requires:
- Harm contained
- Core service stable
- Data integrity reasonably verified
- Monitoring active
- Player instructions/notice issued
- Follow-up tasks assigned

### 4.7 Post-incident review
Within seven days for SEV-1/SEV-2, document impact, timeline, root cause, contributing factors, what worked, what failed, corrective actions, owners, and deadlines. Focus on system improvement rather than blame.

## 5. When to get senior help

Security, payment, privacy, doxxing, real-world threats, staff abuse, widespread economy contamination, and unrecoverable data loss require Founder involvement. Contact hosting/provider support when the fault is outside Eldenstead's control.

## 6. What to record

- Incident declaration and severity
- Timeline and command/change log
- Evidence/backups/metrics
- Internal assignments
- Public updates
- Recovery final checks
- Post-incident review and action items

## 7. Final checklist

- [ ] Incident Lead assigned
- [ ] Severity and scope declared
- [ ] Destructive activity contained
- [ ] Evidence and current state preserved
- [ ] Unrelated changes frozen
- [ ] Public confirmation sent if needed
- [ ] Recovery validated
- [ ] Monitoring and handover established
- [ ] Post-incident review completed

## 8. Related guides

- `GOV-001`
- `STF-004`
- `OPS-001`
- `OPS-003`
- `OPS-005`
- `OPS-008`
- `COM-001`
- `SEC-003`
