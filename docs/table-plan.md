# HR Lifecycle V1 Table Plan

## Purpose

This document defines the initial table structure required for the HR Lifecycle Module V1.  
The module will first work with dummy data and later connect with the final Supabase master database.

---

## Master Tables Required From Common Database

The HR Lifecycle module will depend on common/master tables once the final master Supabase database is ready.

Expected master tables:

| Master Table | Purpose in HR Module |
|---|---|
| users / profiles | HR, Team Lead, Project Manager, POD Lead, Admin users |
| roles | Defines user role/designation |
| permissions | Defines what actions each role can perform |
| departments | Candidate/intern department mapping |
| teams | Intern team assignment |
| projects | Project assignment after activation |
| resources / media | File references, documents, uploaded resources |

Until the master database is finalized, dummy master data will be used for testing.

---

# HR Module Tables

## 1. hr_candidates

Purpose: Stores candidate/intern personal and application-level information.

Fields:

| Field | Purpose |
|---|---|
| id | Unique candidate ID |
| full_name | Candidate full name |
| email | Candidate registered email |
| phone | Candidate phone number |
| address | Candidate address |
| role_applied_for | Internship role applied for |
| role_code | Short role code used for MID |
| department_id | Linked department from master table |
| team_id | Linked team from master table |
| project_id | Linked project from master table |
| created_source | Source of candidate creation |
| current_status | Current lifecycle status |
| created_at | Record creation date |
| updated_at | Last update date |

created_source values:

- candidate_form
- hr_manual
- stage0_import

---

## 2. hr_probation_attempts

Purpose: Stores probation cycles. One candidate can have multiple probation attempts.

Fields:

| Field | Purpose |
|---|---|
| id | Unique probation attempt ID |
| candidate_id | Linked candidate |
| attempt_no | Probation attempt number |
| probation_start_date | Probation start date |
| probation_end_date | Probation end date |
| status | Probation status |
| reviewed_by | HR user who reviewed |
| reviewed_at | Review date/time |
| hr_remarks | HR review remarks |
| extension_reason | Reason if probation is extended |
| created_at | Record creation date |
| updated_at | Last update date |

Important rule:

- If a rejected candidate is reconsidered, create a new probation attempt instead of overwriting the old record.

---

## 3. hr_offer_letters

Purpose: Stores offer approval, MID, PDF, and email status.

Fields:

| Field | Purpose |
|---|---|
| id | Unique offer letter ID |
| candidate_id | Linked candidate |
| probation_attempt_id | Linked probation attempt |
| mid | Generated MID |
| role | Role mentioned in offer letter |
| role_code | Role code used for MID |
| start_date | Internship start date |
| end_date | Internship end date |
| duration_months | Internship duration |
| weekly_hours | Weekly time commitment |
| offer_status | Current offer status |
| approved_by | HR user who approved offer |
| approved_at | Offer approval date/time |
| pdf_url | Google Drive PDF link |
| email_sent_at | Offer email sent date/time |
| created_at | Record creation date |
| updated_at | Last update date |

Important rule:

- Candidate becomes active intern after offer email is sent.

---

## 4. hr_mid_registry

Purpose: Maintains MID generation history and prevents duplicate MID serials.

Fields:

| Field | Purpose |
|---|---|
| id | Unique MID registry ID |
| candidate_id | Linked candidate |
| role_code | Role code |
| name_code | Candidate name code |
| serial_no | Serial number |
| mid | Final generated MID |
| generated_for_offer_id | Linked offer letter |
| generated_at | MID generation date/time |

MID format:

```text
ROLE_CODE / NAME_CODE / SERIAL
