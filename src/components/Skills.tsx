import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, OrbitControls } from "@react-three/drei";

const groups = [
  { title: "Languages & DB", level: 90, items: ["Python", "SQL", "MySQL"] },
  { title: "Data Analysis", level: 88, items: ["Cleaning", "Transformation", "EDA"] },
  { title: "Libraries", level: 85, items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { title: "Visualization", level: 92, items: ["Tableau", "Power BI", "Excel"] },
  { title: "Tools", level: 88, items: ["VS Code", "Jupyter", "PowerPoint", "Word"] },
  { title: "Concepts", level: 86, items: ["Data Modeling", "Dashboards", "KPI Tracking"] },
];

function SkillOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#7ee0e6" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#e879c8" intensity={2} />
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[1.4, 1]}>
          <meshStandardMaterial
            color="#5ec5cc"
            emissive="#c54f99"
            emissiveIntensity={0.3}
            wireframe
          />
        </Icosahedron>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary">// 02. Skills</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tools of my <span className="text-gradient">trade</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="glass relative h-80 overflow-hidden rounded-3xl lg:h-auto">
            <SkillOrb />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass group rounded-2xl p-5 transition-all hover:border-primary/50"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-semibold">{g.title}</h3>
                  <span className="font-mono text-xs text-primary">{g.level}%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-primary"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-border bg-card/60 px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
