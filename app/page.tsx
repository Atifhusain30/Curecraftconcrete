import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Banknote,
} from "lucide-react";
import { site, services, cities, globalFaqs, testimonials, galleryProjects } from "@/lib/data";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import FaqSchema from "@/components/FaqSchema";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Concrete Contractor Dallas–Fort Worth | Driveways, Patios & Stamped Concrete | ${site.name}`,
  description:
    "DFW's trusted concrete contractor. Driveways, patios, stamped & decorative concrete, and pool decks — self-performed crews, 5-year workmanship warranty, free written estimates. Call (214) 555-0199.",
  alternates: { canonical: "/" },
};

/*
 * Placeholder photography (Unsplash hotlinks) — swap each URL for real
 * CureCraft project photos before launch. Sized/cropped via URL params.
 */
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const HERO_IMG = img("1523217582562-09d0def993a6", 2000);
const CREW_IMG = img("1541888946425-d81bb19240f5", 1400);

const SERVICE_IMGS = [
  img("1605146769289-440113cc3d00", 900), // driveways
  img("1600607687939-ce8a6c25118c", 900), // patios
  img("1600585154340-be6161a56a0c", 900), // stamped
  img("1600566753190-17f0baa2a6c3", 900), // pool decks
  img("1560184897-ae75f418493e", 900),    // sidewalks
  img("1504307651254-35680f356dfd", 900), // repair
  img("1581094794329-c8112a89af12", 900), // commercial
  img("1600047509807-ba8f99d2cdde", 900), // residential
];

const GALLERY_IMGS = [
  img("1600596542815-ffad4c1539a9", 900),
  img("1600585154526-990dced4db0d", 900),
  img("1600573472592-401b489a3cdc", 900),
  img("1600121848594-d8644e57abab", 900),
  img("1613490493576-7fde63acd811", 900),
  img("1600047509807-ba8f99d2cdde", 900),
];

const badges = [
  { icon: ShieldCheck, title: "Licensed & Insured", sub: "Certificates available on request" },
  { icon: Award, title: `${site.warrantyYears}-Year Warranty`, sub: "Written workmanship guarantee" },
  { icon: ClipboardCheck, title: `${site.projectsCompleted}+ Projects`, sub: `${site.yearsInBusiness} years serving DFW` },
  { icon: Banknote, title: "Free Estimates", sub: "Itemized written quotes" },
];

const whyUs = [
  "Our own crews on every job — no brokers, no subs",
  "Compacted base and steel reinforcement on every pour",
  "4,000+ PSI mixes, never watered down on site",
  "Control joints cut on schedule, not when it's convenient",
  "Clean job sites — debris hauled off daily",
  `Written ${site.warrantyYears}-year workmanship warranty`,
];

const processSteps = [
  { n: "1", title: "Free on-site estimate", body: "We measure, check grades and drainage, and give you a written, itemized quote." },
  { n: "2", title: "Scheduled start date", body: "A real calendar window — typically 1–3 weeks out — and we keep you updated." },
  { n: "3", title: "Prep & pour", body: "Demo, compacted base, steel on chairs, and a hand-finished pour by our own crew." },
  { n: "4", title: "Walkthrough & warranty", body: "We walk the finished work with you and leave your warranty in writing." },
];

export default function HomePage() {
  return (
    <>
      <FaqSchema faqs={globalFaqs} />

      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="wrap relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <p className="flex items-center gap-2 font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-white/80">
              <ShieldCheck size={16} aria-hidden /> Licensed & Insured · {site.yearsInBusiness} Years in DFW
            </p>
            <h1 className="display-xl mt-5 text-4xl text-white sm:text-5xl lg:text-[3.4rem]">
              Dallas–Fort Worth&apos;s Trusted Concrete Contractor
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/85">
              Driveways, patios, stamped &amp; decorative concrete, and pool decks — poured by our own crews and
              backed by a written {site.warrantyYears}-year workmanship warranty.
            </p>

            <ul className="mt-6 grid max-w-lg gap-2.5 sm:grid-cols-2">
              {["Free written estimates", "Self-performed crews", "Engineered for Texas soil", "Financing available"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[15px] font-medium text-white">
                  <CheckCircle2 size={17} className="shrink-0 text-white/70" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-light">
                <Phone size={16} aria-hidden /> Call {site.phone}
              </a>
              <a href="#estimate" className="btn-ghost-light">
                Get a Free Estimate <ArrowRight size={16} aria-hidden />
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-[14.5px] text-white/85">
              <span className="flex gap-0.5 text-star" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </span>
              Rated 5.0 by homeowners across the Metroplex
            </p>
          </div>

          <div id="estimate" className="scroll-mt-32">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGES ============ */}
      <section className="border-b border-line bg-white" aria-label="Credentials">
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.title} className="flex items-start gap-3.5">
              <b.icon size={30} className="mt-0.5 shrink-0 text-iron" strokeWidth={1.7} aria-hidden />
              <div>
                <p className="font-display text-[16px] font-bold uppercase tracking-[0.03em] text-iron">{b.title}</p>
                <p className="mt-0.5 text-[13.5px] text-steel">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="texture-slab">
        <div className="wrap py-16 sm:py-20">
          <SectionHeading
            center
            eyebrow="Our services"
            title="Concrete work we do every day"
            lead="Every service below is self-performed by CureCraft crews — same standards, same crew leads, no brokers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SERVICE_IMGS[i % SERVICE_IMGS.length]}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[17px] font-bold uppercase tracking-[0.02em] text-iron">{s.name}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-steel">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[13.5px] font-semibold uppercase tracking-[0.06em] text-iron">
                      Learn more <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-lg shadow-lift">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CREW_IMG} alt="CureCraft crew placing and finishing a concrete slab" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-4 left-4 rounded bg-iron/90 px-4 py-3 text-white">
            <p className="font-display text-2xl font-bold">{site.projectsCompleted}+</p>
            <p className="text-[12.5px] uppercase tracking-wide text-white/75">Projects completed in DFW</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Why CureCraft"
            title="The work you can't see is the work that matters"
            lead="Concrete fails from the bottom up. That's why our process starts below the surface — and why our slabs are still flat and clean a decade later."
          />
          <ul className="mt-7 grid gap-3">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15.5px] font-medium text-graphite">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-iron" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="btn-primary">Get My Free Estimate</a>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone size={15} aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ============ RECENT PROJECTS ============ */}
      <section className="texture-slab">
        <div className="wrap py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent projects"
              title="Our work across the Metroplex"
            />
            <Link href="/gallery/" className="btn-ghost shrink-0">
              View Full Gallery <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 60}>
                <figure className="group relative overflow-hidden rounded-lg shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={GALLERY_IMGS[i]}
                    alt={`${p.title} — ${p.city}, TX`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14 text-white">
                    <p className="font-display text-[15.5px] font-bold uppercase tracking-[0.02em]">{p.title}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-white/75">
                      <MapPin size={12} aria-hidden /> {p.city}, TX · {p.category}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="wrap py-16 sm:py-20">
        <SectionHeading
          center
          eyebrow="Reviews"
          title="What DFW homeowners say"
          lead="Most of our schedule comes from repeat clients and referrals."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <blockquote className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card">
                <div className="flex gap-0.5 text-star" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-graphite">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slab font-display text-[15px] font-bold text-iron" aria-hidden>
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-bold text-iron">{t.name}</span>
                    <span className="block text-[13px] text-steel">{t.service} · {t.city}, TX</span>
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <p className="mt-9 text-center">
          <Link href="/testimonials/" className="font-display text-[14.5px] font-semibold uppercase tracking-[0.06em] text-iron underline underline-offset-4 hover:text-black">
            Read more reviews
          </Link>
        </p>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="texture-dark">
        <div className="wrap py-16 sm:py-20">
          <SectionHeading
            center
            light
            eyebrow="How it works"
            title="From estimate to finished slab"
          />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/25 font-display text-xl font-bold text-white" aria-hidden>
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-[17px] font-bold uppercase tracking-[0.03em] text-white">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[14px] leading-relaxed text-white/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving the Dallas–Fort Worth Metroplex"
            lead="Local crews, local soil knowledge. Choose your city for project details, or call us — if you're in the Metroplex, we cover you."
          />
          <div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}/`}
                    className="inline-flex items-center gap-1.5 py-1 text-[15px] font-medium text-graphite hover:text-black hover:underline"
                  >
                    <MapPin size={13} className="text-steel" aria-hidden /> {c.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-steel">
              Don&apos;t see your city? <a href="#estimate" className="font-semibold text-iron underline underline-offset-2">Send your address</a> and we&apos;ll confirm coverage.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ + FINANCING ============ */}
      <section className="texture-slab">
        <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions"
              lead="Straight answers to what homeowners ask us most. More on the FAQs page."
            />
            <div className="mt-8 rounded-lg border border-line bg-white p-6 shadow-card">
              <p className="font-display text-[16px] font-bold uppercase tracking-[0.03em] text-iron">Financing available</p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-steel">
                Build now, pay over time — flexible financing for qualifying projects.
              </p>
              <Link href="/financing/" className="mt-3 inline-flex items-center gap-1.5 font-display text-[13.5px] font-semibold uppercase tracking-[0.06em] text-iron underline underline-offset-4">
                Financing details
              </Link>
            </div>
          </div>
          <FaqList faqs={globalFaqs.slice(0, 6)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
