import { useForm } from 'react-hook-form';
import { ContactFormData } from '../../../data/contact-form-schema';
import { FormField } from '../../molecules/FormField/FormField';
import { Input } from '../../atoms/Input/Input';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Button } from '../../atoms/Button/Button';
import { sendEmail } from '../../../services/emailjs';

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField label="Name" error={errors.name?.message} htmlFor="name">
          <Input 
            id="name" 
            {...register('name')} 
            placeholder="Your Name"
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message} htmlFor="email">
          <Input 
            id="email" 
            type="email" 
            {...register('email')} 
            placeholder="your.email@example.com"
          />
        </FormField>

        <FormField label="Subject" error={errors.subject?.message} htmlFor="subject">
          <Input 
            id="subject" 
            {...register('subject')} 
            placeholder="What is this regarding?"
          />
        </FormField>

        <FormField label="Message" error={errors.message?.message} htmlFor="message">
          <Textarea 
            id="message" 
            {...register('message')} 
            placeholder="Your message here..."
            rows={4}
          />
        </FormField>

        <Button type="submit" loading={isSubmitting} className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};
