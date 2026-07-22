import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Service Areas | Concrete Contractor Across DFW",
  description:
    "CureCraft Concrete serves Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, and communities across the DFW Metroplex. Find your city.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="Service areas"
          title="Local crews across the Metroplex"
          lead="We're not a lead-selling site or a broker — CureCraft crews self-perform every project. Choose your city for local project details, soil notes, and FAQs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 50}>
              <Link
                href={`/service-areas/${c.slug}/`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-bronze" aria-hidden />
                  <h2 className="display-xl text-lg">{c.name}, TX</h2>
                </div>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-steel">{c.county}</p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-steel">{c.intro.slice(0, 130)}…</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[13px] font-bold uppercase tracking-wider text-bronze">
                  Concrete in {c.name} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-[14px] text-steel">
          Don&apos;t see your city? We serve the entire DFW Metroplex —{" "}
          <Link href="/contact/" className="font-semibold text-bronze hover:text-bronze-dark">reach out</Link> and we&apos;ll confirm coverage for your address.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
