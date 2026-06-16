"use client";

import { motion } from "framer-motion";
import { Eye, Target, Rocket } from "lucide-react";
import { pillars } from "@/lib/data";

const icons = { eye: Eye, target: Target, rocket: Rocket };

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-orbit-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orbit-500">
            Our Purpose
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl">
            Vision, Mission & Goal
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-orbit-900/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orbit-500/10"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orbit-100 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-orbit-gradient p-3 text-white shadow-lg shadow-orbit-500/30">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-orbit-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600">
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
