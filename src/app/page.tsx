"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-matrix-500 selection:text-black">
      <Navbar />

      <Hero />

      <section id="about" className="section-padding relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter flex items-center gap-6">
              <span className="text-matrix-500 font-mono text-xl opacity-50">01.</span>
              Executive Summary
            </h2>

            <div className="space-y-12">
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight border-l-4 border-matrix-500 pl-8 py-2">
                Engineering high-performance, secure, and production-ready backend systems optimized for scale and reliability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-4">
                  <h3 className="text-matrix-500 font-mono text-sm tracking-widest uppercase">Performance</h3>
                  <p className="text-matrix-300 text-sm leading-relaxed">
                    Optimizing API contracts and database queries to achieve up to 15% efficiency gains in data retrieval.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-matrix-500 font-mono text-sm tracking-widest uppercase">Security</h3>
                  <p className="text-matrix-300 text-sm leading-relaxed">
                    Implementing robust RBAC and secure authentication protocols to eliminate unauthorized access vectors.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-matrix-500 font-mono text-sm tracking-widest uppercase">Scalability</h3>
                  <p className="text-matrix-300 text-sm leading-relaxed">
                    Designing modular architectures that support seamless growth from prototype to 200+ concurrent users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />

      <Projects />

      <section id="skills" className="section-padding relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Core Competencies</h2>
            <div className="h-[1px] flex-grow bg-matrix-500/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Languages", items: ["Python", "Java", "JavaScript", "SQL (PostgreSQL / MySQL)"] },
              { title: "Architecture", items: ["RESTful API Design", "Clean Architecture", "Database Normalization", "Scalable Systems Design"] },
              { title: "Tools & Methods", items: ["Git / Github", "Docker (Research)", "Firebase / Postman", "Agile / Scrum"] }
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 glass-matrix rounded-3xl group border-b-4 border-b-transparent hover:border-b-matrix-500 transition-all duration-500"
              >
                <h3 className="font-mono text-matrix-500 mb-8 tracking-[0.2em] text-[10px] uppercase font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                  {cat.title}
                </h3>
                <ul className="space-y-4 font-mono text-sm text-matrix-200">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-matrix-500/20 group-hover:bg-matrix-500 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="section-padding border-t border-matrix-500/5 bg-matrix-950/40">
        <div className="container px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
              Ready to <span className="text-matrix-500">Build?</span>
            </h2>
            <p className="text-matrix-300/70 max-w-2xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
              I'm open to Technical Deep-dives and complex Infrastructure challenges.
              Let's engineer the next generation of backend systems.
            </p>
            <div className="flex flex-wrap justify-center gap-10 items-center">
              <a href="mailto:ozkanmertayaz@gmail.com" className="text-matrix-500 font-mono text-sm tracking-widest hover:text-white transition-colors relative group">
                ozkanmertayaz@gmail.com
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-matrix-500 group-hover:w-full transition-all duration-300" />
              </a>
              <span className="text-matrix-900 hidden md:block">/</span>
              <a href="https://linkedin.com/in/mert-ozkan-3306aa276/" className="text-matrix-400 font-mono text-xs tracking-widest hover:text-matrix-500 transition-colors">LINKEDIN</a>
              <span className="text-matrix-900 hidden md:block">/</span>
              <a href="https://github.com/Mert9898" className="text-matrix-400 font-mono text-xs tracking-widest hover:text-matrix-500 transition-colors">GITHUB</a>
            </div>
            <p className="mt-32 text-matrix-800 text-[10px] font-mono uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Mert Ayaz Ozkan // Full Protocols Observed
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
