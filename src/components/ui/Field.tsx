import { cx } from "@/lib/utils";
import styles from "./Field.module.css";

type FieldProps = {
  children: React.ReactNode;
  className?: string;
};

export function Field({ children, className }: FieldProps) {
  return <div className={cx("field", className)}>{children}</div>;
}

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function Label({
  htmlFor,
  children,
  required = false,
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx("label", required && "label--required", className)}
    >
      {children}
    </label>
  );
}

type HintProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function FieldHint({ id, children, className }: HintProps) {
  return (
    <p id={id} className={cx("field__hint", className)}>
      {children}
    </p>
  );
}

type ErrorProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function FieldError({ id, children, className }: ErrorProps) {
  return (
    <p id={id} className={cx("field__error", className)} role="alert">
      {children}
    </p>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, id, ...rest }: InputProps) {
  return (
    <input
      id={id}
      className={cx("input", styles.control, className)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({ className, invalid, id, ...rest }: TextareaProps) {
  return (
    <textarea
      id={id}
      className={cx("textarea", styles.control, className)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  children: React.ReactNode;
};

export function Select({
  className,
  invalid,
  id,
  children,
  ...rest
}: SelectProps) {
  return (
    <select
      id={id}
      className={cx("select", styles.control, className)}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {children}
    </select>
  );
}
