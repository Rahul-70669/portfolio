import emailjs from '@emailjs/browser';

// Placeholder interface - to be replaced by actual data model later
export interface ContactFormData {
  [key: string]: unknown;
}

export const sendEmail = async (data: ContactFormData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration missing');
  }

  // Basic implementation wrapper
  // return emailjs.send(serviceId, templateId, data, publicKey);
  throw new Error('Not implemented');
};
