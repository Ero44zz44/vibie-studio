"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
