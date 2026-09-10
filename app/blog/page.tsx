import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogExplorer from "@/components/BlogExplorer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog — Ravaan Labs",
  description:
    "Thoughts, updates, and learnings from the world of software, AI, and product development.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, tech, and trends from our team."
        subtitle="Thoughts, updates, and learnings from the world of software, AI, and product development."
        imgsrc="/ravaan-blogs-hero.png"
        bgPosition="bottom center"
      />
      <BlogExplorer />
      <CTASection />
    </>
  );
}
