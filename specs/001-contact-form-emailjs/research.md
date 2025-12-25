# Research: Contact Form with EmailJS

**Feature**: Contact Form (email delivery)
**Status**: Researching
**Context**: Adding a functional contact form to a React 19 portfolio using EmailJS.

## Technology Choices

### Email Backend: EmailJS
**Decision**: Use EmailJS (Client-side integration).
**Rationale**:
- User requested explicitly.
- Serverless solution perfect for static portfolio sites (GitHub Pages).
- Free tier suffices for personal portfolio volume.
- Supports template management outside of code.

### Form State & Validation: React Hook Form + Yup
**Decision**: Use React Hook Form with Yup resolver.
**Rationale**:
- **React Hook Form**: Standard for modern React; handles uncontrolled inputs efficiently; easy integration with UI libraries.
- **Yup**: Schema-based validation allows separating validation logic from UI components. Robust API for string/email validation.

### UI Components: DaisyUI (Atomic Design)
**Decision**: Build atoms/molecules as per project Constitution.
**Components needed**:
- `Input` (Atom)
- `Textarea` (Atom)
- `Label` (Atom)
- `Button` (Atom)
- `Alert` (Atom) - for success/error messages
- `FormField` (Molecule) - wraps Label + Input + Error
- `ContactForm` (Organism) - assembles the form

## Implementation Details

### Environment Variables (Vite)
Vite exposes env vars prefixed with `VITE_`.
Required keys for EmailJS:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### TypeScript Integration
EmailJS SDK types are available.
React Hook Form provides strong typing for form values.

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
```

### UX Patterns
- **Loading State**: Disable button, show spinner (DaisyUI `loading` class).
- **Feedback**: Toast or inline Alert.
- **Reset**: Form reset after success.
