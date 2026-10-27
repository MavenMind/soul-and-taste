"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

const fieldClass =
  "min-h-12 rounded border border-field bg-white px-3.5 text-base font-normal text-foreground aria-[invalid=true]:border-[#b42318]";

function FieldError({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <span id={id} className="text-sm font-normal text-[#b42318]">
      {text}
    </span>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const errors = state.fieldErrors ?? {};
  const values = state.values;

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-md border border-line bg-white p-8"
      >
        <p className="font-display text-2xl font-semibold tracking-[-0.015em]">
          Request sent.
        </p>
        <p className="text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot for bots, hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium">
        Name
        <input
          type="text"
          name="name"
          defaultValue={values?.name}
          autoComplete="name"
          placeholder="Your name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        <FieldError id="name-error" text={errors.name} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Email
        <input
          type="email"
          name="email"
          defaultValue={values?.email}
          autoComplete="email"
          placeholder="you@email.com"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        <FieldError id="email-error" text={errors.email} />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Travel dates
        <input
          type="text"
          name="dates"
          defaultValue={values?.dates}
          placeholder="e.g. 12–16 May"
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        What are you looking for?
        <textarea
          name="message"
          defaultValue={values?.message}
          rows={4}
          placeholder="Surf, yoga, food – or all three"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y py-3`}
        />
        <FieldError id="message-error" text={errors.message} />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-[#b42318]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="min-h-[52px] cursor-pointer self-start rounded-full bg-accent px-8 font-medium text-white transition-colors hover:bg-accent-hover active:bg-accent-active disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
