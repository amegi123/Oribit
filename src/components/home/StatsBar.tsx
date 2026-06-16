"use client";

import { stats } from "@/lib/data";

export default function StatsBar() {
  const items = [...stats, ...stats];

  return (
    <section className="relative overflow-hidden border-y border-orbit-100 bg-white py-5">
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="relative flex animate-marquee gap-12 whitespace-nowrap">
        {items.map((stat, i) => (
          <div key={`${stat.label}-${i}`} className="flex shrink-0 items-center gap-12">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-bold text-orbit-600">{stat.value}</span>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                {stat.label}
              </span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-orbit-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
