import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, site, cities } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FaqList from "@/components/FaqList";
import FaqSchema from "@/components/FaqSchema";
import QuoteForm from "@/components/QuoteForm";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SpecStrip from "@/components/SpecStrip";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in Dallas–Fort Worth`,
    description: `${service.short} Free estimates across DFW. Licensed, insured, ${site.warrantyYears}-year workmanship warranty.`,
    keywords: service.keywords.split(", "),
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.short,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.short,
    provider: { "@id": `${site.url}/#business` },
    areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, TX` })),
    url: `${site.url}/services/${service.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqSchema faqs={service.faqs} />

      {/* Hero */}
      <section className="texture-dark">
        <div className="wrap py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span>{" "}
            <Link href="/services/" className="hover:text-white">Services</Link> <span aria-hidden>/</span>{" "}
            <span className="text-white/80">{service.name}</span>
          </nav>
          <p className="eyebrow mt-8 !text-bronze-light">{service.name} · Dallas–Fort Worth</p>
          <span className="level-line mt-4" aria-hidden />
          <h1 className="display-xl mt-6 max-w-3xl text-4xl text-white sm:text-5xl">{service.heroLine}</h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">{service.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#quote" className="btn-primary">Get a Free Estimate</Link>
            <a href={site.phoneHref} className="btn-ghost-light">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <SpecStrip />

      {/* Benefits */}
      <section className="wrap py-16 sm:py-20">
        <Reveal>
          <SectionHeading eyebrow="Why CureCraft" title={`What sets our ${service.name.toLowerCase()} apart`} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 60}>
              <div className="flex h-full gap-4 rounded-xl border border-line bg-white p-6 shadow-card">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-bronze" aria-hidden />
                <div>
                  <h3 className="font-display text-[16px] font-bold">{b.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-steel">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process + Materials + Timeline */}
      <section className="texture-slab border-y border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Our process" title="How the work gets done" />
            </Reveal>
            <ol className="mt-10 space-y-4">
              {service.process.map((p, i) => (
                <Reveal key={p.title} delay={i * 50}>
                  <li className="flex gap-5 rounded-xl border border-line bg-white p-6 shadow-card">
                    <span className="font-display text-3xl font-extrabold text-bronze" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-[16px] font-bold">{p.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-steel">{p.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-xl border border-line bg-white p-7 shadow-card">
                <p className="eyebrow">Job specs</p>
                <h2 className="display-xl mt-2 text-lg">Materials & standards</h2>
                <ul className="mt-4 divide-y divide-line">
                  {service.materials.map((m) => (
                    <li key={m} className="flex items-center gap-3 py-2.5 text-[14px] text-graphite">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden /> {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line pt-4 font-display text-[12.5px] font-semibold uppercase tracking-[0.06em] text-steel">
                  Same standard on every {service.name.toLowerCase()} job
                </p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="rounded-xl bg-iron p-7 text-white">
                <h2 className="display-xl text-lg text-white">Typical timeline</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{service.timeline}</p>
                <Link href="#quote" className="btn-primary mt-6 w-full !py-3 !text-[13px]">Schedule My Estimate</Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-xl border border-line bg-white p-7 shadow-card">
                <h2 className="display-xl text-lg">Related services</h2>
                <ul className="mt-4 space-y-2.5">
                  {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}/`} className="inline-flex items-center gap-1.5 text-[14px] font-medium text-graphite transition-colors hover:text-bronze">
                        <ArrowRight size={13} className="text-bronze" aria-hidden /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs + Form */}
      <section className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading eyebrow="FAQs" title={`${service.name} questions`} />
          </Reveal>
          <div className="mt-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
        <div id="quote">
          <Reveal>
            <SectionHeading eyebrow="Free estimate" title="Start your project" lead="Written quote, no obligation, response within one business day." />
          </Reveal>
          <div className="mt-8">
            <QuoteForm defaultService={service.name} />
          </div>
        </div>
      </section>

      <CtaBand title={`Ready for ${service.name.toLowerCase()} done right?`} />
    </>
  );
}
