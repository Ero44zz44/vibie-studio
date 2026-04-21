"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import WordReveal from "@/components/ui/WordReveal";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 min",
    description:
      "We start by listening. What are you building, who is it for, and what does success look like? No forms, no briefs — just a conversation. By the end we'll know if we're the right fit.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    duration: "1–2 days",
    description:
      "We send a clear proposal: what we'll build, how long it'll take, and what it costs. No hidden fees, no hourly billing surprises. You approve it, we start.",
  },
  {
    number: "03",
    title: "Design",
    duration: "3–7 days",
    description:
      "We design in Figma — wireframes first, then high-fidelity visuals. You get two rounds of feedback. We move fast because we're opinionated, but we listen carefully.",
  },
  {
    number: "04",
    title: "Development",
    duration: "5–14 days",
    description:
      "We build in Next.js or the stack best suited to your needs. Code is clean, fast, and maintainable. You get a staging link to review before anything goes live.",
  },
  {
    number: "05",
    title: "Review & QA",
    duration: "2–3 days",
    description:
      "We test across browsers, screen sizes, and real devices. Lighthouse scores, accessibility checks, and a final walkthrough with you before launch day.",
  },
  {
    number: "06",
    title: "Launch",
    duration: "1 day",
    description:
      "We handle DNS, Vercel deployment, and go-live coordination. You're never left staring at a control panel you don't understand. We're there for the moment it goes live.",
  },
  {
    number: "07",
    title: "Ongoing Support",
    duration: "Ongoing",
    description:
      "Post-launch isn't the end. We offer monthly retainers for updates, new features, and strategy sessions. Most clients stay with us well beyond the first project.",
  },
];

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Left — number + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
          style={{
            backgroundColor: "rgba(175,136,255,0.1)",
            border: "1px solid rgba(175,136,255,0.2)",
            color: "#af88ff",
          }}
        >
          {step.number}
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-px flex-grow mt-2 origin-top"
            style={{ backgroundColor: "rgba(175,136,255,0.12)", minHeight: "3rem" }}
          />
        )}
      </div>

      {/* Right — content */}
      <div className="pb-10 flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-on-surface">{step.title}</h3>
          <span
            className="text-label-sm px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(175,136,255,0.08)", color: "rgba(175,136,255,0.7)" }}
          >
            {step.duration}
          </span>
        </div>
        <p className="text-body-md text-on-surface-variant max-w-xl">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 md:mb-20">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-label-sm mb-4 block"
              style={{ color: "#af88ff" }}
            >
              How We Work
            </motion.span>
            <h1 className="text-display-lg text-on-surface mb-6">
              <WordReveal text="Our Process" delay={0.1} />
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              From first call to final launch — everything is clear, fast, and collaborative. No surprises.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div>
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.1}>
          <div
            className="mt-8 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: "#111113", border: "1px solid rgba(175,136,255,0.1)" }}
          >
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Ready to get started?</h3>
              <p className="text-sm text-on-surface-variant">Most projects kick off within a week of the first call.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-8 py-4 rounded-full font-medium text-sm transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: "#c6c6ce", color: "#3e4046" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8b8c0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c6c6ce")}
            >
              Start a project
            </Link>
          </div>
        </FadeUp>
      </div>

      <div className="mt-24 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
