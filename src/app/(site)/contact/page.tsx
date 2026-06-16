import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Orbit Electronics Ethiopia",
  description:
    "Visit Orbit Electronics Ethiopia in Piassa, Addis Ababa or reach us by phone and email.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Contact"
        title="We'd Love to Hear From You"
        subtitle="Visit our showroom in Piassa or send us a message — our team is ready to help you find the perfect Orbit products."
        image="/img/5.jpeg"
      />
      <Contact showHeader={false} />
    </main>
  );
}
