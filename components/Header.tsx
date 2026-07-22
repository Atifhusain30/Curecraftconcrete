"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Menu, X, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/data";

const nav = [
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Projects" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/financing/", label: "Financing" },
  { href: "/faqs/", label: "FAQs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Info bar */}
      <div className="bg-iron text-white/90">
        <div className="wrap flex h-9 items-center justify-between gap-4 text-[13.5px]">
          <p className="flex items-center gap-1.5">
            <MapPin size={13} aria-hidden />
            Serving the Dallas–Fort Worth Metroplex
          </p>
          <div className="flex items-center gap-5">
            <p className="hidden items-center gap-1.5 md:flex">
              <Clock size={13} aria-hidden /> {site.hours}
            </p>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-white hover:underline">
              <Phone size={13} aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`border-b bg-white transition-shadow duration-300 ${scrolled ? "border-line shadow-card" : "border-line/70"}`}>
        <div className="wrap flex h-[74px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="CureCraft Concrete — home" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="CureCraft Concrete logo"
              width={58}
              height={46}
              className="h-[46px] w-[58px] object-contain"
              priority
            />
            <span className="font-display text-[19px] font-bold uppercase leading-none tracking-wide text-iron">
              CureCraft
              <span className="mt-0.5 block text-[11px] font-medium tracking-[0.32em] text-steel">Concrete</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-[15px] font-medium uppercase tracking-[0.04em] text-graphite transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="hidden items-center gap-2.5 md:flex" aria-label={`Call ${site.phone}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slab text-iron">
                <Phone size={17} aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold uppercase tracking-wide text-steel">Call for a free estimate</span>
                <span className="block font-display text-[17px] font-bold text-iron">{site.phone}</span>
              </span>
            </a>
            <Link href="/contact/" className="btn-primary hidden !px-5 !py-3 !text-[14px] sm:inline-flex">
              Get a Free Quote
            </Link>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-line text-iron lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="wrap flex flex-col py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-3.5 font-display text-[17px] font-medium uppercase tracking-[0.04em] text-iron"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-5">
                <Link href="/contact/" onClick={() => setOpen(false)} className="btn-primary">
                  Get a Free Quote
                </Link>
                <a href={site.phoneHref} className="btn-ghost">
                  <Phone size={16} aria-hidden /> {site.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
