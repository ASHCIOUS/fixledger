# Data Model

All organization-owned records must be scoped to an organization. Enforce
authorization in server-side queries and, where configured, database
policies.

## Entities

### Organization
Represents a property-management company or independent manager's account.

Fields:
- `id`
- `name`
- `created_at`

### User
Represents an authenticated person.

Fields:
- `id`
- `email`
- `display_name`
- `created_at`

### OrganizationMembership
Connects a user to an organization and defines their role.

Fields:
- `id`
- `organization_id`
- `user_id`
- `role` — `OWNER`, `MANAGER`, or `STAFF`
- `created_at`

### Property
A managed property.

Fields:
- `id`
- `organization_id`
- `name`
- `address` (limit collection to what the product needs)
- `created_at`

### Unit
A unit within a property.

Fields:
- `id`
- `organization_id`
- `property_id`
- `label`
- `created_at`

### TenantUnitMembership
Connects a tenant user to an authorized unit.

Fields:
- `id`
- `organization_id`
- `unit_id`
- `user_id`
- `created_at`

### Vendor
A vendor record belonging to an organization.

Fields:
- `id`
- `organization_id`
- `name`
- `email` (optional)
- `created_at`

### VendorUser
Connects an authenticated user to a vendor record.

Fields:
- `id`
- `organization_id`
- `vendor_id`
- `user_id`
- `created_at`

### MaintenanceRequest
The main repair record.

Fields:
- `id`
- `organization_id`
- `property_id`
- `unit_id`
- `created_by_user_id`
- `category`
- `description`
- `status`
- `created_at`
- `updated_at`
- `completed_at` (nullable)
- `closed_at` (nullable)

### RequestAssignment
Records the current and historical assignees.

Fields:
- `id`
- `organization_id`
- `request_id`
- `assignee_user_id` (nullable)
- `vendor_id` (nullable)
- `assigned_by_user_id`
- `assigned_at`
- `unassigned_at` (nullable)

### RequestUpdate
A dated update attached to a request.

Fields:
- `id`
- `organization_id`
- `request_id`
- `author_user_id`
- `body`
- `visibility` — `INTERNAL` or `TENANT_VISIBLE`
- `created_at`

### Attachment
Metadata for a private file in object storage.

Fields:
- `id`
- `organization_id`
- `request_id`
- `uploaded_by_user_id`
- `storage_key`
- `original_filename`
- `content_type`
- `size_bytes`
- `created_at`

### AuditEvent
An append-only record of an important action.

Fields:
- `id`
- `organization_id`
- `actor_user_id`
- `entity_type`
- `entity_id`
- `action`
- `created_at`
- `details` (minimal, non-secret metadata)

## Data integrity rules

- Include `organization_id` on organization-owned records.
- Check that a request's property and unit belong to the same organization.
- Check that the request's unit belongs to the request's property.
- Do not trust organization or user identifiers sent by the client; derive
  authorized identity and scope on the server.
- Preserve historical assignment and status events rather than silently
  overwriting the entire history.
- Index common filters such as organization, status, property, unit, and
  created date as needed.
