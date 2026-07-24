import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | Concrete Work Across DFW",
  description:
    "Browse CureCraft Concrete projects across Dallas–Fort Worth: stamped patios, driveway replacements, paver installs, decorative concrete, and sidewalk repair.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Projects", href: "/gallery/" }]} />
      <section className="wrap py-12 sm:py-16">
        <SectionHeading
          eyebrow="Project gallery"
          title="Work that speaks for itself"
          lead="Filter by project type to see how CureCraft handles everything from clean broom-finish driveways to fully decorative stamped and stained work."
        />
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand title="Want your project in this gallery?" />
    </>
  );
}
