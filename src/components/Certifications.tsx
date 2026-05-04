import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2024" },
  { title: "Data Analytics with AI", issuer: "QUASTECH", year: "2024" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary">// 04. Certifications</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Continuous <span className="text-gradient">learning</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-primary/40 hover:glow"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Award className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold leading-tight">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · <span className="text-primary">{c.year}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
