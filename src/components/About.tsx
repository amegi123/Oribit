"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandValues, stats } from "@/lib/data";

type AboutProps = {
  showHeader?: boolean;
};

export default function About({ showHeader = true }: AboutProps) {
  return (
    <section className={`relative overflow-hidden bg-white ${showHeader ? "py-24 lg:py-32" : "pb-24 pt-8 lg:pb-32 lg:pt-12"}`}>      <div className="pointer-events-none absolute inset-0 bg-orbit-radial" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {showHeader && (
              <>
                <span className="section-label">About Us</span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl lg:text-5xl">
                  Ethiopia&apos;s Trusted Orbit Partner
                </h2>
              </>
            )}
            <p className={`text-lg leading-relaxed text-gray-600 ${showHeader ? "mt-6" : "mt-2"}`}>
              Orbit Electronics Ethiopia is a leading electronics distributor
              committed to providing high-quality and innovative home appliances
              and electronic products to the Ethiopian market.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Before selecting Orbit as our flagship brand, we spent more than
              15 years in the electronics industry. After thorough research and
              detailed market analysis, we chose to exclusively work with Orbit
              Electronics products — exceptional quality, modern design, and
              continuous innovation.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-orbit-50 p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-orbit-600 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-orbit-900/20">
              <Image
                src="/img/2.jpeg"
                alt="Orbit product lineup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden overflow-hidden rounded-2xl shadow-xl lg:block">
              <Image
                src="/img/5.jpeg"
                alt="Orbit appliances"
                width={200}
                height={200}
                className="h-40 w-40 object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-orbit-gradient p-6 text-white shadow-xl">
              <p className="font-display text-3xl font-bold">4+</p>
              <p className="text-sm text-orbit-100">Years Premium Brand in Ethiopia</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-3xl bg-orbit-900 p-8 lg:p-12"
        >
          <h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
            About Orbit Electronics
          </h3>
          <p className="mt-4 max-w-3xl text-orbit-100/80">
            Orbit Electronics is a global distributor of electronic and home
            appliance products. Over the past four years, Orbit has established
            a premium brand presence in Ethiopia, making its products accessible
            to the local market through consistent quality and customer trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {brandValues.map((value) => (
              <span
                key={value}
                className="rounded-full border border-orbit-400/30 bg-orbit-800/50 px-4 py-2 text-sm font-medium text-orbit-100"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
