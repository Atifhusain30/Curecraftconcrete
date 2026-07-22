import Link from "next/link";
import { site } from "@/lib/data";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="wrap pt-6 text-[13px] text-steel">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden className="text-line">/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-graphite">{c.name}</span>
            ) : (
              <Link href={c.href} className="transition-colors hover:text-bronze">{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
