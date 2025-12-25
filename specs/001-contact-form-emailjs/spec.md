# Feature Specification: Contact Form with EmailJS

**Feature Branch**: `001-contact-form-emailjs`  
**Created**: 2025-12-25  
**Status**: Draft  
**Input**: User description: "I'd like a contact form that sends emails using EmailJS"

## Clarifications

### Session 2025-12-25
- Q: Spam protection mechanism? → A: Honeypot Field (hidden input).
- Q: Success/Error feedback UI? → A: Inline Alert (above/below form).
- Q: Form behavior after successful send? → A: Clear All Fields.
- Q: Character limit display? → A: Static Placeholder (e.g., "Max 500 characters").
- Q: Contact info interaction? → A: Link & Manual Copy (mailto:/tel: links).

## User Scenarios & Testing

### User Story 1 - Send Contact Message (Priority: P1)

A visitor wants to send a message to the portfolio owner so they can discuss potential opportunities.

**Why this priority**: Core functionality of the contact section; without this, the feature has no value.

**Independent Test**: Fill out the form with valid data, click send, and verify the success message appears and the email is received (or EmailJS API is called).

**Acceptance Scenarios**:

1. **Given** a visitor is on the contact section, **When** they fill in valid Name, Email, Subject, and Message and click Send, **Then** the button shows a loading state.
2. **Given** the message is successfully sent via EmailJS, **When** the process completes, **Then** a success message "Message sent successfully!" is displayed and the form is cleared.

---

### User Story 2 - Form Validation (Priority: P2)

A visitor attempts to send a message but forgets a field or provides an invalid email.

**Why this priority**: Ensures data quality and prevents wasted API calls/bad user experience.

**Independent Test**: Try submitting empty fields or a malformed email; verify appropriate error messages appear and no API call is made.

**Acceptance Scenarios**:

1. **Given** the form has empty required fields (Name, Email, Message), **When** the user clicks Send, **Then** error messages are displayed below each invalid field and the form is NOT submitted.
2. **Given** the email field contains "invalid-email", **When** the user clicks Send, **Then** an "Invalid email address" error is shown.

---

### User Story 3 - Error Handling (Priority: P3)

A visitor sends a message but the EmailJS service is down or misconfigured.

**Why this priority**: Graceful failure handling prevents user frustration during outages.

**Independent Test**: Simulate an API error (e.g., network disconnect or mock failure response); verify the user sees a friendly error message.

**Acceptance Scenarios**:

1. **Given** the EmailJS service returns an error (500 or network fail), **When** the user submits a valid form, **Then** an error message "Failed to send message. Please try again later." is displayed.

---

## Requirements

### Functional Requirements

- **FR-001**: System MUST display a contact form with the following fields: Name (Text), Email (Email), Subject (Text, Optional), Message (Text Area).
- **FR-002**: System MUST validate that Name, Email, and Message are present before submission.
- **FR-003**: System MUST validate that the Email field contains a valid email format.
- **FR-004**: System MUST send the form data to a configured email address using the EmailJS SDK.
- **FR-005**: System MUST prevent multiple form submissions while a request is in progress (disable button).
- **FR-006**: System MUST provide visual feedback via an **Inline Alert** (success/error message displayed near the form) upon submission result.
- **FR-007**: System MUST clear **all** form fields immediately after a successful submission.
- **FR-008**: System MUST include a hidden "honeypot" field to detect bot submissions; if filled, the system MUST simulate success without making an API call.
- **FR-009**: System MUST display character limits for text fields using **static placeholders** (e.g., "Max 500 characters" in the Message area).
- **FR-010**: System MUST provide contact information (Email, Phone) as clickable **mailto:** and **tel:** links to facilitate manual copying or system default app usage.

### Key Entities

- **ContactMessage**: Represents the data submitted by the user.
    - Attributes: Name, Email, Subject, Message.
    - **Note**: Transient client-side entity.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Users receive visual feedback (success/error) within 3 seconds of clicking "Send" under normal network conditions.
- **SC-002**: 100% of valid form submissions trigger an EmailJS API call.
- **SC-003**: 100% of submissions with invalid email formats are blocked client-side.
