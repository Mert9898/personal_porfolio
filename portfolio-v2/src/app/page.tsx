import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-matrix-500 selection:text-black">
      <Navbar />

      <Hero />

      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight flex items-center gap-4">
              <span className="text-matrix-500 font-mono text-xl">01.</span>
              Executive Summary
            </h2>
            <p className="text-lg text-matrix-300 leading-relaxed mb-6">
              Backend Software Developer specialized in building scalable, secure, and production-ready systems.
              My expertise spans across <strong>Python</strong>, <strong>Java</strong>, and <strong>SQL</strong>, with a core focus on
              <strong>Clean Architecture</strong> and performance optimization in distributed environments.
            </p>
            <p className="text-lg text-matrix-300 leading-relaxed">
              I don't just write code; I design systems that handle scale, minimize latency, and solve real-world technical problems
              through modularity and strategic engineering tradeoffs.
            </p>
          </div>
        </div>
      </section>

      <Experience />

      <Projects />

      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Core Competencies</h2>
            <div className="h-[1px] flex-grow bg-matrix-500/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="p-8 glass-matrix rounded-2xl">
              <h3 className="font-mono text-matrix-500 mb-4 tracking-widest text-xs uppercase">Languages</h3>
              <ul className="space-y-2 font-mono text-sm text-matrix-200">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL (PostgreSQL / MySQL)</li>
              </ul>
            </div>
            <div className="p-8 glass-matrix rounded-2xl">
              <h3 className="font-mono text-matrix-500 mb-4 tracking-widest text-xs uppercase">Architecture</h3>
              <ul className="space-y-2 font-mono text-sm text-matrix-200">
                <li>RESTful API Design</li>
                <li>Clean Architecture</li>
                <li>Database Normalization</li>
                <li>Scalable Systems Design</li>
              </ul>
            </div>
            <div className="p-8 glass-matrix rounded-2xl">
              <h3 className="font-mono text-matrix-500 mb-4 tracking-widest text-xs uppercase">Tools & Methods</h3>
              <ul className="space-y-2 font-mono text-sm text-matrix-200">
                <li>Git / Github</li>
                <li>Docker (Research)</li>
                <li>Firebase / Postman</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-24 border-t border-matrix-500/10">
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Ready to Build?
          </h2>
          <p className="text-matrix-300 max-w-xl mx-auto mb-12 text-lg">
            I'm currently open to new opportunities and technical deep-dives.
            Let's discuss how my backend expertise can bring value to your infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:ozkanmertayaz@gmail.com" className="text-matrix-500 font-mono hover:underline">ozkanmertayaz@gmail.com</a>
            <span className="text-matrix-900">/</span>
            <a href="https://linkedin.com/in/mert-ozkan-3306aa276/" className="text-matrix-400 hover:text-matrix-500">LinkedIn</a>
            <span className="text-matrix-900">/</span>
            <a href="https://github.com/Mert9898" className="text-matrix-400 hover:text-matrix-500">GitHub</a>
          </div>
          <p className="mt-20 text-matrix-800 text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Mert Ayaz Ozkan // All protocols observed
          </p>
        </div>
      </footer>
    </main>
  );
}
