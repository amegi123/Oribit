"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Shield, Headphones, Globe, Sparkles, MapPin } from "lucide-react";
import { whyChoose } from "@/lib/data";

const highlights = [
  { icon: Award, title: "15+ Years", desc: "Industry expertise" },
  { icon: Shield, title: "Premium Quality", desc: "Globally recognized brand" },
  { icon: Headphones, title: "Full Support", desc: "Reliable customer care" },
];

const benefitIcons = [Award, Globe, Shield, Sparkles, Headphones, Sparkles, MapPin];

type WhyChooseProps = {
  showHeader?: boolean;
};

export default function WhyChoose({ showHeader = true }: WhyChooseProps) {
  return (
    <div className="bg-orbit-50">
      <section
        className={`relative overflow-hidden ${showHeader ? "py-24 lg:py-32" : "pb-16 pt-8 lg:pb-20 lg:pt-12"}`}
      >
        <div className="mesh-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-lg">
                  <Image
                    src="/img/7.jpeg"
                    alt="Orbit quality"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl border border-orbit-100 bg-white shadow-lg">
                  <Image
                    src="/img/8.jpeg"
                    alt="Orbit innovation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-orbit-100 bg-white px-8 py-6 text-center shadow-2xl">
                <p className="font-display text-4xl font-bold text-orbit-600">#1</p>
                <p className="text-sm text-gray-500">Choice for Quality</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              {showHeader && (
                <>
                  <span className="section-label">Why Choose Orbit</span>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl">
                    The Smart Choice for Ethiopian Homes
                  </h2>
                </>
              )}
              <p className={`text-lg text-gray-600 ${showHeader ? "mt-4" : "mt-2"}`}>
                With over 15 years of industry experience and a strong presence in
                Ethiopia, Orbit delivers world-class products you can trust.
              </p>

              <ul className="mt-8 space-y-4">
                {whyChoose.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="shrink-0 text-orbit-500" size={22} />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-orbit-100 bg-white p-4 text-center shadow-sm"
                  >
                    <item.icon className="mx-auto text-orbit-500" size={28} />
                    <p className="mt-2 font-display text-sm font-bold text-orbit-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!showHeader && (
        <section className="border-t border-orbit-100 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <span className="section-label">Our Promise</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl">
                Every Benefit, Every Detail
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item, i) => {
                const Icon = benefitIcons[i] || CheckCircle2;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group rounded-2xl border border-orbit-100 bg-orbit-50 p-6 transition-all hover:-translate-y-1 hover:border-orbit-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="inline-flex rounded-2xl bg-orbit-100 p-3 text-orbit-600 transition-colors group-hover:bg-orbit-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <p className="mt-4 font-medium text-orbit-900">{item}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <Link href="/products" className="btn-primary">
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
