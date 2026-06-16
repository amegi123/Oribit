"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  compact?: boolean;
  fullscreen?: boolean;
};

export default function LoadingScreen({
  compact = false,
  fullscreen = false,
}: LoadingScreenProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orbit-50 via-white to-orbit-100 ${
        fullscreen
          ? "min-h-screen"
          : compact
            ? "min-h-[55vh] py-16"
            : "min-h-[70vh] py-24"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="mesh-bg absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-orbit-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-1/4 h-40 w-40 rounded-full bg-orbit-500/15 blur-3xl" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
          <div className="absolute inset-0 rounded-full border-[3px] border-orbit-200" />
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-orbit-600 border-r-orbit-500 border-b-orbit-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2.5 rounded-full bg-gradient-to-br from-orbit-100 to-orbit-200/80"
            animate={{ scale: [1, 0.9, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orbit-500 shadow-[0_0_12px_rgba(0,119,200,0.6)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-orbit-500 shadow-sm shadow-orbit-500/40"
              animate={{ y: [0, -7, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orbit-600">
          Loading
        </p>
      </div>
    </div>
  );
}
