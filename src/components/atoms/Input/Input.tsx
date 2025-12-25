import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`input input-bordered w-full ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';