"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brandValues, stats } from "@/lib/data";

const journey = [
  {
    year: "15+ Years",
    title: "Industry Experience",
    desc: "Deep knowledge of electronics brands, strengths, and market needs across Ethiopia.",
  },
  {
    year: "Research",
    title: "Market Analysis",
    desc: "Thorough research led us to partner exclusively with Orbit Electronics.",
  },
  {
    year: "4+ Years",
    title: "Premium Presence",
    desc: "Orbit established a trusted premium brand presence in the local market.",
  },
  {
    year: "Today",
    title: "Growing Forward",
    desc: "Delivering world-class products with exceptional customer service nationwide.",
  },
];

type AboutProps = {
  showHeader?: boolean;
};

export default function About({ showHeader = true }: AboutProps) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-orbit-50 ${
          showHeader ? "py-24 lg:py-32" : "pb-20 pt-10 lg:pb-28 lg:pt-14"
        }`}
      >
        <div className="mesh-bg absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              {showHeader && (
                <>
                  <span className="section-label">About Us</span>
                  <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl">
                    Ethiopia&apos;s Trusted Orbit Partner
                  </h2>
                </>
              )}
              {!showHeader && (
                <span className="section-label">Our Story</span>
              )}
              <h3
                className={`font-display text-2xl font-bold text-orbit-900 sm:text-3xl ${
                  showHeader ? "mt-6" : "mt-3"
                }`}
              >
                Quality Electronics for a{" "}
                <span className="gradient-text">Better Life</span>
              </h3>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Orbit Electronics Ethiopia is a leading electronics distributor
                committed to providing high-quality and innovative home appliances
                and electronic products to the Ethiopian market.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Before selecting Orbit as our flagship brand, we spent more than
                15 years in the electronics industry. After thorough research and
                detailed market analysis, we chose to exclusively work with Orbit
                Electronics — exceptional quality, modern design, and continuous
                innovation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-orbit-100 bg-white/80 p-4 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="font-display text-2xl font-bold text-orbit-600">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="relative col-span-12 aspect-[16/10] overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-lg sm:col-span-8">
                  <Image
                    src="/img/2.jpeg"
                    alt="Orbit product lineup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div className="relative col-span-12 aspect-[4/3] overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-lg sm:col-span-4">
                  <Image
                    src="/img/home1.png"
                    alt="Orbit refrigerator"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
                <div className="relative col-span-6 aspect-square overflow-hidden rounded-2xl border border-orbit-100 bg-white shadow-md">
                  <Image
                    src="/img/5.jpeg"
                    alt="Orbit appliances"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative col-span-6 flex flex-col justify-center rounded-2xl border border-orbit-100 bg-gradient-to-br from-orbit-100 to-white p-5 shadow-md">
                  <p className="font-display text-4xl font-bold text-orbit-600">4+</p>
                  <p className="mt-1 text-sm font-semibold text-orbit-800">
                    Years Premium Brand in Ethiopia
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    Trusted by families across the country.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="border-y border-orbit-100 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">Our Journey</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl">
              From Experience to Excellence
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-orbit-200 to-transparent md:block" />
            <div className="grid gap-6 md:grid-cols-4">
              {journey.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl border border-orbit-100 bg-orbit-50/80 p-6 transition-all hover:-translate-y-1 hover:border-orbit-200 hover:bg-white hover:shadow-lg"
                >
                  <span className="inline-block rounded-full bg-orbit-500 px-3 py-1 text-xs font-semibold text-white">
                    {step.year}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-orbit-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand values - light bento */}
      <section className="relative overflow-hidden bg-orbit-50 py-20 lg:py-28">
        <div className="mesh-bg absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">About Orbit Electronics</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl">
                A Global Brand, A Local Commitment
              </h2>
              <p className="mt-5 leading-relaxed text-gray-600">
                Orbit Electronics is a global distributor of electronic and home
                appliance products. Over the past four years, Orbit has established
                a premium brand presence in Ethiopia, making its products accessible
                through consistent quality and customer trust.
              </p>
              <Link href="/products" className="btn-primary mt-8">
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {brandValues.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex items-start gap-3 rounded-2xl border border-orbit-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orbit-200 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orbit-100 text-xs font-bold text-orbit-600 transition-colors group-hover:bg-orbit-500 group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-orbit-900">{value}</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-orbit-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
