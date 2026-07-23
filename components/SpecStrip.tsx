import { Gauge, Ruler, Grid3X3, ShieldCheck } from "lucide-react";
import { jobSpecs } from "@/lib/data";

const icons = [Gauge, Ruler, Grid3X3, ShieldCheck];

export default function SpecStrip() {
  return (
    <section className="border-b border-line bg-iron" aria-label="Job specifications">
      <div className="wrap grid grid-cols-2 divide-line/20 py-6 sm:py-7 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
        {jobSpecs.map((spec, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={spec.value} className="flex items-center gap-3.5 px-2 py-2 lg:justify-center">
              <Icon size={26} className="shrink-0 text-white/60" strokeWidth={1.6} aria-hidden />
              <div>
                <p className="font-display text-[17px] font-bold uppercase tracking-[0.02em] text-white">{spec.value}</p>
                <p className="text-[12.5px] text-white/60">{spec.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
