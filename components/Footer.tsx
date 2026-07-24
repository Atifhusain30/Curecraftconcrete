import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, services, cities } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="texture-dark text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={44} height={44} className="h-11 w-11 rounded bg-white/95 object-contain p-0.5" />
            <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight">
              CureCraft
              <span className="block text-[10px] font-semibold tracking-[0.3em] text-bronze-light">Concrete</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/60">
            Premium concrete contractor serving the {site.serviceArea}. Driveways, pavers, stamped and decorative
            concrete — poured to last a lifetime.
          </p>
          <ul className="mt-6 space-y-3 text-[14px]">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 font-semibold transition-colors hover:text-bronze-light">
                <Phone size={15} className="text-bronze-light" aria-hidden /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-bronze-light">
                <Mail size={15} className="text-bronze-light" aria-hidden /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <MapPin size={15} className="text-bronze-light" aria-hidden /> {site.serviceArea}
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <Clock size={15} className="text-bronze-light" aria-hidden /> {site.hours}
            </li>
          </ul>
        </div>

        <nav aria-label="Services">
          <h2 className="eyebrow !text-bronze-light">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="text-white/70 transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <h2 className="eyebrow !text-bronze-light">Service Areas</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px]">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}/`} className="text-white/70 transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="eyebrow !text-bronze-light">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            {[
              ["/about/", "About CureCraft"],
              ["/gallery/", "Project Gallery"],
              ["/testimonials/", "Testimonials"],
              ["/financing/", "Financing"],
              ["/faqs/", "FAQs"],
              ["/contact/", "Request an Estimate"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-white/15 p-4">
            <p className="font-display text-sm font-bold uppercase tracking-wide">Free Estimates</p>
            <p className="mt-1 text-[13px] text-white/60">Licensed & insured · {site.warrantyYears}-year workmanship warranty</p>
            <Link href="/contact/" className="btn-primary mt-4 w-full !py-2.5 !text-[13px]">
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 pb-20 pt-6 text-[13px] text-white/50 sm:flex-row sm:pb-6">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms/" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
