"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisible(true);
    setProgress(12);

    const step1 = window.setTimeout(() => setProgress(45), 80);
    const step2 = window.setTimeout(() => setProgress(72), 200);
    const step3 = window.setTimeout(() => setProgress(88), 350);
    const step4 = window.setTimeout(() => setProgress(100), 500);
    const hide = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 750);

    return () => {
      window.clearTimeout(step1);
      window.clearTimeout(step2);
      window.clearTimeout(step3);
      window.clearTimeout(step4);
      window.clearTimeout(hide);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 bg-orbit-100/50"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-orbit-400 via-orbit-500 to-orbit-400 shadow-[0_0_12px_rgba(0,119,200,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
