---
title: "Managing Settings Files"
sop_code: "DEV-004"
version: "1.1"
owner: "Development Lead"
approvers: "Server Administrator"
reading_level: "Ages 13 and up; plain language"
classification: "Internal"
review_cycle: "Every 6 months or after a major incident"
last_reviewed: "2026-07-22"
---

# DEV-004 — Managing Settings Files

> New to staff work? See the [Plain-language glossary](../00_PLAIN_LANGUAGE_GLOSSARY.md) for technical terms.

## 1. Purpose

Keep settings files organized, reviewed, backed up, and the same across systems.

## 2. Scope

YAML, JSON, TOML, properties, environment variables, message files, permissions definitions, plugin configs, startup flags, web configuration, and deployment templates.

## 3. Who does what

- **Configuration owner:** Maintains defaults/schema and documentation.
- **Change owner:** Proposes a minimal diff and test plan.
- **Reviewer:** Checks syntax, behavior, secrets, and compatibility.
- **Deployer:** Applies the approved version and records production state.

## 4. Procedure

### 4.1 Source of truth
Maintain non-secret configuration in version control or an approved configuration code repository. Production should not contain unexplained manual differences. Secrets belong in a secret manager or protected environment, not committed files.

### 4.2 Change preparation
1. Start from the current production version.
2. Make the smallest necessary change.
3. Preserve comments and formatting where practical.
4. Validate indentation and schema, especially YAML lists/strings and color-code/message escaping.
5. Record before/after diff and expected behavior.

### 4.3 Review topics
- Correct key names and data types
- Duplicate keys or conflicting sections
- Command and permission changes
- Placeholder compatibility
- Message length/platform limits
- Unsafe defaults or exposed admin features
- Secrets, URLs, tokens, database login details, or internal addresses
- Restart/reload behavior

### 4.4 Testing
Use the plugin/application's final checks command when available. Start staging from a clean stop, inspect parse warnings, test affected behavior, and restart again to confirm persistence.

### 4.5 Production application
Back up the current config, apply the reviewed file/diff, use the supported reload method only if verified safe, and inspect logs. For central plugins or uncertain reload behavior, use a normal restart.

### 4.6 Drift review
Periodically compare production to the source of truth. Investigate unexpected differences before overwriting them. Import valid emergency changes back into version control after review.

### 4.7 Deprecated keys
When upgrading plugins, compare vendor migration notes and generated defaults. Remove obsolete keys only after confirming they are no longer read and that custom messages/values are preserved.

## 5. When to get senior help

Escalate configs containing login details in public repos, unexpected production drift, automatically rewritten files that lose settings, or changes affecting payment, privacy, permission, economy, claims, or war rules.

## 6. What to record

- Configuration source/version
- Reviewed diff
- Syntax/schema final checks
- Staging result
- Production backup and deployed checksum
- Drift or migration notes

## 7. Final checklist

- [ ] Current production version used as base
- [ ] Minimal diff prepared
- [ ] YAML/JSON/schema validated
- [ ] Secrets excluded
- [ ] Permissions/placeholders reviewed
- [ ] Staging restart test passed
- [ ] Production backup taken
- [ ] Final state recorded in source of truth

## 8. Related guides

- `DEV-001`
- `DEV-002`
- `DEV-003`
- `OPS-006`
- `SEC-002`
