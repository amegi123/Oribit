import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Products | Orbit Electronics Ethiopia",
  description:
    "Explore Orbit smart TVs, refrigerators, stoves, water dispensers, washing machines, and dish washers.",
};

export default function ProductsPage() {
  return (
    <main className="bg-orbit-50">
      <PageHero
        theme="light"
        badge="Product Categories"
        title="Premium Home Appliances"
        subtitle="From crystal-clear smart TVs to energy-efficient refrigerators — discover the full Orbit range engineered for modern Ethiopian living."
        image="/img/home1.png"
      />
      <Products showHeader={false} />
      <CTABanner variant="light" />
    </main>
  );
}
