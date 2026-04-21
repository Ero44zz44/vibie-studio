"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Palette, Bot, Search, Zap, Headphones } from "lucide-react";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";

const services = [
  {
    icon: Monitor,
    title: "Custom websites",
    description: "From single-page to full e-commerce. Designed to convert, built to last.",
  },
  {
    icon: Palette,
    title: "Brand identity",
    description: "Logo, palette, typography, voice. Everything your business needs to look inevitable.",
  },
  {
    icon: Bot,
    title: "AI integration",
    description: "Chatbots, smart booking, automated workflows. Your site works while you sleep.",
  },
  {
    icon: Search,
    title: "SEO and content",
    description: "Copy that ranks. Pages that pull traffic. Strategy that compounds.",
  },
  {
    icon: Zap,
    title: "Speed optimization",
    description: "Sub-second loads. 90+ Lighthouse scores. Performance is not optional.",
  },
  {
    icon: Headphones,
    title: "Ongoing support",
    description: "Updates, fixes, iterations. We stay with you after launch.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-2xl p-8 transition-colors duration-300 cursor-default h-full"
      style={{ backgroundColor: "#121214" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#161618")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#121214")}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-125"
        style={{ backgroundColor: "rgba(175,136,255,0.05)" }}
      />

      <Icon size={30} className="mb-6 relative z-10" style={{ color: "#af88ff" }} />

      <h3 className="text-lg font-bold mb-3 relative z-10" style={{ color: "#e7e4ea" }}>
        {title}
      </h3>
      <p className="text-body-md text-on-surface-variant relative z-10">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-label-sm mb-3 block"
              style={{ color: "#af88ff" }}
            >
              What we do
            </motion.span>
            <h2 className="text-headline text-on-surface mb-4">
              <WordReveal text="Craft, not templates" />
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              Every site is designed from zero. We use AI to move faster, think sharper, and deliver at
              prices that make agencies nervous.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon, title, description }, i) => (
            <ServiceCard key={title} icon={icon} title={title} description={description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
