"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(90deg, #7632e7, #af88ff, #e5d5ff)",
      }}
    />
  );
}
