# CureCraft Concrete — Niche-Focused Service Rescope & UI Evolution

**Date:** 2026-07-22
**Status:** Approved (Approach A — evolve, not restart)

## Goal

Rescope the site to a tight concrete-flatwork niche (6 services including new
Pavers) and evolve the settled contractor design so the site reads as
unmistakably concrete-specific — via a Finishes & Patterns showcase and a
job-spec callout system. Colors, fonts, layout system, and page shell stay as
settled (white bg, charcoal `iron`, gray `slab`, amber stars only, Oswald /
Source Sans 3).

## 1. Data layer (`lib/data.ts`)

### Services — trim to 6

| Keep | Slug | Notes |
|---|---|---|
| Concrete Driveways | `driveways` | unchanged content |
| Concrete Patios | `patios` | unchanged content |
| **Pavers** (NEW) | `pavers` | full new content: installation, patterns (herringbone, running bond, basket weave), base prep, sand-set vs. mortar-set, edge restraints — same content depth/shape as existing `Service` type |
| Stamped & Decorative Concrete | `stamped-concrete` | rename display name from "Stamped Concrete"; absorb decorative/stain mentions |
| Sidewalks & Walkways | `sidewalks` | unchanged content |
| Concrete Repair & Resurfacing | `concrete-repair` | unchanged content |

**Delete:** `pool-decks`, `commercial-concrete`, `residential-concrete`.
Site is not live — no redirects needed; URLs simply cease to exist.

### New `finishes` array

~6 entries `{ slug, name, bestFor, img, serviceSlug }`:
broom finish, ashlar slate stamp, wood-plank stamp, exposed aggregate,
stain & score, paver patterns. Images: Unsplash placeholders following the
existing `img()` convention, declared alongside (marked for later swap).

### New `specs` object

Site-wide job-spec stats powering the callout system:
`{ psi: "4,000+ PSI", thickness: "4–6\" slabs", reinforcement: "Steel on chairs",
base: "Compacted flex base", warrantyYears: from site.warrantyYears }`.

### Consistency sweep

- `galleryProjects`: recategorize all 12 to the 6 services (pool-deck item →
  paver or stamped project; commercial items → repair/sidewalk projects).
- `testimonials`: Dana W. "Stamped Pool Deck" → paver or stamped patio project.
- `cities`: remove/rework pool-deck and commercial references (Little Elm
  intro + FAQ, Frisco intro, Arlington FAQ, Irving intro/FAQ, at minimum —
  full grep for "pool deck", "commercial", "ADA" across city copy).
- `globalFaqs`: verify none reference dropped services.

## 2. New components

- **`SpecStrip`** (`components/SpecStrip.tsx`) — horizontal band of 4 spec
  stats (icon + value + label) in the settled visual language. Used under the
  homepage hero and on service detail pages.
- **`SpecChips`** (`components/SpecChips.tsx`) — small inline chip variant
  (e.g. "4,000 PSI · 5-yr warranty") for service cards.
- **`FinishShowcase`** (`components/FinishShowcase.tsx`) — photo grid of the
  6 finishes; each card = photo, name, one-line "best for", link to its
  service page.

## 3. Page updates

- **Homepage (`app/page.tsx`)**: services grid → 6 cards with `SpecChips`;
  new "Finishes & Patterns" section (via `FinishShowcase`) after services;
  `SpecStrip` under hero; `SERVICE_IMGS` cut to 6 incl. a paver image.
- **Service detail (`app/services/[slug]/page.tsx`)**: `materials` list
  upgraded to a "Job Specs" panel styled like job-site data; `SpecStrip`
  included.
- **Services index (`app/services/page.tsx`)**: 6-card lineup w/ chips.
- **Gallery / nav / footer / sitemap**: reflect 6-service lineup.

## 4. Out of scope

- No palette/font/layout-system changes.
- No before/after sliders, no concrete-texture backgrounds (explicitly not
  selected).
- No dedicated `/finishes` page (Approach B rejected).
- Real photography, real phone/domain, Netlify deploy — separate tasks.

## Error handling / build safety

Static export (`output: 'export'`) — `generateStaticParams` for services must
derive from the trimmed array so deleted slugs don't build. Full `npm run
build` must pass with zero references to deleted slugs (grep check).

## Testing

No test suite exists (marketing site). Verification = clean static build +
manual page walk (home, all 6 service pages, services index, gallery, one
city page) + grep for dropped-slug references.
