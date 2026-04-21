"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import WordReveal from "@/components/ui/WordReveal";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Vibie,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.open(`mailto:vibiewebarm@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  }

  const inputStyle = {
    backgroundColor: "#111113",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#e7e4ea",
    outline: "none",
    width: "100%",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    fontSize: "1rem",
    transition: "border-color 0.2s",
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-label-sm mb-4 block"
              style={{ color: "#af88ff" }}
            >
              Get In Touch
            </motion.span>
            <h1 className="text-display-lg text-on-surface mb-6">
              <WordReveal text="Let's Talk" delay={0.1} />
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "vibiewebarm@gmail.com",
                  href: "mailto:vibiewebarm@gmail.com",
                },
                {
                  icon: Globe,
                  label: "Instagram",
                  value: "@vibieweb",
                  href: "https://www.instagram.com/vibieweb/",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Yerevan, Armenia",
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 pb-6"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(175,136,255,0.08)" }}
                  >
                    <Icon size={20} style={{ color: "#af88ff" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(175,136,255,0.6)" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-base text-on-surface transition-colors duration-200"
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#af88ff")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e7e4ea")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base text-on-surface">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Based in Yerevan, we work with clients globally. Most projects start with a free 30-minute discovery call — no commitment required.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl"
                  style={{ backgroundColor: "rgba(175,136,255,0.1)", border: "1px solid rgba(175,136,255,0.2)" }}
                >
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-3">Message sent</h3>
                <p className="text-on-surface-variant">Your email client opened with the message ready. We&apos;ll reply within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(175,136,255,0.6)" }}>
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What should we call you?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(175,136,255,0.35)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)")}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(175,136,255,0.6)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(175,136,255,0.35)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.07)")}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(175,136,255,0.6)" }}>
                    Tell us about your project
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="What are you building, what's your timeline, any budget range..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(175,136,255,0.35)")}
                    onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.07)")}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-4 rounded-full font-medium text-base transition-colors duration-200 min-h-[52px]"
                  style={{
                    backgroundColor: "#c6c6ce",
                    color: "#3e4046",
                    boxShadow: "0 0 30px rgba(175,136,255,0.12)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b8b8c0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c6c6ce")}
                >
                  Send message
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
