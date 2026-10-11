# Security Requirements

## Highest priority

Prevent cross-organization access and prevent tenants or vendors from seeing
records outside their authorization.

## Authentication and authorization

- Require authentication for manager, staff, tenant-portal, and vendor
  actions.
- Verify organization membership and role on the server for every operation.
- Verify tenant-to-unit membership before returning tenant request data.
- Verify vendor assignment before returning vendor request data.
- Apply the same authorization rules to downloads, exports, and notifications.
- Return a generic not-found or permission-denied response where needed to
  avoid revealing another user's records.

## Data isolation

- Scope queries and mutations to the authenticated user's authorized
  organization.
- Use database policies as an additional control when available.
- Test attempts to access another organization by changing IDs in a URL,
  request body, or API call.
- Never accept a client-supplied organization ID as proof of authorization.

## Attachments

- Store attachments privately.
- Check access to the parent request before allowing upload or download.
- Validate size and content type on the server.
- Use short-lived access links.
- Avoid serving untrusted uploads as executable content.
- Do not expose storage keys in public pages or logs.

## Sensitive information

- Collect only data needed to coordinate maintenance.
- Do not request payment card details, government identifiers, or unrelated
  tenant information in the MVP.
- Keep access instructions and internal notes out of tenant-visible messages
  and email subject lines.
- Do not log passwords, tokens, private file links, or full sensitive request
  content.

## Changes and retention

- Record important status, assignment, and update actions in an audit history.
- Restrict who can delete requests or attachments.
- Define retention and deletion behavior before production launch.
- Back up the database and test restoration before relying on it operationally.

## AI boundary

If AI features are added later:
- Do not let AI decide whether a repair is an emergency or legally required.
- Do not automatically issue legal notices or promise repair outcomes.
- Make AI-generated summaries or drafts visibly reviewable before sending.
- Do not send tenant data to an AI provider until the data flow and applicable
  user notice have been reviewed.
