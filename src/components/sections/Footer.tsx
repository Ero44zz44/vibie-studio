"use client";

export default function Footer() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Instagram", href: "https://www.instagram.com/vibieweb/", external: true },
    { label: "vibiewebarm@gmail.com", href: "mailto:vibiewebarm@gmail.com", external: false },
  ];

  return (
    <footer
      className="py-10 md:py-12 px-4 md:px-8"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="text-lg font-black text-on-surface">Vibie</div>

        <div className="flex flex-wrap justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm tracking-wide transition-colors duration-200"
              style={{ color: "rgba(231,228,234,0.35)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e7e4ea")}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(231,228,234,0.35)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm tracking-wide" style={{ color: "rgba(231,228,234,0.2)" }}>
          © 2025 Vibie. Yerevan.
        </p>
      </div>
    </footer>
  );
}
