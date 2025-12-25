# Data Model: Contact Form

## Entities

### ContactFormData
Represents the user input from the contact form.

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| name | string | Yes | Min 2 chars | User's full name |
| email | string | Yes | Valid email format | User's email address |
| subject | string | No | Max 100 chars | Purpose of message |
| message | string | Yes | Min 10 chars | The actual message content |

## Validation Schema (Yup)

```typescript
const contactFormSchema = yup.object({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  subject: yup.string()
    .optional()
    .max(100, 'Subject must be less than 100 characters'),
  message: yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});
```
