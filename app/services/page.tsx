import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CubeStackGraphic from "@/components/CubeStackGraphic";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services — Ravaan Labs",
  description:
    "We offer end-to-end software and AI engineering services to help you build, scale, and stay ahead.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technology. Strategy. Real Impact."
        subtitle="We offer end-to-end software and AI engineering services to help you build, scale, and stay ahead."
        imgsrc="/ravaan-services-hero.png"
        bgPosition="70% 80%"
      />
      <Services
        eyebrow="What We Offer"
        title="Comprehensive services for modern businesses."
        subtitle="From product strategy to production-grade engineering, we cover the full lifecycle."
      />
      <CTASection
        title="Let's build something great."
        subtitle="Have a project in mind? We'd love to hear from you."
        modalSubject="Let's talk about your services project"
      />
    </>
  );
}
