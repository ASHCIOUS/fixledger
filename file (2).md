# Product Requirements Document

## Product

FixLedger — maintenance request coordination for small property managers.

## Problem

Maintenance requests and updates can be scattered across calls, texts,
emails, and photos. Managers need a consistent way to collect requests,
coordinate the people doing the work, update tenants, and retain a useful
job history.

This problem statement is a hypothesis to validate with property managers.

## Goal

Make it easy to move a repair request from submission to documented
completion, with clear ownership and an accessible history.

## Initial customer hypothesis

Independent property managers and small management companies. Test which
portfolio size, property type, and current tools are most likely to adopt
a focused maintenance product.

## Users and permissions

### Manager
Manages properties, units, requests, assignments, and user access for their
organization.

### Staff member
Can view and update requests they are authorized to handle within their
organization.

### Tenant
Can submit requests for an associated unit and view tenant-visible updates
for their own requests.

### Vendor
Can view and update requests assigned to them. They cannot browse unrelated
properties or requests.

## MVP workflow

1. A tenant submits a request for a unit.
2. The request appears in the manager's work queue.
3. A manager reviews it and assigns staff or a vendor.
4. The assignee records scheduling and progress.
5. The manager or assignee sends tenant-visible updates.
6. The work is marked completed with notes and optional attachments.
7. The manager closes the request; its history remains available to
   authorized users.

## Functional requirements

### Request submission
- Select or resolve the tenant's associated property and unit.
- Capture category, description, and submission time.
- Allow optional photos and access instructions.
- Show a confirmation after successful submission.

### Manager workflow
- View requests across authorized properties.
- Filter by status, property, unit, assignee, and date.
- Assign and reassign staff or vendors.
- Add internal notes and separate tenant-visible updates.
- Close a request without deleting its history.

### Assignee workflow
- View only assigned or otherwise explicitly authorized requests.
- Update status and add work notes.
- Upload completion photos or documents.

### Tenant workflow
- Submit a request from a mobile-friendly web page.
- View requests associated with their own unit.
- Receive relevant tenant-visible updates.

### Recordkeeping
- Record status changes and who made them.
- Associate attachments with a request.
- Let authorized managers download or export a request record.

## Request statuses

- `NEW`
- `UNDER_REVIEW`
- `ASSIGNED`
- `SCHEDULED`
- `IN_PROGRESS`
- `WAITING`
- `COMPLETED`
- `CLOSED`

Status changes should be validated on the server. The UI may display simpler
labels to tenants, but the underlying status and history must remain clear.

## MVP success measures

Measure during a pilot:
- Time from request submission to manager review
- Time from submission to first tenant-visible update
- Percentage of requests with an assignee
- Percentage of completed requests with completion notes
- Number of overdue or abandoned requests
- Whether pilot managers continue using the product

Do not treat these as established benchmarks; use them to learn whether the
product improves the workflow.

## Non-goals for MVP

- Rent collection, accounting, leasing, or tenant screening
- Vendor marketplace
- Automatic repair diagnosis or emergency classification
- Automatic legal notices or legal conclusions
- Native mobile applications
- Complex AI features
- Claims that an uploaded photo proves a repair is adequate
