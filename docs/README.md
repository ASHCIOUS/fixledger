# FixLedger

FixLedger is a maintenance coordination SaaS for small property managers.
It keeps each repair request, assignment, update, and completion record
together.

## Product focus

Help a manager move a maintenance request from tenant submission to
documented completion. FixLedger is not a complete property-management
suite and does not make legal, safety, or repair-quality determinations.

## Initial customer hypothesis

Independent property managers and small management companies. A possible
initial target is managers responsible for roughly 20–200 units. Validate
the customer profile and unit range with interviews before treating them
as settled.

## MVP workflow

1. A tenant submits a request for their unit.
2. A manager reviews it and assigns staff or a vendor.
3. The assignee records scheduling and progress updates.
4. The tenant receives appropriate status updates.
5. The manager records completion notes and attachments.
6. Authorized users can find the request history later.

## Proposed starting stack

- Next.js and TypeScript
- PostgreSQL, with Supabase as the initial database, authentication, and
  private file-storage option
- Transactional email provider behind an application-level interface
- Vitest for unit tests and Playwright for end-to-end tests

Review `docs/ARCHITECTURE.md` before changing these choices.

## Documentation

- `docs/PRD.md` — product requirements and MVP boundaries
- `docs/UX_FLOWS.md` — user journeys and screen behavior
- `docs/ARCHITECTURE.md` — application structure and technical choices
- `docs/DATA_MODEL.md` — entities and relationships
- `docs/SECURITY.md` — security and access-control requirements
- `docs/TEST_PLAN.md` — required test coverage
- `docs/BUILD_PLAN.md` — implementation milestones
- `AGENTS.md` — working rules for coding agents

## Development

Inspect the repository and existing package scripts before making changes.
Document the actual setup and test commands here once the app is scaffolded.
Never commit credentials, production data, or real tenant information.
