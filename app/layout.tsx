import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Concrete Contractor Dallas–Fort Worth | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "CureCraft Concrete is DFW's premium concrete contractor — driveways, patios, pavers, stamped & decorative concrete, and repair. Licensed & insured. Free estimates.",
  keywords: [
    "concrete contractor Dallas",
    "concrete contractor Fort Worth",
    "stamped concrete DFW",
    "concrete patio Dallas",
    "concrete driveway Dallas",
    "concrete company near me",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `Concrete Contractor Dallas–Fort Worth | ${site.name}`,
    description: "Premium driveways, patios, stamped & decorative concrete across the DFW Metroplex. Free estimates.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "CureCraft Concrete logo" }],
  },
  twitter: {
    card: "summary",
    title: `Concrete Contractor Dallas–Fort Worth | ${site.name}`,
    description: "Premium driveways, patios, stamped & decorative concrete across the DFW Metroplex. Free estimates.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/logo.png`,
  logo: `${site.url}/logo.png`,
  description:
    "Premium concrete contractor serving the Dallas–Fort Worth Metroplex. Driveways, patios, pavers, stamped and decorative concrete, sidewalks, and concrete repair.",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "State", name: "Texas" },
  openingHours: "Mo-Sa 07:00-19:00",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-iron focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-14 sm:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
