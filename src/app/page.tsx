"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { motion } from "framer-motion";
import { Shield, Zap, Database, Terminal, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02040a] selection:bg-matrix-500 selection:text-black">
      <Navbar />

      <Hero />

      <section id="about" className="section-padding relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <Shield className="text-matrix-500 w-8 h-8 opacity-40" />
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.05em]">Executive Summary</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <p className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-[-0.03em] mb-12">
                  Building the <span className="text-matrix-500">Invisible Infrastructure</span> that powers modern institutional scale.
                </p>
                <div className="prose prose-invert prose-lg max-w-none text-matrix-200/60 leading-relaxed font-medium">
                  High-performance systems architect focused on resilient backend ecosystems.
                  My approach integrates deep technical proficiency in Java and Python with
                  a commitment to zero-defect Git workflows and secure API design.
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                {[
                  { icon: Zap, title: "Efficiency", desc: "15% latency reduction via API refactoring" },
                  { icon: Shield, title: "Security", desc: "No-compromise RBAC & Auth protocols" },
                  { icon: Database, title: "Scalability", desc: "Distributed engines for 200+ users" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 glass-matrix rounded-3xl border border-white/5"
                  >
                    <stat.icon className="w-6 h-6 text-matrix-500 mb-4" />
                    <h3 className="text-white font-black text-lg mb-1 tracking-tight">{stat.title}</h3>
                    <p className="text-matrix-200/40 text-xs font-bold leading-relaxed">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />

      <Projects />

      <section id="skills" className="section-padding relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-8 mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.05em]">Tech Stack</h2>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Languages",
                items: ["Python (Expert)", "Java (Advanced)", "Dart & JavaScript", "PostgreSQL / MySQL"]
              },
              {
                icon: Cpu,
                title: "Architecture",
                items: ["RESTful API Engineering", "Clean Architecture", "Distributed Systems", "Database Design"]
              },
              {
                icon: Globe,
                title: "Infrastructure",
                items: ["Docker Orchestration", "Firebase Ecosystem", "Spring Boot Framework", "Agile SDLC"]
              }
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 glass-matrix rounded-[2.5rem] group border-b-2 border-b-transparent hover:border-b-matrix-500 transition-all duration-700 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-matrix-500/10 transition-colors">
                  <cat.icon className="w-7 h-7 text-matrix-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">
                  {cat.title}
                </h3>
                <ul className="space-y-5">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-4 text-matrix-200/50 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-matrix-500/20 group-hover/item:bg-matrix-500 transition-colors" />
                      <span className="text-sm font-bold group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="section-padding border-t border-white/5 bg-[#010206]">
        <div className="container px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-[-0.05em] leading-[0.8]">
              Ready to <br /><span className="text-matrix-500">Accelerate?</span>
            </h2>
            <p className="text-matrix-200/40 max-w-3xl mx-auto mb-20 text-lg md:text-2xl font-medium leading-relaxed">
              Seeking high-impact backend roles and infrastructure challenges.
              Let's engineer the benchmark for modern performance.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-40">
              <a href="mailto:ozkanmertayaz@gmail.com" className="text-matrix-500 font-bold text-sm tracking-[0.4em] hover:text-white transition-all uppercase relative group">
                ozkanmertayaz@gmail.com
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-matrix-500 group-hover:w-full transition-all duration-500" />
              </a>
              <div className="hidden md:block w-px h-8 bg-white/10" />
              <a href="https://linkedin.com/in/mert-ozkan-3306aa276/" className="text-white/40 font-bold text-[10px] tracking-[0.5em] hover:text-matrix-500 transition-all uppercase">LINKEDIN</a>
              <div className="hidden md:block w-px h-8 bg-white/10" />
              <a href="https://github.com/Mert9898" className="text-white/40 font-bold text-[10px] tracking-[0.5em] hover:text-matrix-500 transition-all uppercase">GITHUB</a>
            </div>
            <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.8em]">
              © {new Date().getFullYear()} Mert Ayaz Ozkan // Full Authorization Observed
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
