import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart3, Database, HeartPulse } from "lucide-react";
import type { MouseEvent } from "react";

const projects = [
  {
    icon: Database,
    title: "Online Voting System",
    tag: "MySQL · SQL",
    desc: "Database-driven election system managing voters, candidates and results — using JOINs, triggers and stored procedures to prevent duplicate voting and ensure data accuracy.",
    points: ["Election & voter management", "Triggers + stored procedures", "Integrity-first schema design"],
    gradient: "from-cyan-400/20 to-blue-500/20",
  },
  {
    icon: HeartPulse,
    title: "Fit-Track System",
    tag: "Python · OOP",
    desc: "BMI-based fitness platform delivering personalized diet & workout plans with allergy filters, automated reports, notifications and membership/payment handling.",
    points: ["BMI calculation engine", "Personalized recommendations", "Automated reporting"],
    gradient: "from-pink-400/20 to-fuchsia-500/20",
  },
  {
    icon: BarChart3,
    title: "Breast Cancer Analysis",
    tag: "Power BI · Dashboard",
    desc: "Interactive dashboard analyzing 248 patient records — visualizing survival trends and metastasis impact to surface insights about early-detection benefits.",
    points: ["248 patient records", "Survival & metastasis trends", "Insight-rich visuals"],
    gradient: "from-amber-400/20 to-orange-500/20",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary">// 03. Projects</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard>
                <div className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-all hover:border-primary/50`}>
                  <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground glow">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <p className="mt-6 font-mono text-xs text-primary">{p.tag}</p>
                    <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <ul className="mt-5 space-y-1.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
