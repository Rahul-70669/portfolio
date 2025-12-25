import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = ({ children, className = '', ...props }: LabelProps) => {
  return (
    <label className={`label ${className}`} {...props}>
      <span className="label-text">{children}</span>
    </label>
  );
};
