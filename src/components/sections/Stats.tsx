"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  description,
  active,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  active: boolean;
  delay?: number;
}) {
  const count = useCountUp(value, 1400, active);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-display-md font-black mb-2" style={{ color: "#af88ff" }}>
        {count}{suffix}
      </div>
      <div className="text-headline text-on-surface mb-3">
        <WordReveal text={label} delay={delay + 0.15} />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.35 }}
        className="text-body-md text-on-surface-variant max-w-xs mx-auto"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "rgba(18,18,20,0.5)" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 lg:gap-40">
          <StatItem
            value={3}
            suffix="x"
            label="Faster delivery"
            description="What takes agencies 8 weeks, we deliver in under 3. AI handles the repetition. Humans handle the taste."
            active={inView}
            delay={0}
          />
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block w-px h-28 origin-top"
            style={{ backgroundColor: "rgba(72,71,76,0.3)" }}
          />
          <StatItem
            value={60}
            suffix="%"
            label="Lower cost"
            description="No account managers. No redundant revisions. Just a direct line to the people building your site."
            active={inView}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
