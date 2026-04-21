"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Glow expands as section enters */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(175,136,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-label-sm mb-6 block"
          style={{ color: "rgba(175,136,255,0.6)" }}
        >
          Ready to start?
        </motion.div>

        <h2 className="text-display-md text-on-surface mb-6 leading-tight">
          <WordReveal text="Better work." delay={0.15} />
          {" "}
          <span style={{ color: "#af88ff" }}>
            <WordReveal text="Honest pricing." delay={0.3} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto"
        >
          We replaced bloated processes with AI-powered workflows. The savings go to you, not to overhead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            className="px-10 py-4 rounded-full font-medium text-base min-h-[52px] transition-colors duration-200"
            style={{
              backgroundColor: "#c6c6ce",
              color: "#3e4046",
              boxShadow: "0 0 40px rgba(175,136,255,0.18)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8b8c0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c6c6ce")
            }
          >
            Start your project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
