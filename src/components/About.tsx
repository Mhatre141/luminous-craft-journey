import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Target } from "lucide-react";

const highlights = [
  { icon: Sparkles, title: "Insight Driven", desc: "Transform raw data into clear, actionable stories." },
  { icon: Target, title: "Detail Focused", desc: "Strong analytical thinking and problem-solving mindset." },
  { icon: GraduationCap, title: "Always Learning", desc: "Proactive about new tools, techniques and best practices." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary">// 01. About me</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Crafting <span className="text-gradient">data stories</span> that drive decisions
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I'm a <span className="text-foreground font-medium">Data Analyst</span> with hands-on
              experience in data visualization, reporting, and dashboard development using Python,
              SQL, Excel, Power BI and Tableau.
            </p>
            <p>
              I specialize in transforming complex datasets into actionable insights for
              data-driven decision-making — combining strong analytical thinking, problem solving,
              and a proactive learning mindset.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-mono text-primary">EDUCATION</p>
                <p className="mt-2 font-medium text-foreground">B.Sc. Computer Science</p>
                <p className="text-sm">ICLES' M.J. College · 2022–2025</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-mono text-primary">HSC</p>
                <p className="mt-2 font-medium text-foreground">Higher Secondary</p>
                <p className="text-sm">ICLES' M.J. College · 2022</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((h, i) => (
              <div key={i} className="glass group rounded-2xl p-6 transition-all hover:border-primary/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
