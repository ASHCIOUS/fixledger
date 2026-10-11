# UX Flows

## UX principles

- Make the tenant request flow mobile-first and short.
- Make the next action obvious to the manager.
- Clearly distinguish internal notes from tenant-visible updates.
- Show who can see an update before it is sent.
- Do not use frightening or definitive language to classify repair severity.
- Make empty, loading, error, and success states understandable.

## Tenant: submit a request

1. Open a property or management-company request link.
2. Authenticate or verify access using the configured sign-in flow.
3. Select an associated unit if the tenant is authorized for multiple units.
4. Enter category and description.
5. Optionally add photos and access instructions.
6. Review and submit.
7. See a confirmation and the request's current status.

Errors should explain how to fix the problem without exposing whether another
tenant or unit exists.

## Tenant: track a request

1. Open the tenant portal.
2. See only requests linked to the tenant's authorized unit or units.
3. Open a request to view its tenant-visible status and updates.
4. Do not show internal notes, private vendor details, or other tenants'
   information.

## Manager: triage and assign

1. Open the work queue.
2. Review new requests and attached information.
3. Open a request and check its property, unit, description, and history.
4. Set or update the status.
5. Assign an authorized staff member or vendor.
6. Add an internal note or send a tenant-visible update.
7. See a confirmation that the action was recorded.

## Vendor or staff: update assigned work

1. Sign in and open the assigned-work list.
2. Open an authorized request.
3. Review details needed to perform the work.
4. Update status, add a work note, or upload completion evidence.
5. See confirmation that the update was saved.

## Manager: close a request

1. Review completion notes and attachments.
2. Add a final tenant-visible update if appropriate.
3. Mark the request completed, then closed.
4. Confirm that the request is retained in history and searchable.

## Key screen states

Every list and detail screen must include:
- Loading state
- Empty state with an appropriate next action
- Error state with retry or support guidance
- Success feedback after important actions
- Permission-denied state that does not reveal unauthorized records
