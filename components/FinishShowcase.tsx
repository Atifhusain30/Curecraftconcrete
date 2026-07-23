import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finishes } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function FinishShowcase() {
  return (
    <section className="wrap py-16 sm:py-20">
      <SectionHeading
        center
        eyebrow="Finishes & patterns"
        title="Pick the surface. We build what's under it."
        lead="Every finish below rides on the same base prep and reinforcement. The look is your call — the structure is ours."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {finishes.map((f, i) => (
          <Reveal key={f.slug} delay={(i % 3) * 60}>
            <Link
              href={`/services/${f.serviceSlug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt={`${f.name} concrete finish`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.02em] text-iron">{f.name}</h3>
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-steel">{f.bestFor}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.06em] text-iron">
                  See the service <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
