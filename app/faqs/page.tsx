import type { Metadata } from "next";
import { globalFaqs } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FaqList from "@/components/FaqList";
import FaqSchema from "@/components/FaqSchema";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQs | Concrete Questions, Answered Straight",
  description:
    "Estimates, warranties, scheduling, cure times, and more — answers to the questions DFW homeowners ask before hiring a concrete contractor.",
  alternates: { canonical: "/faqs/" },
};

export default function FaqsPage() {
  return (
    <>
      <FaqSchema faqs={globalFaqs} />
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "FAQs", href: "/faqs/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="FAQs"
          title="Ask us anything — here's a head start"
          lead="The questions we hear most from homeowners across the Metroplex. Don't see yours? Call or send the form and we'll answer it directly."
        />
        <div className="mt-10 max-w-3xl">
          <FaqList faqs={globalFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
