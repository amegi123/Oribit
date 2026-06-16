import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyChoose from "@/components/WhyChoose";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Why Orbit | Orbit Electronics Ethiopia",
  description:
    "Discover why Orbit is the smart choice — 15+ years experience, globally recognized quality, competitive pricing, and reliable support in Ethiopia.",
};

export default function WhyOrbitPage() {
  return (
    <main className="bg-orbit-50">
      <PageHero
        theme="light"
        badge="Why Orbit"
        title="The Smart Choice for Ethiopian Homes"
        subtitle="Globally recognized quality, competitive pricing, and a strong local presence — backed by over 15 years of industry expertise."
        image="/img/8.jpeg"
      />
      <WhyChoose showHeader={false} />
      <CTABanner variant="light" />
    </main>
  );
}
