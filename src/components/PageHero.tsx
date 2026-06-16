"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
  badge?: string;
  theme?: "dark" | "light";
};

export default function PageHero({
  title,
  subtitle,
  image = "/img/mainslide2.png",
  badge,
  theme = "dark",
}: PageHeroProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`relative overflow-hidden pt-28 lg:pt-32 ${
        isLight ? "bg-orbit-50" : "bg-orbit-900"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className={`object-cover ${isLight ? "opacity-25" : "opacity-40"}`}
          priority
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-b from-white/90 via-orbit-50/95 to-orbit-50"
              : "bg-gradient-to-b from-orbit-900/80 via-orbit-900/90 to-orbit-900"
          }`}
        />
        <div className={`mesh-bg absolute inset-0 ${isLight ? "opacity-40" : ""}`} />
      </div>

      {!isLight && (
        <>
          <div className="orbit-ring left-1/2 top-20 h-72 w-72 -translate-x-1/2 opacity-30" />
          <div className="orbit-ring left-[15%] top-32 h-40 w-40 opacity-20" />
          <div className="orbit-ring right-[10%] top-40 h-56 w-56 opacity-15" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {badge && (
            <span
              className={`mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
                isLight
                  ? "border border-orbit-200 bg-orbit-100 text-orbit-700"
                  : "border border-orbit-400/30 bg-orbit-500/20 text-orbit-100"
              }`}
            >
              {badge}
            </span>
          )}
          <h1
            className={`font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${
              isLight ? "text-orbit-900" : "text-white"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl ${
              isLight ? "text-gray-600" : "text-orbit-100/75"
            }`}
          >
            {subtitle}
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${
          isLight ? "from-orbit-50 to-transparent" : "from-white to-transparent"
        }`}
      />
    </section>
  );
}
