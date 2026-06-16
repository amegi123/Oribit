"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductPreview() {
  return (
    <section className="relative overflow-hidden bg-orbit-50 py-24 lg:py-32">
      <div className="mesh-bg absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Collection</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl lg:text-5xl">
              Appliances for Every Room
            </h2>
          </motion.div>
          <Link href="/products" className="btn-secondary shrink-0">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[260px]">
          {products.map((product, i) => {
            const spans =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-4"
                    : i === 3
                      ? "lg:col-span-4"
                      : i === 4
                        ? "lg:col-span-4"
                        : "lg:col-span-4 lg:row-span-1";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-lg shadow-orbit-900/5 ${spans}`}
              >
                <Link href="/products" className="block h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orbit-900/75 via-orbit-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-orbit-200">
                      Orbit
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white lg:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                      {product.tagline}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-orbit-600 opacity-0 shadow-md transition-all group-hover:opacity-100">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
