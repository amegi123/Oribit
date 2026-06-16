"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

type LoadingScreenProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export default function LoadingScreen({
  variant = "light",
  compact = false,
}: LoadingScreenProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${
        compact ? "min-h-[55vh] py-16" : "min-h-[70vh] py-24"
      } ${isDark ? "bg-orbit-900" : "bg-orbit-50"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={`mesh-bg absolute inset-0 ${isDark ? "opacity-30" : "opacity-70"}`} />

      <div className="relative flex flex-col items-center">
        {/* Orbital rings */}
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          <motion.div
            className={`absolute inset-0 rounded-full border-2 border-dashed ${
              isDark ? "border-orbit-400/40" : "border-orbit-300/60"
            }`}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className={`absolute inset-3 rounded-full border ${
              isDark ? "border-orbit-500/50" : "border-orbit-400/40"
            }`}
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className={`absolute inset-7 rounded-full border-2 ${
              isDark ? "border-orbit-300/30" : "border-orbit-500/25"
            }`}
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Orbiting dot */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          >
            <span
              className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-lg ${
                isDark ? "bg-orbit-300 shadow-orbit-400/50" : "bg-orbit-500 shadow-orbit-500/40"
              }`}
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/img/logoo.png"
                alt={siteConfig.name}
                width={140}
                height={42}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div
          className={`mt-10 h-1 w-48 overflow-hidden rounded-full sm:w-56 ${
            isDark ? "bg-orbit-800" : "bg-orbit-100"
          }`}
        >
          <motion.div
            className={`h-full w-1/3 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-orbit-400 to-orbit-300"
                : "bg-gradient-to-r from-orbit-500 to-orbit-400"
            }`}
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Loading dots */}
        <div className="mt-6 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`h-2 w-2 rounded-full ${isDark ? "bg-orbit-400" : "bg-orbit-500"}`}
              animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
          <span
            className={`ml-2 text-sm font-medium tracking-wide ${
              isDark ? "text-orbit-200" : "text-orbit-600"
            }`}
          >
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
