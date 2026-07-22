"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services, site } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Hero lead form. Registers as its own Netlify form ("quote-quick")
 * so hero leads are distinguishable from full contact-page submissions.
 */
export default function QuickQuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-lift" role="status">
        <CheckCircle2 size={40} className="mx-auto text-green-600" aria-hidden />
        <h3 className="display-xl mt-4 text-2xl">Request received</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-steel">
          We&apos;ll call you within one business day to schedule your free estimate. Need us sooner?{" "}
          <a href={site.phoneHref} className="font-semibold text-iron underline">Call {site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote-quick"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
      className="overflow-hidden rounded-lg bg-white shadow-lift"
      aria-label="Request a free estimate"
    >
      <input type="hidden" name="form-name" value="quote-quick" />
      <p className="hidden" aria-hidden="true">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="bg-iron px-6 py-4 text-center">
        <p className="font-display text-[19px] font-bold uppercase tracking-[0.04em] text-white">Request a Free Estimate</p>
        <p className="mt-0.5 text-[13.5px] text-white/70">No obligation · Response within one business day</p>
      </div>

      <div className="grid gap-3.5 p-6">
        <div>
          <label htmlFor="qq-name" className="field-label">Full name *</label>
          <input id="qq-name" name="name" required autoComplete="name" className="field" placeholder="Jordan Smith" />
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <div>
            <label htmlFor="qq-phone" className="field-label">Phone *</label>
            <input id="qq-phone" name="phone" type="tel" required autoComplete="tel" className="field" placeholder="(214) 555-0100" />
          </div>
          <div>
            <label htmlFor="qq-zip" className="field-label">Project ZIP *</label>
            <input id="qq-zip" name="zip" required inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code" className="field" placeholder="75201" />
          </div>
        </div>
        <div>
          <label htmlFor="qq-service" className="field-label">Service needed *</label>
          <select id="qq-service" name="service" required defaultValue="" className="field">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>

        {status === "error" && (
          <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700" role="alert">
            That didn&apos;t go through — try again or call{" "}
            <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a>.
          </p>
        )}

        <button type="submit" disabled={status === "submitting"} className="btn-primary mt-1 w-full disabled:opacity-60">
          {status === "submitting" ? (
            <><Loader2 size={16} className="animate-spin" aria-hidden /> Sending…</>
          ) : (
            "Get My Free Estimate"
          )}
        </button>
        <p className="text-center text-[13px] text-steel/90">
          By submitting you agree to be contacted about your project. No spam.
        </p>
      </div>
    </form>
  );
}
