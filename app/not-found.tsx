import Link from "next/link";
import { site } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-xl mt-4 text-4xl">This page didn&apos;t set</h1>
      <p className="mt-4 max-w-md text-[16px] text-steel">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Head back home, or call us at{" "}
        <a href={site.phoneHref} className="font-semibold text-bronze">{site.phone}</a> — a person will always answer faster than a URL.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-dark">Back to Home</Link>
        <Link href="/contact/" className="btn-ghost">Request an Estimate</Link>
      </div>
    </section>
  );
}
