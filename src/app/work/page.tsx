"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import Footer from "@/components/sections/Footer";

const projects = [
  {
    name: "Repair services",
    category: "Local Business",
    year: "2025",
    description: "Premium shoe care & leather restoration studio at Glendale Galleria. Expert repair for Louis Vuitton, Hermès, Louboutin, and more.",
    gradient: "from-yellow-900/40 to-stone-950/60",
    accent: "#c9a84c",
    url: "https://galleria-shoe-care.vercel.app/",
    preview: "/work/galleria-shoe-care.png",
  },
  {
    name: "For personalized doctors",
    category: "Healthcare",
    year: "2025",
    description: "Internal medicine & preventive care practice site. Online appointment booking, telehealth services, and patient testimonials.",
    gradient: "from-blue-900/40 to-slate-950/60",
    accent: "#60a5fa",
    url: "https://doctors-website-orpin.vercel.app/",
    preview: "/work/doctors-website.png",
  },
  {
    name: "Nomad Coffee",
    category: "Brand + Web",
    year: "2024",
    description: "Brand identity and landing page for a specialty coffee roastery. Logo, packaging direction, and a single-page site.",
    gradient: "from-stone-800/50 to-stone-950/70",
    accent: "#a8855a",
  },
  {
    name: "BuildFast",
    category: "SaaS",
    year: "2025",
    description: "Dashboard and marketing site for a project management tool. Complex UI system, dark mode, onboarding flows.",
    gradient: "from-violet-900/40 to-purple-950/60",
    accent: "#8b5cf6",
  },
  {
    name: "Bloom Studio",
    category: "E-commerce",
    year: "2024",
    description: "Online boutique for a floral design studio. Custom product builder, subscription boxes, gift card system.",
    gradient: "from-rose-900/30 to-pink-950/60",
    accent: "#f43f5e",
  },
  {
    name: "GreenRoute",
    category: "Corporate",
    year: "2024",
    description: "Corporate website for a logistics company. Route calculator, fleet showcase, multilingual (AM/EN/RU).",
    gradient: "from-emerald-900/30 to-green-950/60",
    accent: "#10b981",
  },
];

export default function WorkPage() {
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
              Selected Projects
            </motion.span>
            <h1 className="text-display-lg text-on-surface mb-6">Our Work</h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              A selection of projects we&apos;ve built for brands that mean business. Every site ships with a story behind it.
            </p>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeUp key={project.name} delay={i * 0.07}>
              <div
                className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#111113",
                  cursor: (project as { url?: string }).url ? "pointer" : "default",
                }}
                onClick={() => { if ((project as { url?: string }).url) window.open((project as { url?: string }).url, "_blank"); }}
              >
                {/* Visual swatch */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {(project as { preview?: string }).preview && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={(project as { preview?: string }).preview}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  )}
                  <div
                    className="absolute bottom-4 right-4 text-label-sm px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: project.accent,
                      border: `1px solid ${project.accent}30`,
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-lg font-bold text-on-surface">{project.name}</h2>
                    <span className="text-xs text-on-surface-variant">{project.year}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{project.description}</p>
                  {(project as { url?: string }).url && (
                    <p className="text-xs mt-3 font-medium" style={{ color: project.accent }}>Visit site →</p>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
