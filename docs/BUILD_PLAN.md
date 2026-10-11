# Build Plan

## Working rule

Build one milestone at a time. Keep the app runnable and test each milestone
before moving to the next. Validate the workflow with property managers
before investing in integrations or advanced features.

## Milestone 0: Validate the problem

- Interview a small group of independent property managers.
- Ask them to describe recent maintenance requests from report to completion.
- Observe how they track vendor updates and communicate with tenants.
- Ask what software they already use and what they would not replace.
- Update the PRD based on evidence; do not assume the initial unit range is
  correct.

## Milestone 1: Prototype

- Create manager dashboard, request detail, tenant form, and assignee screen.
- Use synthetic records.
- Test whether each role understands its next action.
- Keep the prototype focused on one repair moving through the full workflow.

## Milestone 2: Foundation

- Scaffold the application using the agreed stack.
- Add authentication and organization membership.
- Create migrations for organizations, properties, units, and memberships.
- Add authorization tests before adding sensitive workflows.

## Milestone 3: Core request workflow

- Build tenant request submission.
- Build manager request queue and details.
- Add assignments and statuses.
- Add internal notes and tenant-visible updates as separate data paths.
- Add audit history for key actions.

## Milestone 4: Files and notifications

- Add private attachment storage and authorization checks.
- Add email confirmations and tenant-visible status notifications.
- Test retries and failure handling.

## Milestone 5: Pilot readiness

- Add search and filters needed by pilot users.
- Complete cross-organization and role-based access tests.
- Write setup and backup instructions.
- Run a pilot using synthetic or explicitly approved test data.
- Record user feedback and prioritize fixes before expanding scope.

## Defer until validated

- SMS
- Accounting and property-management integrations
- AI-generated summaries
- Vendor marketplace
- Rent collection, leasing, and tenant screening
- Native mobile applications
- Advanced analytics
