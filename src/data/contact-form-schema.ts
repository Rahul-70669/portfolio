import * as yup from 'yup';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const contactFormSchema = yup.object({
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
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters'),
});
