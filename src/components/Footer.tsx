import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-orbit-800 text-orbit-100">
      <div className="absolute inset-0 bg-gradient-to-b from-orbit-900 to-orbit-800" />
      <div className="mesh-bg absolute inset-0 opacity-30" />
      <div className="orbit-ring left-[5%] top-[20%] h-48 w-48 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/img/logoo.png"
              alt={siteConfig.name}
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-orbit-100/70">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Pages
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-orbit-100/70 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-orbit-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-orbit-100/70">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </Link>
              </li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-orbit-700/60 pt-8 sm:flex-row">
          <p className="text-sm text-orbit-100/50">{siteConfig.copyright}</p>
          <p className="text-sm text-orbit-100/50">
            Developed by{" "}
            <a
              href="https://halink.et"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orbit-200 transition-colors hover:text-white"
            >
              Halink
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
