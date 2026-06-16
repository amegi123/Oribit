"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whyChoose } from "@/lib/data";

export default function WhyPreview() {
  const preview = whyChoose.slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-orbit-50 via-white to-orbit-50 shadow-xl shadow-orbit-900/5">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/img/7.jpeg"
                alt="Why choose Orbit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-orbit-900/20 lg:bg-gradient-to-r lg:from-transparent lg:to-orbit-50/90" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-14">
              <span className="section-label">Why Orbit</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-orbit-900 sm:text-4xl">
                Built on Trust, Backed by Experience
              </h2>
              <p className="mt-4 text-gray-600">
                From competitive pricing to continuous innovation — Orbit is the
                smart choice for Ethiopian households.
              </p>

              <ul className="mt-8 space-y-4">
                {preview.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="shrink-0 text-orbit-500" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/why-orbit" className="btn-primary mt-10 w-fit">
                See All Benefits
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
