# Server Release Checklist

Use this checklist before and after releasing code, plugins, settings, or resource-pack changes.

## Candidate

- [ ] Work items and acceptance criteria complete
- [ ] Reviewed commit/tag identified
- [ ] Clean build successful
- [ ] Artifact hash recorded
- [ ] Configuration diff documented
- [ ] Dependencies and compatible versions recorded
- [ ] Release notes written

## Testing

- [ ] Normal feature flow passed
- [ ] Permission-denied flow passed
- [ ] Invalid/error cases passed
- [ ] Restart persistence passed
- [ ] Related regression tests passed
- [ ] Migration tested on a copy
- [ ] Performance/load checked where relevant
- [ ] Known limitations approved

## Production readiness

- [ ] Change request approved
- [ ] Backup verified
- [ ] Previous artifact/config ready
- [ ] Rollback steps and triggers documented
- [ ] Maintenance/announcement prepared
- [ ] Deployer and validator assigned
- [ ] No conflicting incident/change active

## Deployment

- [ ] Graceful stop/restart used where required
- [ ] Exact tested artifact deployed
- [ ] Startup logs reviewed
- [ ] Migration output reviewed
- [ ] Core smoke tests passed
- [ ] Player announcement sent

## Observation and closeout

- [ ] Logs/TPS/MSPT/database monitored
- [ ] Duplicate messages/tasks/rewards checked
- [ ] Support tickets reviewed
- [ ] Old artifact retained through observation
- [ ] Version inventory/documentation updated
- [ ] Follow-up tasks created
- [ ] Release formally closed
