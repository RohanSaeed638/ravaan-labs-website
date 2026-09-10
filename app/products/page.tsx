import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeaturedProduct from "@/components/FeaturedProduct";
import MoreProducts from "@/components/MoreProducts";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Products — Ravaan Labs",
  description:
    "Tools for modern teams and businesses, built by Ravaan Labs.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Tools for modern teams and businesses."
        subtitle="Products built with the same engineering rigor we bring to every client project."
        imgsrc="/ravaan-products-hero.png"
        bgPosition="bottom center"
      />
      <FeaturedProduct />
      <MoreProducts />
      <CTASection />
    </>
  );
}
