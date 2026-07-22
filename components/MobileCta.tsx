import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/data";

/** Sticky bottom bar on mobile: call + quote — the two conversion paths. */
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white sm:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={site.phoneHref} className="flex h-14 items-center justify-center gap-2 font-display text-[15px] font-semibold uppercase tracking-[0.04em] text-iron">
        <Phone size={16} aria-hidden /> Call Now
      </a>
      <Link href="/contact/" className="flex h-14 items-center justify-center bg-iron font-display text-[15px] font-semibold uppercase tracking-[0.04em] text-white">
        Free Estimate
      </Link>
    </div>
  );
}
