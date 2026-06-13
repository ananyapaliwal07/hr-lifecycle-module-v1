export const candidateStatusGroups = {
  NEW: "New",
  PROBATION: "In Probation",
  REJECTED: "Rejected",
  RECONSIDERATION: "Reconsideration",
  OFFER_APPROVED: "Offer Approved",
  OFFER_SENT: "Offer Sent",
  ACTIVE: "Active Intern",
  COMPLETED: "Completed",
  TERMINATED: "Terminated",
};

export const probationStatusGroups = {
  SUBMITTED: "Submitted",
  PROBATION_STARTED: "Probation Started",
  UNDER_REVIEW: "Under Review",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  EXTENDED: "Extended",
  RECONSIDERATION: "Reconsideration",
};

export const offerStatusGroups = {
  NOT_STARTED: "Not Started",
  PENDING_APPROVAL: "Pending Approval",
  APPROVED: "Approved",
  MID_GENERATED: "MID Generated",
  PDF_GENERATED: "PDF Generated",
  EMAIL_SENT: "Email Sent",
  CANCELLED: "Cancelled",
};

export const signedOfferStatusGroups = {
  NOT_SUBMITTED: "Not Submitted",
  SUBMITTED: "Submitted",
  VERIFIED: "Verified",
  REJECTED: "Rejected",
  RESUBMISSION_REQUIRED: "Resubmission Required",
};

export const matchStatusGroups = {
  NOT_CHECKED: "Not Checked",
  MATCHED: "Matched",
  MISMATCH: "Mismatch",
};

export function getStatusLabel(status, statusGroup = {}) {
  return statusGroup[status] || status || "Unknown";
}

export function isProbationActive(status) {
  return ["SUBMITTED", "PROBATION_STARTED", "UNDER_REVIEW", "EXTENDED", "RECONSIDERATION"].includes(status);
}

export function isOfferInProgress(status) {
  return ["PENDING_APPROVAL", "APPROVED", "MID_GENERATED", "PDF_GENERATED"].includes(status);
}

export function needsSignedOfferReview(status) {
  return ["SUBMITTED", "RESUBMISSION_REQUIRED"].includes(status);
}