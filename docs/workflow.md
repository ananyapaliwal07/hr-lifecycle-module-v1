# HR Lifecycle V1 Workflow

## Objective

This module manages the HR lifecycle from candidate probation submission to active intern status and signed offer verification.

## V1 Workflow

1. Candidate submits the public probation form.
2. Candidate record is created in the HR module.
3. First probation attempt is created.
4. Probation starts with default duration of 7 days.
5. Probation start email is triggered.
6. HR reviews probation after the probation period.
7. HR can approve, reject, or extend probation.
8. If rejected, the candidate can be reconsidered through a new probation attempt.
9. If approved, HR approves the offer letter.
10. MID is generated using ROLE_CODE / NAME_CODE / SERIAL format.
11. Offer letter PDF is generated.
12. Offer letter email is sent to the candidate.
13. Candidate becomes an active intern after offer letter is sent.
14. Candidate submits signed offer letter.
15. HR verifies or rejects the signed offer.
16. Signed offer verification does not affect active intern status.
17. Signed offer status will matter later for certificate/LOR eligibility.

## Important Business Rules

- Candidate form is public for V1.
- HR login is required for review and approval.
- Candidate becomes active after offer letter is sent.
- Signed offer is a separate process and does not block active status.
- Rejected candidates can have a new probation attempt.
- MID is generated only after HR offer approval.
- Offer letter PDF will be stored in Google Drive for V1.
- Supabase will store data, status, and file links.
