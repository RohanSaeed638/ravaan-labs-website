import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Ravaan Labs",
  description:
    "Have a project in mind or want to learn more? We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's build your next big idea."
        subtitle="Have a project in mind or want to learn more? We'd love to hear from you. Send us a message and we'll get back to you soon."
        imgsrc="/ravaan-contact-hero.png"
        bgPosition="center bottom"
      />

      <section className="bg-white py-20">
        <div className="container-content grid gap-10 lg:grid-cols-[260px_1fr_260px]">
          <ContactInfo />
          <ContactForm />
          <div className="hidden flex-col items-center justify-center rounded-2xl bg-surface p-10 text-center lg:flex">
            <Image
              src="/logo-icon-only.png"
              alt=""
              aria-hidden
              width={90}
              height={90}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-lg font-bold tracking-wide text-ink">
              RAVAAN <span className="font-medium text-muted">LABS</span>
            </p>
            <p className="mt-2 text-sm font-medium text-brand-blue">
              Ideas in Motion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
