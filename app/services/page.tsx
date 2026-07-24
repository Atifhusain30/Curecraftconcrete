import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Concrete Services in Dallas–Fort Worth",
  description:
    "Driveways, pavers, stamped & decorative concrete, sidewalks, and repair — every CureCraft service, built to one structural standard.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="Services"
          title="Everything concrete, one standard"
          lead="Poured slabs or interlocking pavers, new work or repair — the base work, reinforcement, and finishing discipline never change. Choose a service to see exactly how we build it."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <Link
                href={`/services/${s.slug}/`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="level-line" aria-hidden />
                <h2 className="display-xl mt-4 text-xl">{s.name}</h2>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-steel">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-[13px] font-bold uppercase tracking-wider text-bronze">
                  View service <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
