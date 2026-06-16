"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

export default function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hide = () => setShow(false);

    if (document.readyState === "complete") {
      const timer = window.setTimeout(hide, 600);
      return () => window.clearTimeout(timer);
    }

    window.addEventListener("load", hide);
    const fallback = window.setTimeout(hide, 2500);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-orbit-900"
        >
          <LoadingScreen variant="dark" compact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
