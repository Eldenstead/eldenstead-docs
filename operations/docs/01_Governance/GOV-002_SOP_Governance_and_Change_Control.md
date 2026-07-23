---
title: "Managing SOP Changes"
sop_code: "GOV-002"
version: "1.1"
owner: "Staff Manager"
approvers: "Founders"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# GOV-002 — Managing SOP Changes

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Explain how staff create, review, approve, update, and retire Eldenstead SOPs.

## 2. Scope

Every SOP, checklist, form, moderation matrix, internal policy, and public procedure maintained for Eldenstead.

## 3. Who does what

- **Document owner:** Reviews the SOP and proposes updates.
- **Subject-matter reviewer:** Confirms technical or operational accuracy.
- **Approver:** Accepts changes that affect authority, safety, payments, privacy, or production.
- **All staff:** Report outdated or unsafe instructions.

## 4. Procedure

### 4.1 Propose a change
1. Open a change request using the template in `11_Forms_and_Templates`.
2. State the problem, affected SOP, proposed wording, reason, risk, and effective date.
3. Mark the change as editorial, routine, significant, or emergency.

### 4.2 Review level
- **Editorial:** Spelling, formatting, links, or role-name cleanup with no behavior change. Document owner may approve.
- **Routine:** Clarifies steps or updates normal commands. Owner plus subject-matter reviewer approve.
- **Significant:** Changes authority, moderation, compensation, security, privacy, payments, or player rights. Founder approval required.
- **Emergency:** Corrects an instruction that is actively unsafe or causing incidents. The unsafe step may be suspended immediately, followed by retrospective approval.

### 4.3 Versioning
1. Increment the patch number for editorial fixes, the minor number for procedural changes, and the major number for policy redesigns.
2. Update `last_reviewed`, owner, and approvers.
3. Add a brief change log at the bottom of the affected file when the change is significant.
4. Update links in `00_README.md` if a file moves or is replaced.

### 4.4 Publication
1. Store the approved source in the official staff code repository or document library.
2. Announce significant changes in the staff announcements channel.
3. Require confirmation when the change affects moderation, security, or live operations.
4. Archive the previous version rather than silently overwriting the historical record.

### 4.5 Scheduled review
- Review every SOP at least every six months.
- Review immediately after a related SEV-1/SEV-2 incident.
- Review before beta, major launch, host migration, server version change, or major plugin replacement.
- Mark obsolete SOPs as superseded and link the replacement.

## 5. When to get senior help

If a procedure conflicts with an immediate safety need, staff should stop the unsafe step, protect players/data, and notify the owner. Emergency deviation does not permanently rewrite policy; it triggers a documented review.

## 6. What to record

- Change request
- Reviewer comments
- Approval record
- Prior and current versions
- Staff confirmation for high-impact changes

## 7. Final checklist

- [ ] Reason for change documented
- [ ] Correct review level chosen
- [ ] Subject-matter review completed
- [ ] Required approval captured
- [ ] Version and review date updated
- [ ] Staff notified
- [ ] Old version archived

## 8. Related guides

- `GOV-001`
- `DEV-003`
- `OPS-006`
