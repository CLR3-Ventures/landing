"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Static-site contact form. On submit it composes an email to hello@clr3.org
 * in the visitor's mail client. No third-party form service, no scripts.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project enquiry from ${company || name}`;
    const body = [
      message,
      "",
      "--",
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  const field =
    "h-12 w-full border border-band-line bg-transparent px-4 text-[15px] text-band-foreground placeholder:text-band-muted/70 transition-colors focus:border-band-foreground focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="cf-name" className="text-sm font-medium">
            Name
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required className={field} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="cf-email" className="text-sm font-medium">
            Work email
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="cf-company" className="text-sm font-medium">
          Company <span className="font-normal text-band-muted">(optional)</span>
        </label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" className={field} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="cf-message" className="text-sm font-medium">
          What are you building?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="What the system does, where it hurts, and what a good outcome looks like."
          className={`${field} h-auto resize-y py-3 leading-relaxed`}
        />
      </div>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 bg-band-foreground px-6 text-[15px] font-medium text-band transition-colors hover:bg-band-muted"
        >
          Send message
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-sm text-band-muted" aria-live="polite">
          {submitted
            ? "Opening your email client. If nothing happened, write to us directly."
            : "Opens in your email client."}
        </p>
      </div>
    </form>
  );
}
