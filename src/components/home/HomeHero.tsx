"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { heroSlides, siteConfig } from "@/lib/data";

const fadeEase = [0.45, 0.05, 0.15, 1] as const;
const textEase = [0.4, 0, 0.2, 1] as const;

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-orbit-900">
      {heroSlides.map((s, i) => {
        const isActive = i === current;
        return (
          <motion.div
            key={s.image}
            className="absolute inset-0 will-change-[opacity]"
            style={{ zIndex: isActive ? 2 : 1 }}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1.4, ease: fadeEase }}
            aria-hidden={!isActive}
          >
            <motion.div
              className="absolute inset-0 origin-center"
              initial={false}
              animate={{
                scale: isActive ? 1.08 : 1,
              }}
              transition={{
                scale: {
                  duration: isActive ? 8 : 1.4,
                  ease: isActive ? "linear" : fadeEase,
                },
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-orbit-900 via-orbit-900/75 to-orbit-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-orbit-900 via-transparent to-orbit-900/50" />
          </motion.div>
        );
      })}

      <div className="orbit-ring right-[8%] top-[18%] hidden h-[420px] w-[420px] opacity-25 lg:block" />
      <div className="orbit-ring right-[12%] top-[22%] hidden h-[320px] w-[320px] opacity-15 lg:block" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-orbit-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-32 pt-28 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65, ease: textEase }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-block rounded-full border border-orbit-400/30 bg-orbit-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orbit-100 backdrop-blur-sm">
              {siteConfig.name}
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              <span className="block">{slide.title.split(" ").slice(0, 2).join(" ")}</span>
              <span className="gradient-text mt-1 block">
                {slide.title.split(" ").slice(2).join(" ") || "Starts Here"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              {slide.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-ghost">
                <Play size={14} className="fill-white" />
                Our Story
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between lg:left-8 lg:right-8">
          <div className="flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: textEase }}
                className="hidden font-display text-5xl font-bold text-white/20 sm:block"
              >
                {String(current + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === current ? "w-12 bg-orbit-400" : "w-4 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
