import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormData, contactFormSchema } from '../../../data/contact-form-schema';
import { FormField } from '../../molecules/FormField/FormField';
import { Input } from '../../atoms/Input/Input';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Button } from '../../atoms/Button/Button';
import { Alert } from '../../atoms/Alert/Alert';
import { sendEmail } from '../../../services/emailjs';

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema)
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honey, setHoney] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitSuccess(false);
    setSubmitError(null);

    // Honeypot check
    if (honey) {
      // Simulate success for bots
      setSubmitSuccess(true);
      reset();
      return;
    }

    try {
      await sendEmail(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {submitSuccess && (
          <Alert variant="success">
            <span>Message sent successfully!</span>
          </Alert>
        )}

        {submitError && (
          <Alert variant="error">
            <span>{submitError}</span>
          </Alert>
        )}

        {/* Honeypot field - hidden from users */}
        <input 
          type="text" 
          name="website" 
          className="hidden" 
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          tabIndex={-1} 
          autoComplete="off"
        />

        <FormField label="Name" error={errors.name?.message} htmlFor="name">
          <Input 
            id="name" 
            {...register('name')} 
            error={errors.name?.message} 
            placeholder="Your Name"
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message} htmlFor="email">
          <Input 
            id="email" 
            type="email" 
            {...register('email')} 
            error={errors.email?.message} 
            placeholder="your.email@example.com"
          />
        </FormField>

        <FormField label="Subject" error={errors.subject?.message} htmlFor="subject">
          <Input 
            id="subject" 
            {...register('subject')} 
            error={errors.subject?.message} 
            placeholder="What is this regarding?"
          />
        </FormField>

        <FormField label="Message" error={errors.message?.message} htmlFor="message">
          <Textarea 
            id="message" 
            {...register('message')} 
            error={errors.message?.message} 
            placeholder="Your message here... (Max 500 chars)"
            rows={4}
          />
        </FormField>

        <Button type="submit" loading={isSubmitting} className="w-full">
          Send Message
        </Button>
      </form>

      <div className="divider my-6">OR</div>
      
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm opacity-70">Reach out directly:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:arjun.sharma@example.com" className="link link-primary hover:text-primary-focus transition-colors">
            arjun.sharma@example.com
          </a>
          <span className="opacity-50">•</span>
          <a href="tel:+919876543210" className="link link-primary hover:text-primary-focus transition-colors">
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
};