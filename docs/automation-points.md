HR Lifecycle V1 Automation Points

Purpose

This document defines the automation points for the HR Lifecycle Module V1.

The module will first be built using React screens and dummy data. Later, automation can be connected using Supabase, Google Apps Script, n8n, Supabase Edge Functions, or other approved tools.

For V1, the main goal is to clearly identify where automation should happen in the workflow.

---

Automation Overview

The HR Lifecycle Module includes automation points across the following stages:

1. Candidate probation form submission
2. Probation start email
3. Probation review reminder
4. HR probation decision
5. MID generation
6. Offer letter PDF generation
7. Offer letter email sending
8. Active intern creation
9. Signed offer submission
10. Email/phone mismatch warning
11. Signed offer verification or rejection
12. Activity log creation
13. Notification tracking

---

Automation 1: Candidate Form Submission

Trigger

Candidate submits the public probation form.

Action

The system should:

- Create a candidate record
- Create first probation attempt
- Set candidate status to "PROBATION"
- Set probation status to "PROBATION_STARTED"
- Store created source as "candidate_form"
- Create an activity log entry

Tables Affected

- "hr_candidates"
- "hr_probation_attempts"
- "hr_activity_logs"

Current V1 Approach

For initial React prototype, this can be tested using dummy data.

Later, Supabase insert operation will create the candidate and probation attempt.

---

Automation 2: Probation Start Email

Trigger

Candidate probation attempt is created.

Action

Send probation start email to the candidate or recruiter/HR, depending on final HR process.

Tables Affected

- "hr_notifications"
- "hr_activity_logs"

Notification Type

"PROBATION_START_EMAIL"

Current V1 Approach

Email sending can be added later.

Possible tools:

- Google Apps Script
- n8n
- Supabase Edge Function
- Make.com

For V1 planning, Supabase should store email status and notification record.

---

Automation 3: Probation Review Reminder

Trigger

Probation end date is reached.

Default probation duration:

7 days

Action

Notify HR that the candidate probation is ready for review.

Tables Affected

- "hr_probation_attempts"
- "hr_notifications"
- "hr_activity_logs"

Notification Type

"PROBATION_REVIEW_REMINDER"

Current V1 Approach

This can be kept as a planned automation.

In React prototype, we can show candidates whose probation status is ready for review using dummy dates/statuses.

---

Automation 4: Probation Approval

Trigger

HR approves probation.

Action

The system should:

- Update probation attempt status to "APPROVED"
- Update candidate status as per workflow
- Store reviewed_by and reviewed_at
- Create activity log entry

Tables Affected

- "hr_probation_attempts"
- "hr_candidates"
- "hr_activity_logs"

Important Rule

Probation approval does not automatically mean offer is sent.

After probation approval, HR still approves the offer process.

---

Automation 5: Probation Rejection

Trigger

HR rejects probation.

Action

The system should:

- Update probation attempt status to "REJECTED"
- Update candidate status to "REJECTED"
- Store HR remarks
- Create activity log entry

Tables Affected

- "hr_probation_attempts"
- "hr_candidates"
- "hr_activity_logs"

Important Rule

Rejected candidates can be reconsidered later.

If reconsidered, create a new probation attempt instead of overwriting the old rejected attempt.

---

Automation 6: Probation Extension

Trigger

HR extends probation.

Action

The system should:

- Update probation status to "EXTENDED"
- Update probation end date
- Store extension reason
- Create activity log entry

Tables Affected

- "hr_probation_attempts"
- "hr_activity_logs"

Important Rule

Extension reason should be required.

---

Automation 7: Reconsideration Attempt

Trigger

HR decides to reconsider a rejected candidate.

Action

The system should:

- Create a new probation attempt
- Increase attempt number
- Keep old rejected attempt unchanged
- Update candidate status to "RECONSIDERATION" or "PROBATION"
- Create activity log entry

Tables Affected

- "hr_candidates"
- "hr_probation_attempts"
- "hr_activity_logs"

Important Rule

History should not be deleted.

---

Automation 8: Offer Approval

Trigger

HR approves offer generation after probation approval.

Action

The system should:

- Create or update offer letter record
- Set offer status to "APPROVED"
- Store approved_by and approved_at
- Prepare MID generation step
- Create activity log entry

Tables Affected

- "hr_offer_letters"
- "hr_activity_logs"

Important Rule

MID should be generated only after HR offer approval.

---

Automation 9: MID Generation

Trigger

Offer is approved by HR.

Action

Generate MID using final approved format:

ROLE_CODE / NAME_CODE / SERIAL

Example

AU/AS/001
AU/AS/002
HR/KA/001

Tables Affected

- "hr_mid_registry"
- "hr_offer_letters"
- "hr_activity_logs"

MID Logic

- "role_code" comes from candidate role.
- "name_code" comes from candidate name.
- If candidate has first and last name, use initials.
- If candidate has a single name, use first two letters.
- Serial increases only for the same "role_code + name_code" combination.

Important Rule

MID should not be regenerated once already assigned unless an authorized correction process is defined later.

---

Automation 10: Offer Letter PDF Generation

Trigger

MID is generated and offer record is ready.

Action

Generate offer letter PDF using candidate and offer details.

Data Needed

- Candidate name
- Email
- Phone
- Address
- Role
- MID
- Start date
- End date
- Duration
- Weekly hours
- Internship type
- Acceptance/signing instructions

Tables Affected

- "hr_offer_letters"
- "hr_notifications"
- "hr_activity_logs"

Storage

For V1:

Google Drive

Supabase will store:

pdf_url
offer_status
email_sent_at

Current V1 Tool Option

Best practical option:

Supabase data
↓
Google Apps Script / n8n
↓
Google Docs template
↓
PDF generated
↓
Google Drive link stored

---

Automation 11: Offer Letter Email

Trigger

Offer letter PDF is generated.

Action

Send offer email to candidate with PDF/link/instructions.

Tables Affected

- "hr_offer_letters"
- "hr_notifications"
- "hr_activity_logs"

Notification Type

"OFFER_LETTER_EMAIL"

Important Rule

Candidate becomes active after offer email is sent.

---

Automation 12: Active Intern Creation

Trigger

Offer letter email is sent.

Action

The system should:

- Create active intern record
- Set candidate status to "ACTIVE"
- Set active intern status to "ACTIVE"
- Store active_start_date
- Create activity log entry

Tables Affected

- "hr_candidates"
- "hr_active_interns"
- "hr_activity_logs"

Important Rule

Signed offer verification does not block active status.

---

Automation 13: Signed Offer Submission

Trigger

Candidate submits signed offer.

Action

The system should:

- Create signed offer record
- Store submitted email
- Store submitted phone
- Store file link
- Store MID
- Set signed offer status to "SUBMITTED"
- Compare submitted email/phone with registered email/phone
- Create activity log entry

Tables Affected

- "hr_signed_offers"
- "hr_activity_logs"

Current Storage

For V1, signed offer file can be stored in:

Google Drive

Supabase stores:

file_url
status
submitted_at
match status

---

Automation 14: Email/Phone Mismatch Warning

Trigger

Signed offer submitted with email or phone different from registered candidate details.

Action

The system should:

- Set email_match_status or phone_match_status to "MISMATCH"
- Show warning in HR verification screen
- Create activity log event

Tables Affected

- "hr_signed_offers"
- "hr_activity_logs"

Important Rule

Mismatch should not block active intern status.

HR should manually verify or reject the signed offer.

---

Automation 15: Signed Offer Verification

Trigger

HR verifies signed offer.

Action

The system should:

- Update signed offer status to "VERIFIED"
- Store verified_by
- Store verified_at
- Create activity log entry

Tables Affected

- "hr_signed_offers"
- "hr_activity_logs"

Important Rule

Signed offer verification will matter later for certificate/LOR eligibility.

---

Automation 16: Signed Offer Rejection

Trigger

HR rejects signed offer.

Action

The system should:

- Update signed offer status to "REJECTED"
- Mark resubmission_required as true
- Store rejection reason
- Create activity log entry
- Optionally notify candidate to resubmit

Tables Affected

- "hr_signed_offers"
- "hr_notifications"
- "hr_activity_logs"

Notification Type

"SIGNED_OFFER_REJECTED"

---

Automation 17: Activity Log Creation

Trigger

Any major workflow action.

Action

Create activity log entry.

Events to Track

- Candidate form submitted
- Probation started
- Probation extended
- Probation approved
- Probation rejected
- Reconsideration created
- Offer approved
- MID generated
- Offer PDF generated
- Offer email sent
- Intern activated
- Signed offer submitted
- Signed offer email/phone mismatch
- Signed offer verified
- Signed offer rejected

Tables Affected

- "hr_activity_logs"

Important Rule

Activity logs should help HR review the full lifecycle history.

---

Automation 18: Notification Tracking

Trigger

Whenever email/system notification needs to be sent.

Action

Create or update notification record.

Notification Status Values

- PENDING
- SENT
- FAILED

Tables Affected

- "hr_notifications"

Important Rule

Even if actual email automation is added later, notification records should be planned from V1.

---

Recommended V1 Automation Strategy

For the first prototype:

Phase 1

Use dummy data and manual status updates in React screens.

Phase 2

Connect Supabase tables.

Phase 3

Add automation for:

- MID generation
- Activity log creation
- Status changes

Phase 4

Add external automation for:

- PDF generation
- Google Drive storage
- Email sending

---

Suggested Free/Practical Automation Stack

For V1, the most practical free/low-cost stack is:

React frontend
↓
Supabase database
↓
Google Apps Script or n8n
↓
Google Docs template
↓
Google Drive PDF
↓
Gmail email
↓
Supabase status update

This keeps the system automation-friendly and avoids building a heavy backend in V1.

---

Notes for V1

- Do not implement every automation on Day 1.
- First complete the workflow with dummy data.
- Then connect Supabase.
- Then add PDF/email automation.
- Signed offer mismatch should be warning-based, not blocking.
- Signed offer does not affect active intern status.
- Candidate login and team lead login can be added later.
- Supabase RLS can be implemented after roles and permissions are finalized.
