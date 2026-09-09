import { ContactModalProvider } from "@/components/ContactModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import ProductShowcase from "@/components/ProductShowcase";
import StatsBar from "@/components/StatsBar";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ContactModalProvider>
      <Navbar />
      <main>
        <Hero />
        {/* <LogoStrip /> */}
        <Services />
        <ProductShowcase />
        <StatsBar />
        <Process />
        {/* <Testimonials /> */}
        <CTASection />
      </main>
      <Footer />
    </ContactModalProvider>
  );
}
