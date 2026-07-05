import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "House Extensions", href: "#services" },
    { label: "Loft Conversions", href: "#services" },
    { label: "Renovations", href: "#services" },
    { label: "Luxury Kitchens", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-xl">IOAN IOSIP</span>
              <span className="font-heading font-bold text-xl text-gold">LTD</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium UK construction company delivering exceptional homes from A–Z for over 16 years.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© 2025 IOAN IOSIP LTD. All Rights Reserved.</p>
          <p className="text-xs text-white/30">Building Exceptional Homes From A–Z</p>
        </div>
      </div>
    </footer>
  );
}