"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import Spotlight from "@/components/ui/Spotlight";

const SplineScene = dynamic(() => import("@/components/ui/SplineScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-2 animate-spin"
        style={{ borderColor: "rgba(175,136,255,0.2)", borderTopColor: "#af88ff" }}
      />
    </div>
  ),
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Only translate — no opacity change, no filter. Keeps compositing on GPU.
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section ref={ref} className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(175,136,255,0.07) 0%, transparent 70%)",
          y: glowY,
        }}
      />

      <motion.div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8" style={{ y: cardY }}>
        <Card
          className="group/spotlight overflow-hidden border-0 rounded-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.96)" }}
        >
          <Spotlight className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
              {/* Left — text */}
              <div className="flex flex-col justify-center px-8 md:px-14 py-14 lg:py-20 order-2 lg:order-1">
                <motion.span
                  {...fadeIn(0.1)}
                  className="text-label-sm text-tertiary mb-6 inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#161618",
                    border: "1px solid rgba(175,136,255,0.18)",
                  }}
                >
                  Vibie · Yerevan
                </motion.span>

                <motion.h1
                  {...fadeIn(0.2)}
                  className="text-display-lg text-on-surface mb-6"
                >
                  We build websites that feel like{" "}
                  <span style={{ color: "#af88ff" }}>masterpieces</span>
                </motion.h1>

                <motion.p {...fadeIn(0.32)} className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
                  AI-powered design and development for businesses that refuse to blend in. World-class
                  websites, built faster and smarter, at a fraction of the traditional cost.
                </motion.p>

                <motion.div {...fadeIn(0.44)} className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="px-8 py-4 rounded-full font-medium text-base transition-colors duration-200 min-h-[52px] inline-flex items-center justify-center"
                    style={{
                      backgroundColor: "#c6c6ce",
                      color: "#3e4046",
                      boxShadow: "0 0 30px rgba(175,136,255,0.15)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8b8c0")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c6c6ce")
                    }
                  >
                    Start your project
                  </a>
                  <a
                    href="/work"
                    className="px-8 py-4 rounded-full font-medium text-base transition-colors duration-200 min-h-[52px] inline-flex items-center justify-center"
                    style={{
                      backgroundColor: "transparent",
                      color: "#e7e4ea",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#121214")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
                    }
                  >
                    See our work
                  </a>
                </motion.div>
              </div>

              {/* Right — Spline */}
              <div className="relative h-[320px] lg:h-auto order-1 lg:order-2 overflow-hidden">
                <SplineScene />
              </div>
            </div>
          </Spotlight>
        </Card>
      </motion.div>
    </section>
  );
}
