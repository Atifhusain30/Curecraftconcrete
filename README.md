# CureCraft Concrete — Website

Premium concrete contractor website for the Dallas–Fort Worth Metroplex. Built with Next.js (static export), TypeScript, and Tailwind CSS. Deploys to Netlify with zero server code.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build + preview of the exact static output Netlify serves:

```bash
npm run build      # outputs static site to /out
npm run start      # serves /out at http://localhost:3000
```

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build settings are auto-read from `netlify.toml` (build: `npm run build`, publish: `out`).
4. After the first deploy, go to **Forms** in the Netlify dashboard — the `quote` form is auto-detected. Add an email notification under **Forms → Notifications** so leads land in your inbox.
5. Optional: enable reCAPTCHA on the form in Netlify's form settings (the honeypot is already in place).

## Before launch — replace placeholders

All business facts live in **one file**: `lib/data.ts`.

- [ ] `site.phone` / `site.phoneHref` — currently a `555` placeholder
- [ ] `site.email` and `site.url` (set the real domain; it drives canonical URLs, sitemap, and schema)
- [ ] `site.yearsInBusiness`, `projectsCompleted`, `warrantyYears` — set true numbers
- [ ] `testimonials` — replace the sample reviews with real customer reviews
- [ ] Gallery photos: `galleryProjects` currently renders styled placeholder tiles. Drop real photos into `/public/projects/` and swap the tile `div` in `app/gallery/GalleryGrid.tsx` (and the home-page preview) for `<Image>` tags with descriptive `alt` text.
- [ ] Review `/privacy` and `/terms` with your attorney.

## Architecture

- `lib/data.ts` — single source of truth: services, cities, FAQs, testimonials, site config
- `app/services/[slug]/` — service page template (add a service = add one object to `services`)
- `app/service-areas/[city]/` — city landing page template (add a city = add one object to `cities`)
- `components/` — design system: Header, Footer, QuoteForm (Netlify), FaqList, CtaBand, Reveal, etc.
- SEO: per-page metadata, canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList)

## Adding a city page

Append one object to `cities` in `lib/data.ts` with unique `intro`, `localNote`, and `faqs`. The page, sitemap entry, footer link, and homepage chip all generate automatically.
