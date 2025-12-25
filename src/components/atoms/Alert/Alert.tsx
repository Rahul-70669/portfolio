import { HTMLAttributes, ReactNode } from 'react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children: ReactNode;
}

export const Alert = ({ variant = 'info', children, className = '', ...props }: AlertProps) => {
  return (
    <div role="alert" className={`alert alert-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};
