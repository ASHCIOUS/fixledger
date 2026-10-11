# Instructions for coding agents

## Start here

Before making changes, read:
1. `README.md`
2. `docs/PRD.md`
3. `docs/ARCHITECTURE.md`
4. `docs/SECURITY.md`
5. The document relevant to your task

Inspect the existing codebase and package scripts before proposing commands
or replacing files. If requirements conflict, stop and explain the conflict.

## Working approach

- Work in small, reviewable milestones from `docs/BUILD_PLAN.md`.
- State a brief plan before a substantial change.
- Do not add features outside the MVP without updating the plan.
- Prefer simple implementations over premature abstractions.
- Update documentation when actual implementation decisions change.
- Do not claim a task is complete unless relevant tests pass.

## Security rules

- Enforce authorization on the server and at the data-access layer.
- Every organization-owned record must be scoped to the authenticated user's
  organization.
- Never rely on frontend visibility or hidden buttons for authorization.
- Tenants may access only requests associated with their unit.
- Vendors may access only requests assigned to them.
- Managers may access records only for organizations where they have an
  authorized membership.
- Keep internal notes separate from tenant-visible updates.
- Keep attachments private and authorize every download.
- Never commit secrets or use real tenant data in development fixtures.

## Product boundaries

- Do not use AI to diagnose repairs or decide whether an issue is an
  emergency.
- Do not automatically send legal notices.
- Do not expose internal notes to tenants or vendors.
- Do not present FixLedger as proof that a repair is safe, legally compliant,
  or properly completed.

## Quality requirements

- Validate input on the server.
- Add tests for authorization boundaries, especially cross-organization
  access.
- Add loading, empty, error, and success states to user-facing screens.
- Make the tenant request flow usable on mobile.
- Use database migrations for schema changes.
- Do not log passwords, authentication tokens, or sensitive attachment URLs.
