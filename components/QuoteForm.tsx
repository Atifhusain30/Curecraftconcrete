"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services, site } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Netlify Forms — works with static export because the form markup is present
 * in the pre-rendered HTML (Netlify's build bots detect `data-netlify`).
 * Submissions POST as urlencoded; a honeypot field filters bots.
 */
export default function QuoteForm({ defaultService }: { defaultService?: string }) {
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
      <div className="rounded-xl border border-line bg-white p-8 text-center shadow-card" role="status">
        <CheckCircle2 size={40} className="mx-auto text-green-600" aria-hidden />
        <h3 className="display-xl mt-4 text-2xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-sm text-[15px] text-steel">
          Thanks for reaching out. We&apos;ll contact you within one business day to schedule your free estimate.
          Need us sooner? Call <a href={site.phoneHref} className="font-semibold text-bronze">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-white p-6 shadow-card sm:p-8"
      aria-label="Request a free estimate"
    >
      <input type="hidden" name="form-name" value="quote" />
      {/* Honeypot — hidden from humans, tempting to bots */}
      <p className="hidden" aria-hidden="true">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="field-label">Full name *</label>
          <input id="qf-name" name="name" required autoComplete="name" className="field" placeholder="Jordan Smith" />
        </div>
        <div>
          <label htmlFor="qf-phone" className="field-label">Phone *</label>
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className="field" placeholder="(214) 555-0100" />
        </div>
        <div>
          <label htmlFor="qf-email" className="field-label">Email *</label>
          <input id="qf-email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="qf-address" className="field-label">Project address *</label>
          <input id="qf-address" name="address" required autoComplete="street-address" className="field" placeholder="Street, City, TX" />
        </div>
        <div>
          <label htmlFor="qf-service" className="field-label">Service needed *</label>
          <select id="qf-service" name="service" required defaultValue={defaultService ?? ""} className="field">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="qf-timeline" className="field-label">Timeline *</label>
          <select id="qf-timeline" name="timeline" required defaultValue="" className="field">
            <option value="" disabled>When do you want to start?</option>
            <option>As soon as possible</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>Just planning ahead</option>
          </select>
        </div>
        <div>
          <label htmlFor="qf-budget" className="field-label">Budget <span className="font-normal text-steel">(optional)</span></label>
          <select id="qf-budget" name="budget" defaultValue="" className="field">
            <option value="">Prefer not to say</option>
            <option>Under $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $30,000</option>
            <option>$30,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="qf-contact" className="field-label">Preferred contact *</label>
          <select id="qf-contact" name="preferred_contact" required defaultValue="Phone call" className="field">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-desc" className="field-label">Tell us about your project *</label>
          <textarea id="qf-desc" name="description" required rows={4} className="field" placeholder="e.g. Replace a cracked two-car driveway, roughly 24 × 30 ft, broom finish." />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-[13px] leading-relaxed text-steel">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-bronze" />
        I agree to be contacted by {site.name} about my estimate request by phone, text, or email. No spam — we only reach out about your project.
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700" role="alert">
          The request didn&apos;t go through. Check your connection and try again, or call us at{" "}
          <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a>.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full disabled:opacity-60">
        {status === "submitting" ? (
          <><Loader2 size={16} className="animate-spin" aria-hidden /> Sending…</>
        ) : (
          "Request My Free Estimate"
        )}
      </button>
      <p className="mt-3 text-center text-[13px] text-steel">Free estimate · No obligation · Response within one business day</p>
    </form>
  );
}
