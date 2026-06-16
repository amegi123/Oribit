"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

type CTABannerProps = {
  variant?: "dark" | "light";
};

export default function CTABanner({ variant = "dark" }: CTABannerProps) {
  const isLight = variant === "light";

  return (
    <section className={`py-16 lg:py-20 ${isLight ? "bg-orbit-50" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden rounded-[2rem] px-8 py-14 lg:px-16 lg:py-20 ${
            isLight
              ? "border border-orbit-100 bg-white shadow-xl shadow-orbit-900/5"
              : "bg-orbit-gradient"
          }`}
        >
          {!isLight && (
            <>
              <div className="orbit-ring right-[10%] top-[15%] h-64 w-64 opacity-20" />
              <div className="orbit-ring right-[18%] top-[25%] h-40 w-40 opacity-15" />
            </>
          )}

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span
                className={`text-sm font-semibold uppercase tracking-widest ${
                  isLight ? "text-orbit-500" : "text-orbit-200"
                }`}
              >
                Ready to upgrade?
              </span>
              <h2
                className={`mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${
                  isLight ? "text-orbit-900" : "text-white"
                }`}
              >
                Bring Orbit Home Today
              </h2>
              <p className={`mt-4 max-w-lg ${isLight ? "text-gray-600" : "text-orbit-100/80"}`}>
                Visit our showroom in Piassa or reach out — our team is ready to
                help you find the perfect appliances.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={
                    isLight
                      ? "btn-primary"
                      : "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-orbit-900 transition hover:bg-orbit-50"
                  }
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className={isLight ? "btn-secondary" : "btn-ghost"}
                >
                  <Phone size={16} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="relative hidden aspect-video overflow-hidden rounded-2xl border border-orbit-100 lg:block">
              <Image
                src="/img/2.jpeg"
                alt="Orbit showroom products"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
