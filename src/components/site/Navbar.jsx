import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div
          className="h-full bg-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => handleClick("#hero")} className="flex items-center gap-2">
              <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}>
                IOAN IOSIP
              </span>
              <span className="text-gold font-heading font-bold text-xl">LTD</span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="bg-gold text-white px-6 py-2.5 text-sm font-medium tracking-wide uppercase hover:bg-[#b8974f] transition-colors"
              >
                Free Quote
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="block text-charcoal text-base font-medium tracking-wide uppercase hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleClick("#contact")}
                  className="block w-full bg-gold text-white px-6 py-3 text-sm font-medium tracking-wide uppercase text-center hover:bg-[#b8974f] transition-colors"
                >
                  Free Quote
                </button>
                <a href="tel:+447576369933" className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors">
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}