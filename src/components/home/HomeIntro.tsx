"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeFeatures } from "@/lib/data";

const icons: Record<string, string> = {
  shield: "🛡️",
  sparkles: "✨",
  headphones: "🎧",
  tag: "💎",
};

export default function HomeIntro() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mesh-bg absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-orbit-900/15">
              <Image
                src="/img/home1.png"
                alt="Orbit refrigerator"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:block">
              <Image src="/img/1.jpeg" alt="Orbit TV" width={180} height={180} className="h-36 w-36 object-cover" />
            </div>
            <div className="absolute -left-4 top-8 rounded-2xl bg-orbit-gradient px-5 py-4 text-white shadow-xl">
              <p className="font-display text-2xl font-bold">15+</p>
              <p className="text-xs text-orbit-100">Years of expertise</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Welcome to Orbit</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl lg:text-5xl">
              Elevating Ethiopian Homes with{" "}
              <span className="gradient-text">World-Class Electronics</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Orbit Electronics Ethiopia brings premium home appliances to families
              across the country — combining global quality, modern design, and
              trusted local support.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {homeFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card-light group p-5 transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="text-2xl">{icons[item.icon]}</span>
                  <h3 className="mt-3 font-display font-semibold text-orbit-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-secondary mt-10">
              Discover Our Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
