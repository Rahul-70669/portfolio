# Quickstart: Contact Form Feature

## Prerequisites

- Node.js 18+
- EmailJS Account (Free tier)

## Environment Setup

1. Create a `.env.local` file in the project root.
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## EmailJS Dashboard Setup

1. **Service**: Add a "Gmail" (or other) service. Copy `Service ID`.
2. **Template**: Create a new template.
   - Subject: `New Message from Portfolio: {{subject}}`
   - Content:
     ```text
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Copy `Template ID`.
3. **Account**: Go to Account > General to find your `Public Key`.

## Running Locally

```bash
npm install
npm run dev
```
Navigate to the contact section to test.
