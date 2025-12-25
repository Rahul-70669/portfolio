---
description: "Task list for Contact Form with EmailJS feature implementation"
---

# Tasks: Contact Form with EmailJS

**Input**: Design documents from `/specs/001-contact-form-emailjs/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are primarily manual/integration based on user scenarios. Unit tests for components using Storybook.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Install dependencies (EmailJS, React Hook Form, Yup) via npm
- [ ] T002 Create environment configuration file `.env.local` with placeholders
- [ ] T003 Create directory structure for atomic components in `src/components/atoms`, `src/components/molecules`, `src/components/organisms`
- [ ] T004 Create `src/services/emailjs.ts` service skeleton

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create data model interface `ContactFormData` in `src/data/contact-form-schema.ts`
- [ ] T006 Implement Yup validation schema `contactFormSchema` in `src/data/contact-form-schema.ts`
- [ ] T007 [P] Create `Input` atom component in `src/components/atoms/Input/Input.tsx`
- [ ] T008 [P] Create `Textarea` atom component in `src/components/atoms/Textarea/Textarea.tsx`
- [ ] T009 [P] Create `Label` atom component in `src/components/atoms/Label/Label.tsx`
- [ ] T010 [P] Create `Button` atom component in `src/components/atoms/Button/Button.tsx` (if not exists)
- [ ] T011 [P] Create `Alert` atom component in `src/components/atoms/Alert/Alert.tsx`
- [ ] T012 Create `FormField` molecule in `src/components/molecules/FormField/FormField.tsx` combining Label, Input/Textarea, and Error display

**Checkpoint**: Foundation ready - user story implementation can now begin

## Phase 3: User Story 1 - Send Contact Message (Priority: P1) 🎯 MVP

**Goal**: A visitor can fill out the form and successfully send an email.

**Independent Test**: Fill valid data -> Click Send -> Verify EmailJS API call -> Verify Success Alert -> Verify Form Clear.

### Implementation for User Story 1

- [ ] T013 [US1] Create `ContactForm` organism skeleton in `src/components/organisms/ContactForm/ContactForm.tsx` using `useForm`
- [ ] T014 [US1] Implement `sendEmail` function in `src/services/emailjs.ts` using `emailjs.send`
- [ ] T015 [US1] Connect `ContactForm` submit handler to `sendEmail` service
- [ ] T016 [US1] Implement loading state in `ContactForm` (disable button, show spinner)
- [ ] T017 [US1] Implement success state handling (show Inline Alert, reset form)
- [ ] T018 [US1] Add hidden "honeypot" field to `ContactForm` logic (silent return if filled)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 2 - Form Validation (Priority: P2)

**Goal**: Prevent invalid submissions and provide immediate feedback.

**Independent Test**: Submit empty/invalid -> Verify Error Messages -> Verify No API Call.

### Implementation for User Story 2

- [ ] T019 [US2] Integrate `yupResolver` with `useForm` in `src/components/organisms/ContactForm/ContactForm.tsx`
- [ ] T020 [US2] Connect `FormField` components to `formState.errors` to display validation messages
- [ ] T021 [US2] Verify specific error messages for Name (required), Email (format), Message (length)
- [ ] T022 [US2] Add static placeholder text for character limits (e.g., "Max 500 chars") in `Textarea` props

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

## Phase 5: User Story 3 - Error Handling (Priority: P3)

**Goal**: Handle API failures gracefully.

**Independent Test**: Mock API failure -> Submit valid form -> Verify Error Alert -> Form data retained.

### Implementation for User Story 3

- [ ] T023 [US3] Add try/catch block in `ContactForm` submit handler for API errors
- [ ] T024 [US3] Implement error state handling (display Error Alert with friendly message)
- [ ] T025 [US3] Ensure form data is NOT cleared on API error (allow retry)

**Checkpoint**: All user stories should now be independently functional

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T026 Add `mailto:` and `tel:` links section below/beside the form
- [ ] T027 Add Storybook stories for `ContactForm` (Success, Error, Loading states)
- [ ] T028 Optimize `ContactForm` responsiveness (mobile/desktop layout)
- [ ] T029 Documentation update in `README.md` regarding EmailJS setup

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup. Blocks all US.
- **User Stories (Phase 3+)**: Depend on Foundational.
  - US1 (Send) is MVP.
  - US2 (Validation) enhances US1.
  - US3 (Errors) enhances US1.
- **Polish (Final Phase)**: Depends on US1 completion.

### Parallel Opportunities

- T007, T008, T009, T010, T011 (Atomic components) can be built in parallel.
- US2 and US3 logic can theoretically be added in parallel to US1 if `ContactForm` file access is managed, but sequential is safer for a single file component.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup & Foundation (Atoms, Molecules, Schema).
2. Build `ContactForm` with basic `react-hook-form` (no yup yet, simple validation).
3. Connect `emailjs` service.
4. Verify success flow.

### Incremental Delivery

1. **MVP**: Functional form sending emails (US1).
2. **Robustness**: Add strict validation & UI feedback (US2).
3. **Resilience**: Handle network errors gracefully (US3).
4. **Polish**: Add contact links and styling refinements.
