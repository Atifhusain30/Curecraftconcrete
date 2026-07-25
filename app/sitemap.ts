import type { MetadataRoute } from "next";
import { site, services, cities } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "about", "services", "gallery", "testimonials", "service-areas", "faqs", "contact", "privacy", "terms"];
  return [
    ...staticPages.map((p) => ({
      url: `${site.url}/${p ? `${p}/` : ""}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cities.map((c) => ({
      url: `${site.url}/service-areas/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
