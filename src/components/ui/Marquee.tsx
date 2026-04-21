"use client";

import { motion } from "framer-motion";

const items = [
  "WEB DESIGN",
  "BRAND IDENTITY",
  "AI INTEGRATION",
  "SPEED OPTIMIZATION",
  "SEO & CONTENT",
  "ONGOING SUPPORT",
];

const track = [...items, ...items];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-5 select-none"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        backgroundColor: "#080808",
      }}
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-label-sm"
            style={{ color: "rgba(231,228,234,0.18)" }}
          >
            {item}
            <span style={{ color: "rgba(175,136,255,0.4)", fontSize: "0.5rem" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
