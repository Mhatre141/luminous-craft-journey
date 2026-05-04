import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary">// 05. Contact</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project, role, or idea in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            {[
              { icon: Mail, label: "Email", value: "sakshishinde813@gmail.com", href: "mailto:sakshishinde813@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 99672 46429", href: "tel:+919967246429" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/sakshishinde", href: "#" },
              { icon: Github, label: "GitHub", value: "/sakshishinde", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-primary">{c.label}</p>
                  <p className="truncate text-sm text-foreground">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-4 rounded-3xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your name"
                className="rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                className="rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <input
              required
              placeholder="Subject"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-105 glow"
            >
              {sent ? "Message sent!" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-24 border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sakshi Shinde · Crafted with React, Three.js & Framer Motion
      </footer>
    </section>
  );
}
