export function isValidRequestStatus(status: string): boolean {
  const valid = ["NEW", "UNDER_REVIEW", "ASSIGNED", "SCHEDULED", "IN_PROGRESS", "WAITING", "COMPLETED", "CLOSED"];
  return valid.includes(status);
}
