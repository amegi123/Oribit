"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { heroSlides } from "@/lib/data";

const fadeEase = [0.45, 0.05, 0.15, 1] as const;
const textEase = [0.4, 0, 0.2, 1] as const;

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const directionRef = useRef(1);

  const goTo = useCallback((index: number) => {
    directionRef.current = index > current ? 1 : -1;
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    directionRef.current = 1;
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    directionRef.current = -1;
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];
  const direction = directionRef.current;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-orbit-900">
      {heroSlides.map((s, i) => {
        const isActive = i === current;
        return (
          <motion.div
            key={s.image}
            className="absolute inset-0 will-change-[opacity,transform,filter]"
            style={{ zIndex: isActive ? 2 : 1 }}
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? "0%" : `${direction * 6}%`,
              scale: isActive ? 1 : 1.06,
              filter: isActive ? "blur(0px)" : "blur(10px)",
            }}
            transition={{
              opacity: { duration: 1.2, ease: fadeEase },
              x: { duration: 1.2, ease: fadeEase },
              scale: { duration: 1.2, ease: fadeEase },
              filter: { duration: 0.9, ease: "easeOut" },
            }}
            aria-hidden={!isActive}
          >
            <motion.div
              className="absolute inset-[-4%] origin-center"
              initial={false}
              animate={{
                scale: isActive ? 1.12 : 1.05,
                x: isActive ? "0%" : `${direction * 2}%`,
              }}
              transition={{
                scale: {
                  duration: isActive ? 8 : 1.2,
                  ease: isActive ? "linear" : fadeEase,
                },
                x: { duration: 1.2, ease: fadeEase },
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

            {/* Lighter overlays — images show through more */}
            <div className="absolute inset-0 bg-gradient-to-r from-orbit-900/45 via-orbit-900/25 to-orbit-900/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-orbit-900/55 via-orbit-900/10 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        );
      })}

      <div className="orbit-ring right-[8%] top-[18%] hidden h-[420px] w-[420px] opacity-20 lg:block" />
      <div className="orbit-ring right-[12%] top-[22%] hidden h-[320px] w-[320px] opacity-10 lg:block" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-orbit-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-32 pt-28 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.55, ease: textEase }}
            className="max-w-xl"
          >
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              Orbit Ethiopia
            </span>

            <h1 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">{slide.title.split(" ").slice(0, 2).join(" ")}</span>
              <span className="mt-0.5 block text-orbit-200">
                {slide.title.split(" ").slice(2).join(" ") || "Starts Here"}
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary !px-6 !py-3 text-sm">
                Explore Products
                <ArrowRight size={15} />
              </Link>
              <Link href="/about" className="btn-ghost !px-6 !py-3 text-sm">
                <Play size={13} className="fill-white" />
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
                className="hidden font-display text-3xl font-bold text-white/25 sm:block"
              >
                {String(current + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === current ? "w-10 bg-orbit-300" : "w-3.5 bg-white/30 hover:bg-white/50"
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
