# Test Plan

## Test layers

- Unit tests for validation, status transitions, and permission helpers.
- Integration tests for database operations and authorization.
- End-to-end tests for the main tenant, manager, and vendor workflows.
- Manual pilot testing with sample data before inviting real users.

## Required authorization tests

- A manager from Organization A cannot read or modify Organization B's
  properties, units, requests, users, or attachments.
- A tenant cannot view requests for another tenant's unit.
- A vendor cannot view requests not assigned to that vendor.
- A staff member cannot perform manager-only actions unless permitted.
- Changing an ID in a request URL or body does not bypass authorization.
- Unauthorized attachment downloads are rejected.

## Required workflow tests

- Authorized tenant can submit a request for an associated unit.
- Invalid or unauthorized unit submissions are rejected.
- Manager can review and assign a request.
- Authorized assignee can update an assigned request.
- Internal notes are not visible to tenants or vendors.
- Tenant-visible updates are visible to the intended tenant.
- Status transitions are validated.
- Completion attachments appear on the authorized request record.
- Closing a request preserves its history.

## Input and upload tests

- Required fields are enforced.
- Oversized and disallowed file types are rejected.
- Invalid input is handled without exposing internal errors.
- Duplicate form submissions do not create unintended duplicate requests.

## Notification tests

- The correct recipient receives the correct event notification.
- Internal notes are never included in tenant emails.
- Retried notification jobs do not create duplicate request updates.
- Email failure does not erase a successfully saved request or update.

## Release check

Before a pilot:
- Run all automated tests.
- Test the application on a mobile-sized viewport.
- Test role and cross-organization access manually.
- Use synthetic data only.
- Confirm that errors do not expose secrets or private attachment links.
