import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="absolute inset-0">
        <Hero3D />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl">
            Hi, I'm <span className="text-gradient">Sakshi</span>
            <br />
            <span className="text-muted-foreground">Shinde</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            <span className="text-foreground font-medium">Data Analyst</span> turning complex
            datasets into actionable insights with Python, SQL, Power BI & Tableau.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-primary px-7 py-3 font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 glow"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3 font-medium backdrop-blur transition-all hover:border-primary/50 hover:bg-card"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:sakshishinde813@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur transition-all hover:border-primary hover:text-primary hover:scale-110"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
