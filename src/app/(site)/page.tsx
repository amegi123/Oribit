import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import StatsBar from "@/components/home/StatsBar";
import HomeIntro from "@/components/home/HomeIntro";
import ProductPreview from "@/components/home/ProductPreview";
import WhyPreview from "@/components/home/WhyPreview";
import CTABanner from "@/components/home/CTABanner";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Quality Electronics for Ethiopia`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <StatsBar />
      <HomeIntro />
      <ProductPreview />
      <WhyPreview />
      <CTABanner />
    </main>
  );
}
