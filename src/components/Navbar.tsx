import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 ${scrolled ? "glass rounded-full" : ""} transition-all`}>
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold">
            <span className="text-gradient">Sakshi</span>
            <span className="text-foreground">.</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
