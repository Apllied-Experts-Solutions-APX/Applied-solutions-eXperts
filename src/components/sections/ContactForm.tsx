"use client";

import { useId, useState } from "react";
import { contactPage } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import {
  Field,
  FieldHint,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/Field";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  email: string;
  organisation: string;
  interest: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  organisation: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState<FormState | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted({ ...values });
  }

  if (submitted) {
    const interestLabel =
      contactPage.form.interests.find((item) => item.value === submitted.interest)
        ?.label ?? "Not specified";

    return (
      <div className={styles.success} role="status">
        <h2 className={styles.successTitle}>{contactPage.form.successTitle}</h2>
        <p className="text-muted">{contactPage.form.successBody}</p>
        <dl className={styles.summary}>
          <div>
            <dt className="text-caption">Name</dt>
            <dd>{submitted.name}</dd>
          </div>
          <div>
            <dt className="text-caption">Email</dt>
            <dd>{submitted.email}</dd>
          </div>
          {submitted.organisation ? (
            <div>
              <dt className="text-caption">Organisation</dt>
              <dd>{submitted.organisation}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-caption">Interest</dt>
            <dd>{interestLabel}</dd>
          </div>
          <div>
            <dt className="text-caption">Message</dt>
            <dd>{submitted.message}</dd>
          </div>
        </dl>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setSubmitted(null);
            setValues(empty);
            setErrors({});
          }}
        >
          Write another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <Field>
        <Label htmlFor={`${id}-name`} required>
          Name
        </Label>
        <Input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
        />
        {errors.name ? (
          <p id={`${id}-name-error`} className="field__error" role="alert">
            {errors.name}
          </p>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor={`${id}-email`} required>
          Email
        </Label>
        <Input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
        />
        {errors.email ? (
          <p id={`${id}-email-error`} className="field__error" role="alert">
            {errors.email}
          </p>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor={`${id}-org`}>Organisation</Label>
        <Input
          id={`${id}-org`}
          name="organisation"
          autoComplete="organization"
          value={values.organisation}
          onChange={(event) => update("organisation", event.target.value)}
        />
      </Field>

      <Field>
        <Label htmlFor={`${id}-interest`}>Interest</Label>
        <Select
          id={`${id}-interest`}
          name="interest"
          value={values.interest}
          onChange={(event) => update("interest", event.target.value)}
        >
          {contactPage.form.interests.map((item) => (
            <option key={item.value || "none"} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label htmlFor={`${id}-message`} required>
          Message
        </Label>
        <Textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${id}-message-error` : `${id}-message-hint`
          }
        />
        {errors.message ? (
          <p id={`${id}-message-error`} className="field__error" role="alert">
            {errors.message}
          </p>
        ) : (
          <FieldHint id={`${id}-message-hint`}>
            Include the context that would help APX understand the need.
          </FieldHint>
        )}
      </Field>

      <p className={`text-small text-muted ${styles.notice}`}>
        {contactPage.form.notice}
      </p>

      <div className="form-actions">
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}
