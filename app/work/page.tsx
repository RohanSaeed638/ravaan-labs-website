import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import TestimonialQuote from "@/components/TestimonialQuote";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work — Ravaan Labs",
  description:
    "Explore how we've helped businesses build, scale, and achieve their goals with custom software and AI solutions.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real solutions. Measurable impact."
        subtitle="Explore how we've helped businesses build, scale, and achieve their goals with custom software and AI solutions."
        imgsrc="/ravaan-work-hero.png"
        bgPosition="bottom 30%"
      />
      <CaseStudiesGrid />
      <TestimonialQuote />
      <CTASection />
    </>
  );
}
