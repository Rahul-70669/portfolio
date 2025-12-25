import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`textarea textarea-bordered w-full ${error ? 'textarea-error' : ''} ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';