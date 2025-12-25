import { ReactNode } from 'react';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children: ReactNode;
  className?: string;
}

export const Alert = ({ variant = 'info', children, className = '' }: AlertProps) => {
  return (
    <div role="alert" className={`alert alert-${variant} ${className}`}>
      {children}
    </div>
  );
};