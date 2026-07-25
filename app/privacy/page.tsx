import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CureCraft Concrete collects, uses, and protects your information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy/" }]} />
      <section className="wrap max-w-3xl py-12 sm:py-16">
        <h1 className="display-xl text-4xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-graphite">
          <p><strong>Effective date:</strong> January 1, 2026</p>
          <p>{site.legalName} (&ldquo;CureCraft,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what we collect through this website and how we use it.</p>
          <h2 className="display-xl pt-2 text-xl">Information we collect</h2>
          <p>When you request an estimate or contact us, we collect the information you provide: name, phone number, email address, project address, and project details. We also collect standard technical data (such as browser type and pages visited) through our hosting provider for site performance and security.</p>
          <h2 className="display-xl pt-2 text-xl">How we use it</h2>
          <p>We use your information to respond to your inquiry, schedule and prepare estimates, perform contracted work, and communicate about your project. If you consent, we may contact you by phone, text, or email about your request.</p>
          <h2 className="display-xl pt-2 text-xl">What we don&apos;t do</h2>
          <p>We do not sell your personal information. We do not share it with third parties except service providers necessary to operate our business (such as our website host) or where required by law.</p>
          <h2 className="display-xl pt-2 text-xl">Data retention &amp; your choices</h2>
          <p>We retain inquiry and project records as needed for business and legal purposes. You may request access to or deletion of your personal information, or opt out of communications, by contacting us at {site.email} or {site.phone}.</p>
          <h2 className="display-xl pt-2 text-xl">Contact</h2>
          <p>Questions about this policy can be directed to {site.legalName}, {site.serviceArea} — {site.email}.</p>
        </div>
      </section>
    </>
  );
}
