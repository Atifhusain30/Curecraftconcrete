import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { cities, services, site, globalFaqs } from "@/lib/data";
import FaqList from "@/components/FaqList";
import FaqSchema from "@/components/FaqSchema";
import QuoteForm from "@/components/QuoteForm";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return {};
  return {
    title: `Concrete Contractor in ${city.name}, TX`,
    description: `CureCraft Concrete pours driveways, pavers, and stamped concrete in ${city.name}, TX. Licensed, insured, free estimates, ${site.warrantyYears}-year warranty.`,
    keywords: [
      `concrete contractor ${city.name}`,
      `concrete company ${city.name} TX`,
      `stamped concrete ${city.name}`,
      `concrete driveway ${city.name}`,
      `paver installation ${city.name}`,
    ],
    alternates: { canonical: `/service-areas/${city.slug}/` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) notFound();

  const cityFaqs = [...city.faqs, ...globalFaqs.slice(0, 3)];

  return (
    <>
      <FaqSchema faqs={cityFaqs} />

      <section className="texture-dark">
        <div className="wrap py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span>{" "}
            <Link href="/service-areas/" className="hover:text-white">Service Areas</Link> <span aria-hidden>/</span>{" "}
            <span className="text-white/80">{city.name}, TX</span>
          </nav>
          <p className="eyebrow mt-8 flex items-center gap-2 !text-bronze-light">
            <MapPin size={13} aria-hidden /> {city.county}
          </p>
          <span className="level-line mt-4" aria-hidden />
          <h1 className="display-xl mt-6 max-w-3xl text-4xl text-white sm:text-5xl">
            Concrete contractor in {city.name}, Texas
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">{city.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#quote" className="btn-primary">Free Estimate in {city.name}</Link>
            <a href={site.phoneHref} className="btn-ghost-light">Call {site.phone}</a>
          </div>
        </div>
      </section>

      {/* Local knowledge callout */}
      <section className="wrap py-12">
        <Reveal>
          <div className="rounded-xl border-l-4 border-bronze bg-white p-7 shadow-card">
            <h2 className="font-display text-[15px] font-bold uppercase tracking-wide">Local knowledge: building in {city.name}</h2>
            <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-steel">{city.localNote}</p>
          </div>
        </Reveal>
      </section>

      {/* Services in city */}
      <section className="wrap pb-16 pt-4 sm:pb-20">
        <Reveal>
          <SectionHeading eyebrow="What we do here" title={`Concrete services in ${city.name}`} />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 40}>
              <Link
                href={`/services/${s.slug}/`}
                className="group flex h-full items-center justify-between gap-3 rounded-lg border border-line bg-white px-5 py-4 shadow-card transition-all duration-200 hover:border-bronze"
              >
                <span className="font-display text-[14px] font-bold">{s.name}</span>
                <ArrowRight size={15} className="shrink-0 text-bronze transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="texture-slab border-y border-line py-16 sm:py-20">
        <div className="wrap grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Coverage"
                title={`Crews in ${city.name} every week`}
                lead={`CureCraft serves all of ${city.name} and surrounding ${city.county} communities. Estimates are scheduled around your calendar, and most ${city.name} projects start within 1–3 weeks of approval.`}
              />
            </Reveal>
            <ul className="mt-8 space-y-3 text-[15px] text-graphite">
              {["Free on-site estimates, written and itemized", `Licensed & insured · ${site.warrantyYears}-year workmanship warranty`, "Financing available for qualifying projects", "Demo, haul-off, and daily cleanup included"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-xl border border-line shadow-card">
              <iframe
                title={`Map of ${city.name}, Texas`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(city.name + ", TX")}&output=embed`}
                className="h-[340px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs + form */}
      <section className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading eyebrow="Local FAQs" title={`${city.name} homeowners ask`} />
          </Reveal>
          <div className="mt-8">
            <FaqList faqs={cityFaqs} />
          </div>
        </div>
        <div id="quote">
          <Reveal>
            <SectionHeading eyebrow="Get started" title={`Request an estimate in ${city.name}`} />
          </Reveal>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <CtaBand title={`Building in ${city.name}? Let's talk.`} />
    </>
  );
}
