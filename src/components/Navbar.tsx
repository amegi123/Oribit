"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

const lightThemePages = ["/products", "/why-orbit", "/about"];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightPage = lightThemePages.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const showGlass = !isHome || scrolled;
  const useLightGlass = isLightPage && showGlass;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        showGlass
          ? useLightGlass
            ? "nav-glass-light"
            : "nav-glass"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/img/logoo.png"
            alt={siteConfig.name}
            width={160}
            height={48}
            className="h-10 w-auto transition-transform group-hover:scale-105 lg:h-12"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    useLightGlass
                      ? active
                        ? "text-orbit-700"
                        : "text-orbit-800/70 hover:text-orbit-900"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        useLightGlass ? "bg-orbit-500/15" : "bg-orbit-500/30"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
          Get in Touch
        </Link>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${
            useLightGlass ? "text-orbit-800" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-t backdrop-blur-2xl md:hidden ${
              useLightGlass
                ? "nav-glass-light border-orbit-200/60"
                : "nav-glass border-white/10"
            }`}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-lg font-medium ${
                      useLightGlass
                        ? active
                          ? "bg-orbit-500/15 text-orbit-800"
                          : "text-orbit-800/85"
                        : active
                          ? "bg-orbit-500/20 text-white"
                          : "text-white/85"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="btn-primary mt-2 justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
