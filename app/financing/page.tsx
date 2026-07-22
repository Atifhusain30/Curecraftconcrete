import type { Metadata } from "next";
import Link from "next/link";
import { HandCoins, CalendarClock, FileCheck2, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Concrete Financing | Build Now, Pay Over Time",
  description:
    "Flexible financing options for driveways, patios, pool decks, and decorative concrete across DFW. Simple application, fast decisions, no prepayment penalties.",
  alternates: { canonical: "/financing/" },
};

const steps = [
  { icon: FileCheck2, title: "Get your written estimate", body: "Every financing conversation starts with a real number — your free, itemized project quote." },
  { icon: HandCoins, title: "Choose a payment plan", body: "We'll walk you through available financing options and terms that fit your budget, with no pressure." },
  { icon: CalendarClock, title: "Quick application, fast decision", body: "Applications take minutes, and most decisions come back the same day." },
  { icon: ShieldCheck, title: "We build, you pay over time", body: "Your project starts on schedule while payments spread comfortably over the term you chose." },
];

export default function FinancingPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Financing", href: "/financing/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="Financing available"
          title="The right way to build shouldn't wait"
          lead="Quality concrete is an investment in your property. Flexible financing lets you build it properly now — full base prep, real reinforcement, the finish you actually want — instead of settling for a cheaper shortcut."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-iron text-bronze-light">
                  <Icon size={20} aria-hidden />
                </span>
                <h2 className="display-xl mt-5 text-base">{title}</h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-steel">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-iron p-8 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="display-xl text-2xl text-white">Ask about financing during your estimate</h2>
              <p className="mt-3 max-w-xl text-[15px] text-white/65">
                We'll bring current options and terms to your free estimate, so you can compare paying outright versus
                financing with real numbers in front of you.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-primary">Get My Free Estimate</Link>
              <a href={site.phoneHref} className="btn-ghost-light">Call {site.phone}</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[13px] text-steel">
          Financing subject to credit approval through third-party lending partners. Terms, rates, and availability vary by project and applicant.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
