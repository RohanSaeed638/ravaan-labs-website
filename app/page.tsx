import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import ProductShowcase from "@/components/ProductShowcase";
import StatsBar from "@/components/StatsBar";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <ProductShowcase />
      <StatsBar />
      <Process />
      <CTASection />
    </>
  );
}
