# Remove Concrete Patios Service (Full Purge)

**Goal:** Drop the standalone Concrete Patios service and purge every patio mention site-wide (approved: retarget social-proof content to surviving services rather than deleting it).

**Surviving services (5):** driveways, pavers, stamped-concrete, sidewalks, concrete-repair.

## Task 1: `lib/data.ts`

- Delete the `patios` service object.
- Pavers: `short` → "Interlocking paver driveways and walkways…"; `timeline` → "Walkways: 2–3 days.…"; keywords `paver patio Fort Worth` → `paver walkway Fort Worth`.
- Stamped: FAQ q → "Can you stamp over my existing concrete?"; keywords `stamped concrete patio Dallas` → `decorative concrete Dallas`.
- Sidewalks benefit: "complement existing driveways and patios" → "…driveways and flatwork".
- Finishes: ashlar-slate bestFor → "Outdoor slabs that want a natural cut-stone look"; wood-plank → "Porches & walkways — wood warmth, zero rot".
- Testimonials: James T. → Stamped Driveway (new quote); Dana W. → Paver Walkway (quote reworded); Priya S. → Stamped & Stained Slab (quote unchanged).
- Gallery: "Ashlar Slate Stamped Patio" → "…Stamped Courtyard"; "Terraced Backyard Patio" → "Terraced Walkway & Steps" (category Sidewalks); "Outdoor Kitchen Slab & Patio" → "Outdoor Kitchen Slab" (category Stamped & Decorative → no: keep tone, set category "Driveways"? → use "Stamped & Decorative" only if decorative; final: category "Sidewalks" is wrong too — use "Driveways" for flatwork pads); "Stained & Scored Patio" → "Stained & Scored Porch".
  - Final call: "Outdoor Kitchen Slab" category → "Stamped & Decorative" (outdoor-living showpiece).
- Cities sweep (dallas, plano, frisco, mckinney, allen, prosper, little-elm, irving, southlake, flower-mound): rewrite intros/localNotes/FAQs around driveways, walkways, decorative, paver work. Frisco loses patio-extension framing; Flower Mound terraced patios → terraced walkways & steps.

## Task 2: app/ + components sweep

- `app/page.tsx`: title "Driveways, Patios & Stamped Concrete" → "Driveways, Pavers & Stamped Concrete"; metadata + hero copy drop "patios"; SERVICE_IMGS 6 → 5 (remove patios img); hero comment → "slab pour".
- `app/layout.tsx`: two descriptions, OG + twitter descriptions, keyword `concrete patio Dallas` → `paver installation Dallas`.
- `components/Footer.tsx`, `app/about`, `app/gallery`, `app/financing`, `app/testimonials`, `app/services`, `app/service-areas/[city]` (description + keyword): drop/replace patio phrasing.

## Verification

- `npm run build` passes; `/services/patios/` absent; 5 service routes.
- Grep `[Pp]atio` over `app/`, `components/`, `lib/` → zero matches.
- Spot-check `/`, `/services/`, `/gallery/` on dev server.
