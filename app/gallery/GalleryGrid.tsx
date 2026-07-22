"use client";

import { useMemo, useState } from "react";
import { galleryProjects } from "@/lib/data";

export default function GalleryGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryProjects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryProjects : galleryProjects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-2 font-display text-[12px] font-bold uppercase tracking-wider transition-all duration-200 ${
              active === c ? "bg-iron text-white" : "border border-line bg-white text-graphite hover:border-bronze hover:text-bronze"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-xl border border-line shadow-card transition-all duration-300 hover:shadow-lift">
            <div className={`tile-${p.tone} tile-texture relative aspect-[4/3] overflow-hidden`}>
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
              <span className="absolute left-4 top-4 rounded-full bg-iron/70 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                {p.category}
              </span>
            </div>
            <figcaption className="bg-white px-5 py-4">
              <p className="font-display text-[14px] font-bold">{p.title}</p>
              <p className="mt-0.5 text-[12px] text-steel">{p.city}, TX</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
