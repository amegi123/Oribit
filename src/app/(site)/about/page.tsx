import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Orbit Electronics Ethiopia",
  description:
    "Learn about Orbit Electronics Ethiopia — 15+ years of industry experience bringing premium home appliances to Ethiopian families.",
};

export default function AboutPage() {
  return (
    <main className="bg-orbit-50">
      <PageHero
        theme="light"
        badge="About Us"
        title="Ethiopia's Trusted Orbit Partner"
        subtitle="More than 15 years in the electronics industry, dedicated to delivering high-quality home appliances and exceptional service across Ethiopia."
        image="/img/2.jpeg"
      />
      <About showHeader={false} />
      <VisionMission />
      <CTABanner variant="light" />
    </main>
  );
}
