import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Testimonials | What DFW Homeowners Say",
  description:
    "Reviews from CureCraft Concrete customers across Dallas–Fort Worth — driveways, patios, stamped concrete, pool decks, and repair projects.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Testimonials", href: "/testimonials/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="Testimonials"
          title="Judged by the people we build for"
          lead="Every review below came from a real CureCraft project. We earn them one clean job site and one straight answer at a time."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 60}>
              <blockquote className="flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <Quote size={22} className="text-bronze" aria-hidden />
                  <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} className="fill-bronze text-bronze" aria-hidden />
                    ))}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-graphite">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wide">{t.name}</p>
                  <p className="mt-0.5 text-[13px] text-steel">{t.service} · {t.city}, TX</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Ready to write the next review?" />
    </>
  );
}
