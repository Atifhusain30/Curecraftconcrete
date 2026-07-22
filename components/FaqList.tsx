"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-white shadow-card">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-display text-[15px] font-bold">{f.q}</span>
              <ChevronDown size={18} className={`shrink-0 text-bronze transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-steel">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
