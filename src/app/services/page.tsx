"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Bot, Search, Zap, Headphones } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import WordReveal from "@/components/ui/WordReveal";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Custom Websites",
    tagline: "From single-page to full e-commerce.",
    description:
      "We design and build websites from scratch — no templates, no shortcuts. Every layout is crafted around your brand, your audience, and your goals.",
    includes: [
      "UX/UI design",
      "Responsive development",
      "CMS integration",
      "Performance optimization",
      "SEO foundation",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    tagline: "Logo, palette, typography, voice.",
    description:
      "Your brand is how people feel about you before they read a word. We build visual systems that are coherent, distinctive, and built to last.",
    includes: [
      "Logo design",
      "Color system",
      "Typography selection",
      "Brand guidelines",
      "Social media kit",
    ],
  },
  {
    icon: Bot,
    title: "AI Integration",
    tagline: "Your site works while you sleep.",
    description:
      "We embed AI where it makes real business sense — not as a gimmick, but as a genuine time-saver. Chatbots, smart forms, automated workflows.",
    includes: [
      "AI chatbot setup",
      "Smart booking systems",
      "Automated email flows",
      "Content generation tools",
      "Lead qualification AI",
    ],
  },
  {
    icon: Search,
    title: "SEO & Content",
    tagline: "Copy that ranks. Strategy that compounds.",
    description:
      "Visibility without conversion is noise. We write copy that ranks in search and convinces real humans to act — both at the same time.",
    includes: [
      "Keyword research",
      "On-page SEO",
      "Landing page copy",
      "Blog strategy",
      "Technical SEO audit",
    ],
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    tagline: "Sub-second loads. 90+ Lighthouse scores.",
    description:
      "Slow sites lose customers. We audit, refactor, and optimize until your site loads instantly — on every device, every connection.",
    includes: [
      "Core Web Vitals audit",
      "Image & asset optimization",
      "Code splitting",
      "CDN configuration",
      "Caching strategy",
    ],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    tagline: "We stay with you after launch.",
    description:
      "Most agencies disappear after launch. We don't. Monthly retainers cover updates, new features, bug fixes, and strategic reviews.",
    includes: [
      "Priority bug fixes",
      "Content updates",
      "Monthly performance report",
      "Feature additions",
      "Direct Slack access",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 md:mb-24">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-label-sm mb-4 block"
              style={{ color: "#af88ff" }}
            >
              What We Do
            </motion.span>
            <h1 className="text-display-lg text-on-surface mb-6">
              <WordReveal text="Services" delay={0.1} />
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              Every service is designed to move your business forward. No padding, no fluff — just work that performs.
            </p>
          </div>
        </FadeUp>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, tagline, description, includes }, i) => (
            <FadeUp key={title} delay={i * 0.06}>
              <div
                className="rounded-2xl p-8 md:p-10 h-full"
                style={{ backgroundColor: "#111113" }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(175,136,255,0.08)" }}
                  >
                    <Icon size={24} style={{ color: "#af88ff" }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-surface mb-1">{title}</h2>
                    <p className="text-sm text-on-surface-variant">{tagline}</p>
                  </div>
                </div>

                <p className="text-body-md text-on-surface-variant mb-6">{description}</p>

                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <p className="text-label-sm mb-3" style={{ color: "rgba(175,136,255,0.6)" }}>
                    What&apos;s included
                  </p>
                  <ul className="flex flex-col gap-2">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span style={{ color: "#af88ff", fontSize: "0.5rem" }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA strip */}
        <FadeUp delay={0.2}>
          <div
            className="mt-16 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: "#111113", border: "1px solid rgba(175,136,255,0.1)" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Not sure what you need?</h3>
              <p className="text-on-surface-variant">We&apos;ll figure it out together on a free 30-minute call.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-8 py-4 rounded-full font-medium text-base transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: "#c6c6ce", color: "#3e4046" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8b8c0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c6c6ce")}
            >
              Book a call
            </Link>
          </div>
        </FadeUp>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
