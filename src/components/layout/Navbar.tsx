"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-5">
          <a href="#" className="text-xl font-bold tracking-tighter text-on-surface">
            Vibie
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all duration-200"
                style={{ color: i === 0 ? "#af88ff" : "rgba(231,228,234,0.6)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e7e4ea")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    i === 0 ? "#af88ff" : "rgba(231,228,234,0.6)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ backgroundColor: "#c6c6ce", color: "#3e4046" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8b8c0")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c6c6ce")}
          >
            Start project
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-on-surface min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[69px] left-0 right-0 z-40 px-4 pb-6 pt-4 flex flex-col gap-1"
            style={{
              backgroundColor: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium min-h-[44px] flex items-center"
                style={{ color: "rgba(231,228,234,0.7)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="mt-4 w-full py-3.5 rounded-full text-sm font-medium min-h-[44px]"
              style={{ backgroundColor: "#c6c6ce", color: "#3e4046" }}
              onClick={() => setMenuOpen(false)}
            >
              Start project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
