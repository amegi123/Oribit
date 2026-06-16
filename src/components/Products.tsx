"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";

type ProductsProps = {
  showHeader?: boolean;
};

export default function Products({ showHeader = true }: ProductsProps) {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section
      className={`relative overflow-hidden bg-white ${showHeader ? "py-24 lg:py-32" : "pb-24 pt-8 lg:pb-32 lg:pt-12"}`}
    >
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="section-label">Product Categories</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl lg:text-5xl">
              Premium Home Appliances
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover our full range of Orbit products — engineered for quality,
              designed for modern living.
            </p>
          </motion.div>
        )}

        <div className={`grid gap-8 lg:grid-cols-12 ${showHeader ? "mt-16" : "mt-4"}`}>
          <div className="flex flex-col gap-2 lg:col-span-4">
            {products.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
                  active === i
                    ? "border-orbit-500 bg-orbit-500 text-white shadow-lg shadow-orbit-500/25"
                    : "border-orbit-100 bg-orbit-50 text-orbit-800 hover:border-orbit-200 hover:bg-orbit-100"
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight
                  size={18}
                  className={`transition-transform ${
                    active === i ? "translate-x-0 opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-xl shadow-orbit-900/5"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-square lg:aspect-auto lg:min-h-[400px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <h3 className="font-display text-2xl font-bold text-orbit-900 lg:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-gray-600">{product.tagline}</p>
                    <ul className="mt-8 space-y-3">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orbit-100">
                            <Check size={12} className="text-orbit-600" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary mt-8 w-fit">
                      Inquire Now
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative aspect-square overflow-hidden rounded-2xl border-2 transition-all ${
                active === i
                  ? "border-orbit-500 shadow-lg shadow-orbit-500/20"
                  : "border-orbit-100 hover:border-orbit-300"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="150px"
              />
              <div className="absolute inset-0 bg-orbit-900/30 transition-opacity group-hover:bg-orbit-900/15" />
              <span className="absolute bottom-2 left-2 right-2 text-center text-xs font-medium text-white drop-shadow-lg">
                {item.name.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
