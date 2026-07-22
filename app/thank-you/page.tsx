import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your estimate request has been received. We'll be in touch within one business day.",
  robots: { index: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <CheckCircle2 size={52} className="text-green-600" aria-hidden />
      <h1 className="display-xl mt-6 text-4xl">Request received</h1>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-steel">
        Thanks for reaching out to {site.name}. We&apos;ll contact you within one business day to schedule your free
        estimate. Need us sooner?
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={site.phoneHref} className="btn-primary">Call {site.phone}</a>
        <Link href="/gallery/" className="btn-ghost">Browse Our Work</Link>
      </div>
    </section>
  );
}
