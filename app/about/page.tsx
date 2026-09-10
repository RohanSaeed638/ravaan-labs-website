import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OurStory from "@/components/OurStory";
import TeamGrid from "@/components/TeamGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — Ravaan Labs",
  description:
    "We're a team of builders, thinkers, and problem-solvers focused on creating technology that makes a real impact.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building intelligent products for a better tomorrow."
        subtitle="We're a team of builders, thinkers, and problem-solvers, focused on creating technology that makes a real impact."
        imgsrc="/ravaan-about-hero.png"
        bgPosition="70% center"
      />
      <OurStory />
      <TeamGrid />
      <CTASection />
    </>
  );
}
