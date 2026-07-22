import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function CtaBand({ title = "Ready to get your project poured?", body = "Free on-site estimates across the Dallas–Fort Worth Metroplex. Written quotes, real schedules, and a written workmanship warranty on every project." }: { title?: string; body?: string }) {
  return (
    <section className="texture-dark">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-14 sm:py-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="display-xl text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/70">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
          <a href={site.phoneHref} className="btn-light">
            <Phone size={16} aria-hidden /> {site.phone}
          </a>
          <Link href="/contact/" className="btn-ghost-light">
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
