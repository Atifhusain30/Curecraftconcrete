import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Users, Handshake } from "lucide-react";
import { site } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About CureCraft Concrete | DFW's Craftsmanship-First Contractor",
  description:
    "Locally owned, fully insured, and obsessed with the work you can't see. Meet the concrete contractor DFW homeowners trust for driveways, patios, and decorative work.",
  alternates: { canonical: "/about/" },
};

const values = [
  { icon: ShieldCheck, title: "The invisible work matters most", body: "Concrete fails from below — weak base, missing steel, rushed joints. We over-build the parts you'll never see, because that's where longevity lives." },
  { icon: Handshake, title: "Straight answers, written quotes", body: "Itemized estimates, honest schedules, and a recommendation you can trust — even when the honest answer is 'that slab doesn't need replacing.'" },
  { icon: Users, title: "Our crews, not brokers", body: "CureCraft self-performs its work with trained crews. Your project is never sold to the lowest bidder behind the scenes." },
  { icon: Award, title: "A warranty we actually honor", body: `Every residential project carries a written ${site.warrantyYears}-year workmanship warranty. If our work fails, we fix it. Simple.` },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="About CureCraft"
          title="Named for the part everyone else rushes"
          lead="Curing is the slow, unglamorous stage where concrete earns its strength. Most failures trace back to someone rushing it. We named the company after that stage on purpose — it's a promise about how we work."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite">
            <p>
              CureCraft Concrete was built on a simple observation: most concrete problems in North Texas aren&apos;t
              concrete problems. They&apos;re preparation problems. Slabs poured over loose fill, steel left out to save a
              few dollars, joints cut a day late — all invisible on day one, all inevitable by year five.
            </p>
            <p>
              For {site.yearsInBusiness} years we&apos;ve done it the other way around. We compact the base like it&apos;s the
              finished product, place steel on chairs instead of &ldquo;pulling it up&rdquo; during the pour, cut joints on
              schedule, and cure slabs properly before anyone parks on them. Over {site.projectsCompleted} projects
              across the Metroplex have been built to that standard.
            </p>
            <p>
              We&apos;re locally owned, our crews are our own, and our reputation lives in the neighborhoods where we
              work. That&apos;s the accountability we want — the driveway we pour today should still be earning referrals
              on that street in twenty years.
            </p>
          </div>
          <div className="rounded-xl bg-iron p-8 text-white">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/60">By the numbers</p>
            <dl className="mt-6 space-y-6">
              {[
                [`${site.yearsInBusiness}`, "years serving DFW"],
                [`${site.projectsCompleted}+`, "projects completed"],
                [`${site.warrantyYears}-yr`, "written workmanship warranty"],
                ["100%", "self-performed work"],
              ].map(([num, label]) => (
                <div key={label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <dt className="text-[13px] text-white/55">{label}</dt>
                  <dd className="font-display text-4xl font-extrabold uppercase text-bronze-light">{num}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="texture-slab border-y border-line py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHeading eyebrow="How we operate" title="Four commitments on every job" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 2) * 60}>
                <div className="h-full rounded-xl border border-line bg-white p-7 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-iron text-bronze-light">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="display-xl mt-5 text-lg">{title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-steel">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact/" className="btn-primary">Work With Us</Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
