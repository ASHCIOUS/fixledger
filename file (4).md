# Architecture

## Initial architecture

Use a responsive web application with server-side authorization and a
relational database.

Proposed starting stack:
- Next.js and TypeScript for the application
- PostgreSQL for persistent data
- Supabase as an initial option for PostgreSQL, authentication, and private
  object storage
- An email-provider interface for transactional notifications
- Vitest and Playwright for tests

These choices may change after repository inspection. Record material
changes here and explain why.

## Application areas

- Authentication and organization membership
- Property and unit administration
- Maintenance request submission and management
- Assignments and updates
- Private attachment management
- Notifications
- Audit history

## Authorization

Authorization must be checked on the server for every data operation.
Database row-level security may provide a second layer, but it does not
replace careful server-side checks and tests.

Core access rules:
- A user must have an active membership in an organization to manage its
  records.
- A tenant can access requests only for units they are associated with.
- A vendor can access only requests assigned to that vendor.
- A staff member can access requests allowed by their organization role.
- Attachments inherit the access rules of their parent request.

## Files

- Store files in private object storage.
- Save file metadata and the parent request relationship in the database.
- Issue short-lived authorized download links only after checking access.
- Validate file size and allowed content types on the server.
- Do not store permanent public URLs for private attachments.

## Notifications

- Send notifications only for events that need user attention.
- Keep tenant-visible messages separate from internal notes.
- Avoid placing sensitive descriptions or access instructions in email
  subject lines.
- Make notification sending retryable without duplicating request updates.
- Keep the provider behind an application-level interface so it can be
  replaced.

## Audit history

Record important actions such as request creation, assignment changes,
status changes, and updates. Store actor, timestamp, action, and relevant
record identifiers. Do not store secrets or unnecessary personal data in
audit events.

## Environment and secrets

- Use environment variables for credentials and provider configuration.
- Keep secrets out of source control and client-side bundles.
- Provide an `.env.example` containing variable names and safe placeholders
  when the application is scaffolded.
- Never use production credentials or real tenant information in local
  development.
