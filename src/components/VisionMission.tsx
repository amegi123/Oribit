"use client";

import { motion } from "framer-motion";
import { Eye, Target, Rocket } from "lucide-react";
import { pillars } from "@/lib/data";

const icons = { eye: Eye, target: Target, rocket: Rocket };

const accents = [
  "from-orbit-100 to-white",
  "from-white to-orbit-50",
  "from-orbit-50 to-orbit-100",
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orbit-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-label">Our Purpose</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl">
            Vision, Mission & Goal
          </h2>
          <p className="mt-4 text-gray-600">
            The principles that guide everything we do for Ethiopian families.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`group relative overflow-hidden rounded-3xl border border-orbit-100 bg-gradient-to-br ${accents[i]} p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:border-orbit-200 hover:shadow-xl`}
              >
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-orbit-200/30 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-orbit-100 bg-white p-3.5 text-orbit-600 shadow-sm transition-colors group-hover:border-orbit-500 group-hover:bg-orbit-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-orbit-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-orbit-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
