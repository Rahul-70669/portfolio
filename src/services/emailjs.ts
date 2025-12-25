import emailjs from '@emailjs/browser';
import { ContactFormData } from '../data/contact-form-schema';

export const sendEmail = async (data: ContactFormData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration missing');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject || 'No Subject',
    message: data.message,
    to_name: 'Rahul', // or whatever owner name is appropriate
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};