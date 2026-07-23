# Concrete Niche Rescope & UI Evolution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rescope CureCraft Concrete to 6 niche services (adding Pavers) and evolve the UI with a Finishes & Patterns showcase plus a job-spec callout system.

**Architecture:** All content lives in `lib/data.ts`; pages/components consume it. We edit data first (services trim + new `finishes`/`jobSpecs` exports + consistency sweep), then add three presentational components, then wire them into the homepage and service pages. Static export — every change must survive `npm run build`.

**Tech Stack:** Next.js 14 App Router (`output: 'export'`), TypeScript, Tailwind, lucide-react.

## Global Constraints

- Do NOT change palette, fonts, or layout shell (white bg, `iron` charcoal, `slab` gray, amber `star` only for stars; Oswald `font-display` / Source Sans 3 body).
- Keep the legacy `bronze-*` Tailwind alias classes used by interior pages.
- All internal links end with trailing slash (`trailingSlash: true`).
- Images are `<img>` tags with `{/* eslint-disable-next-line @next/next/no-img-element */}` above them (project convention).
- Working directory: `C:\Users\husai\Desktop\curecraft`. Dev server may already be running on :3000.
- No test suite exists. Verification = `npm run build` passes + grep checks + page loads.
- Commit after each task.

---

### Task 1: Trim services to 6 and write the Pavers service

**Files:**
- Modify: `lib/data.ts` (services array, lines 33–254)

**Interfaces:**
- Produces: `services` array with exactly these slugs in order: `driveways`, `patios`, `pavers`, `stamped-concrete`, `sidewalks`, `concrete-repair`. Same `Service` type as today (unchanged).

- [ ] **Step 1: Delete the three dropped services**

In `lib/data.ts`, delete the entire objects for slugs `pool-decks` (lines ~118–145), `commercial-concrete` (~200–226), and `residential-concrete` (~227–253) from the `services` array.

- [ ] **Step 2: Rename stamped service display name**

In the `stamped-concrete` entry, change:
```ts
name: "Stamped Concrete",
```
to:
```ts
name: "Stamped & Decorative Concrete",
```
Also update its `short` to mention staining:
```ts
short: "Stamped patterns, stains, and scored finishes — the look of stone, slate, or wood plank with concrete strength.",
```

- [ ] **Step 3: Insert the new Pavers service**

Insert this object into the `services` array immediately after the `patios` entry:

```ts
{
  slug: "pavers",
  name: "Pavers",
  short: "Interlocking paver driveways, patios, and walkways — laid on a compacted base that keeps them flat.",
  heroLine: "Pavers that stay locked, level, and weed-free.",
  intro:
    "Pavers give you pattern, color, and a repairable surface — but only if the base under them is built right. Most failed paver jobs in DFW fail underground: thin base, no compaction, missing edge restraints. CureCraft installs pavers the same way we pour slabs — over engineered, compacted base — so the pattern you pick stays flat and tight for decades.",
  benefits: [
    { title: "Base built like a slab", body: "Excavated, graded, and compacted base at the right depth for the load — driveways get more base than walkways, always." },
    { title: "Patterns laid true", body: "Herringbone, running bond, and basket weave laid off string lines so bond lines stay straight across the whole field." },
    { title: "Edges that hold", body: "Concrete or spiked edge restraints on every install, so the field can't spread and unravel at the borders." },
    { title: "Joints that fight weeds", body: "Polymeric sand swept and set into every joint — it hardens against weeds and washout while staying flexible." },
  ],
  process: [
    { title: "Design & layout", body: "We help you pick paver style, color blend, pattern, and border details, then stake the layout on site." },
    { title: "Excavation & base", body: "Soil is cut to depth, base material is placed in lifts and compacted to spec, and bedding sand is screeded flat." },
    { title: "Laying & cutting", body: "Pavers are laid in pattern off string lines, with clean saw cuts at edges, curves, and borders." },
    { title: "Restrain, sand & compact", body: "Edge restraints are installed, polymeric sand is swept and vibrated in, and the surface is compacted and misted to set." },
  ],
  materials: ["Concrete pavers (multiple styles/blends)", "Compacted flex base in lifts", "Concrete or spiked edge restraints", "Polymeric joint sand"],
  timeline: "Walkways and small patios: 2–3 days. Paver driveways: typically 4–7 days including excavation and base work.",
  faqs: [
    { q: "Pavers or a concrete slab — which should I choose?", a: "Slabs cost less per square foot and are seamless; pavers cost more but offer pattern variety and spot-repairability — a stained or settled paver can be lifted and reset. We'll price both options honestly during your estimate." },
    { q: "Will weeds grow between my pavers?", a: "Not through properly installed polymeric sand. It cures hard in the joints and blocks weed germination. If joints wash out years later, re-sanding is an easy maintenance job." },
    { q: "Can you repair or re-level existing pavers?", a: "Yes — settled areas can be lifted, the base re-compacted, and the same pavers re-laid. It's one of the biggest advantages pavers have over poured concrete." },
  ],
  keywords: "paver installation Dallas, paver driveway DFW, paver patio Fort Worth, interlocking pavers",
},
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: build succeeds; `/services/pavers/` appears in the route list; `/services/pool-decks/`, `/services/commercial-concrete/`, `/services/residential-concrete/` do NOT appear.

- [ ] **Step 5: Commit**

```bash
git add lib/data.ts
git commit -m "feat: rescope services to 6 concrete-niche services, add Pavers"
```

---

### Task 2: Add finishes + jobSpecs data and run the consistency sweep

**Files:**
- Modify: `lib/data.ts`

**Interfaces:**
- Produces:
  - `export type Finish = { slug: string; name: string; bestFor: string; img: string; serviceSlug: string }`
  - `export const finishes: Finish[]` (6 entries)
  - `export const jobSpecs: { value: string; label: string }[]` (4 entries)

- [ ] **Step 1: Add finishes and jobSpecs exports**

Append after the `services` array (before `export type City`):

```ts
export type Finish = {
  slug: string;
  name: string;
  bestFor: string;
  // Unsplash placeholder — swap for real CureCraft finish photos before launch
  img: string;
  serviceSlug: string;
};

const finishImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=900&auto=format&fit=crop`;

export const finishes: Finish[] = [
  { slug: "broom", name: "Broom Finish", bestFor: "Driveways & sidewalks — clean look, best traction per dollar", img: finishImg("1605146769289-440113cc3d00"), serviceSlug: "driveways" },
  { slug: "ashlar-slate", name: "Ashlar Slate Stamp", bestFor: "Patios that want a natural cut-stone look", img: finishImg("1600585154340-be6161a56a0c"), serviceSlug: "stamped-concrete" },
  { slug: "wood-plank", name: "Wood-Plank Stamp", bestFor: "Porches & patios — wood warmth, zero rot", img: finishImg("1600573472592-401b489a3cdc"), serviceSlug: "stamped-concrete" },
  { slug: "exposed-aggregate", name: "Exposed Aggregate", bestFor: "Walkways & pool surrounds — texture that hides wear", img: finishImg("1560184897-ae75f418493e"), serviceSlug: "sidewalks" },
  { slug: "stain-score", name: "Stain & Score", bestFor: "Refreshing sound existing slabs with color and pattern", img: finishImg("1600121848594-d8644e57abab"), serviceSlug: "concrete-repair" },
  { slug: "paver-patterns", name: "Paver Patterns", bestFor: "Herringbone, running bond & basket weave fields", img: finishImg("1600566753190-17f0baa2a6c3"), serviceSlug: "pavers" },
];

export const jobSpecs = [
  { value: "4,000+ PSI", label: "High-strength mixes" },
  { value: '4–6" slabs', label: "Engineered thickness" },
  { value: "Steel on chairs", label: "Reinforcement standard" },
  { value: `${site.warrantyYears}-yr warranty`, label: "In writing, every job" },
];
```

- [ ] **Step 2: Rework gallery projects to the 6-service lineup**

Replace the three dropped-category items in `galleryProjects`:
- `{ title: "Pool Deck Remodel with Spray Texture", city: "Frisco", category: "Pool Decks", tone: "cool" }` → `{ title: "Herringbone Paver Driveway", city: "Frisco", category: "Pavers", tone: "cool" }`
- `{ title: "ADA Ramp & Route Correction", city: "Irving", category: "Commercial", tone: "cool" }` → `{ title: "Sidewalk Panel Replacement", city: "Irving", category: "Concrete Repair", tone: "cool" }`
- `{ title: "Dumpster Pad & Approach", city: "Arlington", category: "Commercial", tone: "cool" }` → `{ title: "Basket Weave Paver Walkway", city: "Arlington", category: "Pavers", tone: "cool" }`
- `{ title: "RV Pad with Turnout", city: "Little Elm", category: "Residential", tone: "light" }` → category `"Driveways"` (title stays)
- `{ title: "Stained & Scored Patio", city: "Dallas", category: "Decorative", tone: "warm" }` → category `"Stamped & Decorative"`
- Both `"Stamped Concrete"` categories → `"Stamped & Decorative"`

- [ ] **Step 3: Rework the pool-deck testimonial**

Replace Dana W.'s entry:
```ts
{ name: "Dana W.", city: "Southlake", service: "Paver Patio", quote: "The herringbone paver patio is dead flat and the pattern runs perfectly straight. Two summers in — not one weed, not one shifted paver." },
```

- [ ] **Step 4: City copy sweep**

In `cities`, make these edits (leave everything else untouched):
- **Frisco** `intro`: replace "patio extensions, outdoor living slabs, and pool decks that tie new backyards together." with "patio extensions, outdoor living slabs, and paver walkways that tie new backyards together."
- **Little Elm** `intro`: replace "means patios, walkways, and pool decks built for outdoor time" with "means patios, walkways, and paver paths built for outdoor time". Replace its FAQ with `{ q: "Do you install pavers in Little Elm?", a: "Yes — paver patios and walkways are among our most common Little Elm projects, laid over properly compacted base." }`
- **Southlake** `localNote`: replace "stamped borders, exposed aggregate, and stained finishes" stays (fine) — but `intro`: replace "stamped patios, and pool deck remodels" with "stamped patios, and paver installations".
- **Arlington** `intro`: replace "driveway replacements, sidewalk repair, and commercial flatwork alike — all self-performed, never brokered out." with "driveway replacements, sidewalk repair, and paver work alike — all self-performed, never brokered out." Replace its FAQ with `{ q: "Do you repair sidewalks in Arlington?", a: "Yes — we replace failed panels at the panel level so you're not paying to replace sound concrete." }`
- **Irving** `intro`: replace entire value with "From Las Colinas to established Irving neighborhoods, CureCraft delivers driveways, patios, walkways, and repair work with the documentation and scheduling reliability homeowners expect." Replace its FAQ with `{ q: "Can you fix a settled or cracked driveway at my Irving property?", a: "Yes — we diagnose whether panel replacement, resurfacing, or full replacement is the honest fix, and quote each sensible option." }`
- **Arlington** `localNote`: keep (sidewalk/panel content is still in scope).

- [ ] **Step 5: Grep for leftovers in data**

Run: `Select-String -Path lib\data.ts -Pattern "pool deck","Pool Deck","commercial","Commercial","ADA"`
Expected: no matches in `services`, `cities`, `testimonials`, `galleryProjects` (case-insensitive review — the word may legitimately remain nowhere in data.ts).

- [ ] **Step 6: Build and commit**

Run: `npm run build` — expected: passes.
```bash
git add lib/data.ts
git commit -m "feat: add finishes + jobSpecs data, sweep dropped services from all content"
```

---

### Task 3: Build SpecStrip, SpecChips, and FinishShowcase components

**Files:**
- Create: `components/SpecStrip.tsx`
- Create: `components/SpecChips.tsx`
- Create: `components/FinishShowcase.tsx`

**Interfaces:**
- Consumes: `jobSpecs`, `finishes` from `@/lib/data` (Task 2).
- Produces:
  - `<SpecStrip />` (no props) — full-width spec band, server component
  - `<SpecChips items={string[]} />` — inline chip row
  - `<FinishShowcase />` (no props) — finish card grid, server component

- [ ] **Step 1: Create `components/SpecStrip.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `components/SpecChips.tsx`**

```tsx
export default function SpecChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Build specifications">
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-line bg-slab px-2 py-0.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.05em] text-graphite"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 3: Create `components/FinishShowcase.tsx`**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finishes } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function FinishShowcase() {
  return (
    <section className="wrap py-16 sm:py-20">
      <SectionHeading
        center
        eyebrow="Finishes & patterns"
        title="Pick the surface. We build what's under it."
        lead="Every finish below rides on the same base prep and reinforcement. The look is your call — the structure is ours."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {finishes.map((f, i) => (
          <Reveal key={f.slug} delay={(i % 3) * 60}>
            <Link
              href={`/services/${f.serviceSlug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt={`${f.name} concrete finish`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.02em] text-iron">{f.name}</h3>
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-steel">{f.bestFor}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.06em] text-iron">
                  See the service <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify compile**

Run: `npm run build`
Expected: passes (components exist but are unused — Next tree-shakes; no errors).

- [ ] **Step 5: Commit**

```bash
git add components/SpecStrip.tsx components/SpecChips.tsx components/FinishShowcase.tsx
git commit -m "feat: add SpecStrip, SpecChips, and FinishShowcase components"
```

---

### Task 4: Wire homepage — 6 service images, SpecStrip, FinishShowcase, spec chips, copy sweep

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `SpecStrip` (no props), `SpecChips items={string[]}`, `FinishShowcase` (no props) from Task 3.

- [ ] **Step 1: Update imports**

Add to imports in `app/page.tsx`:
```tsx
import SpecStrip from "@/components/SpecStrip";
import SpecChips from "@/components/SpecChips";
import FinishShowcase from "@/components/FinishShowcase";
```

- [ ] **Step 2: Update metadata and hero copy**

- In `metadata.description`, replace "Driveways, patios, stamped & decorative concrete, and pool decks" with "Driveways, patios, pavers, and stamped & decorative concrete".
- In the hero paragraph (line ~104), replace "Driveways, patios, stamped &amp; decorative concrete, and pool decks" with "Driveways, patios, pavers, and stamped &amp; decorative concrete".

- [ ] **Step 3: Cut SERVICE_IMGS to 6 in service order**

Replace the `SERVICE_IMGS` array with:
```tsx
const SERVICE_IMGS = [
  img("1605146769289-440113cc3d00", 900), // driveways
  img("1600607687939-ce8a6c25118c", 900), // patios
  img("1600566753190-17f0baa2a6c3", 900), // pavers
  img("1600585154340-be6161a56a0c", 900), // stamped & decorative
  img("1560184897-ae75f418493e", 900),    // sidewalks
  img("1504307651254-35680f356dfd", 900), // repair
];
```

- [ ] **Step 4: Insert SpecStrip under the hero**

Immediately after the hero `</section>` (line ~140), before the TRUST BADGES section, insert:
```tsx
      {/* ============ JOB SPECS ============ */}
      <SpecStrip />
```

- [ ] **Step 5: Add SpecChips to service cards and adjust grid**

In the SERVICES section: change the grid from `lg:grid-cols-4` to `lg:grid-cols-3` (6 cards → 2 rows of 3), and inside each card after the `<p ...>{s.short}</p>` line add:
```tsx
                    <SpecChips items={["4,000+ PSI", `${site.warrantyYears}-yr warranty`]} />
```
Also change the `Reveal` delay to `(i % 3) * 60` to match 3 columns.

- [ ] **Step 6: Insert FinishShowcase after the SERVICES section**

Immediately after the SERVICES section's closing `</section>`, insert:
```tsx
      {/* ============ FINISHES & PATTERNS ============ */}
      <FinishShowcase />
```

- [ ] **Step 7: Verify in browser and build**

Run: `npm run build` — expected: passes.
Load `http://localhost:3000/` — expected: spec band under hero, 6 service cards with chips in 3-column grid, finishes grid after services.

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx
git commit -m "feat: homepage niche evolution — spec strip, finish showcase, 6-service grid"
```

---

### Task 5: Service pages — Job Specs panel + SpecStrip; services index copy

**Files:**
- Modify: `app/services/[slug]/page.tsx`
- Modify: `app/services/page.tsx`

**Interfaces:**
- Consumes: `SpecStrip` from Task 3.

- [ ] **Step 1: Add SpecStrip import and placement on service detail page**

In `app/services/[slug]/page.tsx` add:
```tsx
import SpecStrip from "@/components/SpecStrip";
```
Insert `<SpecStrip />` immediately after the hero section's closing `</section>` (line ~70), before the Benefits section.

- [ ] **Step 2: Upgrade "Materials we use" into a "Job specs" panel**

Replace the materials card (lines ~114–125) with:
```tsx
            <Reveal>
              <div className="rounded-xl border border-line bg-white p-7 shadow-card">
                <p className="eyebrow">Job specs</p>
                <h2 className="display-xl mt-2 text-lg">Materials & standards</h2>
                <ul className="mt-4 divide-y divide-line">
                  {service.materials.map((m) => (
                    <li key={m} className="flex items-center gap-3 py-2.5 text-[14px] text-graphite">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden /> {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line pt-4 font-display text-[12.5px] font-semibold uppercase tracking-[0.06em] text-steel">
                  Same standard on every {service.name.toLowerCase()} job
                </p>
              </div>
            </Reveal>
```

- [ ] **Step 3: Update services index metadata and lead copy**

In `app/services/page.tsx`:
- `metadata.description` → `"Driveways, patios, pavers, stamped & decorative concrete, sidewalks, and repair — every CureCraft service, built to one structural standard."`
- `SectionHeading` `lead` → `"Poured slabs or interlocking pavers, new work or repair — the base work, reinforcement, and finishing discipline never change. Choose a service to see exactly how we build it."`

- [ ] **Step 4: Verify and commit**

Run: `npm run build` — expected: passes, exactly 6 `/services/*/` routes.
Load `http://localhost:3000/services/pavers/` — expected: full pavers page renders with spec strip and Job specs panel.

```bash
git add "app/services/[slug]/page.tsx" app/services/page.tsx
git commit -m "feat: job specs panel and spec strip on service pages, 6-service index copy"
```

---

### Task 6: Final sweep and verification

**Files:**
- Possibly modify: any file the greps flag

- [ ] **Step 1: Repo-wide grep for dropped references**

Run (Grep tool over the repo, excluding docs/ and .next/): patterns `pool-decks`, `commercial-concrete`, `residential-concrete`, `Pool Deck`, `pool deck`.
Expected: zero matches in `app/`, `components/`, `lib/`. Fix any stragglers found (e.g. sitemap, layout metadata, about page copy) by removing or rewording to the 6-service lineup.

- [ ] **Step 2: Full build + page walk**

Run: `npm run build` — expected: clean pass.
Load and visually check: `/`, `/services/`, all 6 service pages, `/gallery/`, `/service-areas/little-elm/`.

- [ ] **Step 3: Commit any sweep fixes**

```bash
git add -A
git commit -m "chore: final sweep of dropped-service references"
```
(Skip if no changes.)
