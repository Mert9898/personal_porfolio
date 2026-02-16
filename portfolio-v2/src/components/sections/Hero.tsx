"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-matrix-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-matrix-500/5 rounded-full blur-[128px]" />
            </div>

            <div className="container relative z-10 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-matrix-500/10 text-matrix-500 text-xs font-mono uppercase tracking-[0.2em] mb-6 border border-matrix-500/20">
                            Initializing Secure Connection...
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-matrix-500 bg-clip-text text-transparent">
                            Mert Ayaz Ozkan
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-matrix-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Backend Software Developer skilled in Python/Java, REST APIs, clean architecture, database design.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#projects"
                                className="group w-full sm:w-auto px-8 py-4 bg-matrix-500 text-black font-bold rounded-lg hover:bg-matrix-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                            >
                                Review Case Studies
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-matrix-500/30 text-matrix-500 font-bold rounded-lg hover:bg-matrix-500/5 transition-all flex items-center justify-center gap-2"
                            >
                                Discuss Infrastructure
                                <Download className="w-5 h-5 opacity-50" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid Pattern Decor */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00ff0011_1px,transparent_1px),linear-gradient(to_bottom,#00ff0011_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        </section>
    );
}
