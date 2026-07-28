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
          <p><strong>Effective date:</strong> July 27, 2026</p>
          <p>{site.legalName} (&ldquo;CureCraft,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates {site.url.replace("https://", "")} and provides concrete construction services in the {site.serviceArea}. We respect your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have.</p>

          <h2 className="display-xl pt-2 text-xl">Information we collect</h2>
          <p><strong>Information you provide.</strong> When you request an estimate, fill out a form, call, text, or email us, we collect the information you choose to share: your name, phone number, email address, project address, and details about your project.</p>
          <p><strong>Information collected automatically.</strong> Like most websites, our hosting provider collects standard technical data when you visit — such as your IP address, browser type, device type, referring pages, and pages visited. This data is used for site performance, security, and troubleshooting.</p>

          <h2 className="display-xl pt-2 text-xl">How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to your inquiry and provide the estimate you requested</li>
            <li>Schedule site visits and prepare project quotes</li>
            <li>Perform and manage contracted work</li>
            <li>Communicate with you about your project by phone, text message, or email</li>
            <li>Maintain business records and comply with legal obligations</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="display-xl pt-2 text-xl">Text messaging (SMS)</h2>
          <p>If you provide your phone number and consent to be contacted, we may send you text messages about your estimate request or project — for example, scheduling confirmations and follow-ups. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying <strong>STOP</strong>, or get help by replying <strong>HELP</strong>. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</p>

          <h2 className="display-xl pt-2 text-xl">What we don&apos;t do</h2>
          <p>We do not sell your personal information, and we do not share it with third parties for their own marketing. We only share information with service providers necessary to operate our business — such as our website hosting and form-processing provider — or where required by law, such as in response to a valid legal request.</p>

          <h2 className="display-xl pt-2 text-xl">Cookies</h2>
          <p>This website does not use advertising or tracking cookies. Our hosting provider may set strictly necessary cookies or collect server logs needed to deliver the site securely.</p>

          <h2 className="display-xl pt-2 text-xl">Data retention</h2>
          <p>We retain inquiry and project records for as long as needed for legitimate business purposes — such as honoring warranties, maintaining project history, and meeting legal, tax, and insurance requirements — and then delete or anonymize them.</p>

          <h2 className="display-xl pt-2 text-xl">Your choices &amp; rights</h2>
          <p>You may at any time:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Request access to the personal information we hold about you</li>
            <li>Request that we correct or delete your personal information</li>
            <li>Opt out of phone, text, or email communications</li>
          </ul>
          <p>To make a request, contact us at {site.email} or {site.phone}. We will respond within a reasonable timeframe and verify your identity before fulfilling access or deletion requests.</p>

          <h2 className="display-xl pt-2 text-xl">Children&apos;s privacy</h2>
          <p>Our services and website are intended for adults. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us information, contact us and we will delete it.</p>

          <h2 className="display-xl pt-2 text-xl">Third-party links</h2>
          <p>This website may link to third-party sites (such as review platforms or maps). We are not responsible for the privacy practices of those sites, and we encourage you to review their policies.</p>

          <h2 className="display-xl pt-2 text-xl">Changes to this policy</h2>
          <p>We may update this policy from time to time. The current version will always be posted on this page with its effective date. Continued use of the site after changes are posted constitutes acceptance of the updated policy.</p>

          <h2 className="display-xl pt-2 text-xl">Contact us</h2>
          <p>Questions about this policy or your information can be directed to:</p>
          <p>
            {site.legalName}<br />
            {site.serviceArea}<br />
            <a href={site.phoneHref} className="font-semibold text-iron underline underline-offset-2">{site.phone}</a><br />
            <a href={`mailto:${site.email}`} className="font-semibold text-iron underline underline-offset-2">{site.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
