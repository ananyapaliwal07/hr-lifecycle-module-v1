# HR Lifecycle V1 Status Values

## Purpose

This document defines the initial status values used in the HR Lifecycle Module V1. These statuses will be used across dummy data, React screens, Supabase tables, and workflow testing.

---

## Candidate Status

Candidate status represents the overall lifecycle stage of a candidate/intern.

| Status | Meaning |
|---|---|
| NEW | Candidate record has been created but probation has not started yet |
| PROBATION | Candidate is currently in probation |
| REJECTED | Candidate was rejected during probation review |
| RECONSIDERATION | Candidate is being reconsidered through a new probation attempt |
| OFFER_APPROVED | HR has approved the offer process |
| OFFER_SENT | Offer letter has been sent to the candidate |
| ACTIVE | Candidate has become an active intern |
| COMPLETED | Internship has been completed |
| TERMINATED | Internship was ended before completion |

---

## Probation Status

Probation status tracks each probation attempt separately.

| Status | Meaning |
|---|---|
| SUBMITTED | Candidate submitted the probation form |
| PROBATION_STARTED | Probation has officially started |
| UNDER_REVIEW | Probation is ready for HR review |
| APPROVED | Candidate passed probation |
| REJECTED | Candidate did not pass probation |
| EXTENDED | Probation period has been extended |
| RECONSIDERATION | New attempt created after rejection |

---

## Offer Letter Status

Offer letter status tracks the offer approval, MID generation, PDF generation, and email flow.

| Status | Meaning |
|---|---|
| NOT_STARTED | Offer process has not started |
| PENDING_APPROVAL | Offer is waiting for HR approval |
| APPROVED | HR has approved offer generation |
| MID_GENERATED | MID has been generated |
| PDF_GENERATED | Offer letter PDF has been generated |
| EMAIL_SENT | Offer email has been sent |
| CANCELLED | Offer process was cancelled |

---

## Active Intern Status

Active intern status starts after offer letter is sent.

| Status | Meaning |
|---|---|
| ACTIVE | Intern is currently active |
| COMPLETED | Internship has been completed |
| TERMINATED | Internship ended before completion |

---

## Signed Offer Status

Signed offer is handled separately from active intern status.

| Status | Meaning |
|---|---|
| NOT_SUBMITTED | Signed offer has not been submitted yet |
| SUBMITTED | Candidate submitted signed offer |
| VERIFIED | HR verified the signed offer |
| REJECTED | HR rejected the signed offer |
| RESUBMISSION_REQUIRED | Candidate needs to resubmit signed offer |

---

## Email Match Status

This is used when the signed offer is submitted.

| Status | Meaning |
|---|---|
| NOT_CHECKED | Email/phone match has not been checked |
| MATCHED | Submitted details match existing candidate record |
| MISMATCH | Submitted details do not fully match existing candidate record |

Important rule:

- Email or phone mismatch should not block active intern status.
- Mismatch should be shown as a warning in HR view and activity logs.
- HR can still verify or reject the signed offer manually.

---

## Activity Log Event Types

These event types will be used in the activity/audit log.

| Event Type | Meaning |
|---|---|
| CANDIDATE_FORM_SUBMITTED | Candidate submitted probation form |
| PROBATION_STARTED | Probation started |
| PROBATION_EXTENDED | Probation was extended |
| PROBATION_APPROVED | HR approved probation |
| PROBATION_REJECTED | HR rejected probation |
| RECONSIDERATION_CREATED | New probation attempt created |
| OFFER_APPROVED | HR approved offer |
| MID_GENERATED | MID generated |
| OFFER_PDF_GENERATED | Offer PDF generated |
| OFFER_EMAIL_SENT | Offer email sent |
| INTERN_ACTIVATED | Candidate became active intern |
| SIGNED_OFFER_SUBMITTED | Signed offer submitted |
| SIGNED_OFFER_EMAIL_MISMATCH | Signed offer submitted with email/phone mismatch |
| SIGNED_OFFER_VERIFIED | HR verified signed offer |
| SIGNED_OFFER_REJECTED | HR rejected signed offer |

---

## Notes for V1

- Candidate form will be public in V1.
- HR login will be required for review and approval actions.
- Candidate login and Team Lead login can be added in later phases.
- Supabase Row Level Security can be designed later after roles and permissions are finalized.
