import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the CureCraft Concrete website.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms/" }]} />
      <section className="wrap max-w-3xl py-12 sm:py-16">
        <h1 className="display-xl text-4xl">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-graphite">
          <p><strong>Effective date:</strong> January 1, 2026</p>
          <p>By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2 className="display-xl pt-2 text-xl">Website content</h2>
          <p>Content on this site is provided for general information about {site.legalName} and its services. Project descriptions, timelines, and process details are illustrative; the specifics of your project are governed solely by your written estimate and contract.</p>
          <h2 className="display-xl pt-2 text-xl">Estimates</h2>
          <p>Estimate requests submitted through this site are inquiries, not contracts. Pricing and scope are only binding once documented in a signed written agreement.</p>
          <h2 className="display-xl pt-2 text-xl">Intellectual property</h2>
          <p>All site content, including text, design, logos, and imagery, is the property of {site.legalName} and may not be reproduced without written permission.</p>
          <h2 className="display-xl pt-2 text-xl">Limitation of liability</h2>
          <p>This website is provided &ldquo;as is.&rdquo; To the fullest extent permitted by law, {site.legalName} is not liable for damages arising from use of the site or reliance on its general informational content.</p>
          <h2 className="display-xl pt-2 text-xl">Changes</h2>
          <p>We may update these terms at any time by posting a revised version here. Continued use of the site constitutes acceptance of the current terms.</p>
          <h2 className="display-xl pt-2 text-xl">Contact</h2>
          <p>{site.legalName} · {site.serviceArea} · {site.email} · {site.phone}</p>
        </div>
      </section>
    </>
  );
}
