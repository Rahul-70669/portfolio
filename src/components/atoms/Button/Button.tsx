import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  loading?: boolean;
  children: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  loading = false, 
  children, 
  className = '', 
  disabled, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} ${loading ? 'btn-disabled' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};