"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(175,136,255,0.12), transparent 40%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{ background }}
        aria-hidden
      />
      {children}
    </div>
  );
}
