import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Quality Electronics for Ethiopia`,
  description: siteConfig.description,
  keywords: [
    "Orbit Electronics",
    "Ethiopia",
    "home appliances",
    "smart TV",
    "refrigerator",
    "washing machine",
    "Addis Ababa",
  ],
  icons: {
    icon: "/img/favi.png",
    apple: "/img/favi.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_ET",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
