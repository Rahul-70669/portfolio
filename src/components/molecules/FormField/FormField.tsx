import { ReactNode } from 'react';
import { Label } from '../../atoms/Label/Label';

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
  htmlFor?: string;
}

export const FormField = ({ label, error, children, htmlFor }: FormFieldProps) => {
  return (
    <div className="form-control w-full">
      <Label htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
      {error && (
        <Label className="text-error">
          <span className="label-text-alt">{error}</span>
        </Label>
      )}
    </div>
  );
};
