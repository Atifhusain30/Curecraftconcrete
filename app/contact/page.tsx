import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Estimate | Contact CureCraft Concrete",
  description:
    "Request a free, written concrete estimate anywhere in Dallas–Fort Worth. Call, email, or send the form — we respond within one business day.",
  alternates: { canonical: "/contact/" },
};

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Service area", value: site.serviceArea },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact/" }]} />
      <section className="wrap grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Free estimate"
            title="Let's look at your project"
            lead="Send the form or call directly — either way you'll get a scheduled visit, a written itemized quote, and a straight answer about what your project actually needs."
          />
          <ul className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-iron text-bronze-light">
                  <Icon size={19} aria-hidden />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-steel">{label}</p>
                  {href ? (
                    <a href={href} className="font-display text-[16px] font-bold transition-colors hover:text-bronze">{value}</a>
                  ) : (
                    <p className="font-display text-[16px] font-bold">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-xl border border-line bg-white p-6 shadow-card">
            <h2 className="font-display text-[15px] font-bold uppercase tracking-wide">What happens next</h2>
            <ol className="mt-4 space-y-3 text-[14px] text-graphite">
              <li className="flex gap-3"><span className="font-display font-extrabold text-bronze">1.</span> We call within one business day to schedule your visit.</li>
              <li className="flex gap-3"><span className="font-display font-extrabold text-bronze">2.</span> We measure on site and talk through options and finishes.</li>
              <li className="flex gap-3"><span className="font-display font-extrabold text-bronze">3.</span> You receive a written, itemized quote — no pressure, no expiration games.</li>
            </ol>
          </div>
        </div>
        <div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
