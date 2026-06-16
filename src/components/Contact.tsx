"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

type ContactProps = {
  showHeader?: boolean;
};

export default function Contact({ showHeader = true }: ContactProps) {  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <section className={`relative overflow-hidden bg-orbit-50 ${showHeader ? "py-24 lg:py-32" : "pb-24 pt-8 lg:pb-32 lg:pt-12"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="section-label">Contact Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-orbit-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Have questions about our products or need assistance? We&apos;re here to help.
            </p>
          </motion.div>
        )}

        <div className={`grid gap-12 lg:grid-cols-5 ${showHeader ? "mt-16" : "mt-4"}`}>          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-3xl bg-orbit-gradient p-8 text-white shadow-xl shadow-orbit-500/20">
              <h3 className="font-display text-xl font-bold">{siteConfig.name}</h3>
              <div className="mt-8 space-y-6">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="rounded-xl bg-white/10 p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orbit-100">Address</p>
                    <p className="mt-1 text-sm leading-relaxed">{siteConfig.address}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="rounded-xl bg-white/10 p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orbit-100">Phone</p>
                    <p className="mt-1">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="rounded-xl bg-white/10 p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orbit-100">Email</p>
                    <p className="mt-1">{siteConfig.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-xl shadow-orbit-900/5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-orbit-400 focus:ring-2 focus:ring-orbit-400/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-orbit-400 focus:ring-2 focus:ring-orbit-400/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-orbit-400 focus:ring-2 focus:ring-orbit-400/20"
                  placeholder="+251 ..."
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-orbit-400 focus:ring-2 focus:ring-orbit-400/20"
                  placeholder="Product inquiry"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-orbit-400 focus:ring-2 focus:ring-orbit-400/20"
                placeholder="How can we help you?"
              />
            </div>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                <CheckCircle size={18} />
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orbit-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orbit-500/30 transition-all hover:bg-orbit-600 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
