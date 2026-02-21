"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#02040a]">
            {/* dynamic Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.03)_0%,transparent_50%)]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-matrix-500/10 rounded-full blur-[160px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px]"
                />
            </div>

            <div className="container relative z-10 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-matrix-500/5 text-matrix-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-matrix-500/20 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-matrix-500"></span>
                            </span>
                            Systems Architect // v3.0 // Online
                        </motion.div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-[-0.05em] mb-12 leading-[0.85] text-white">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-400 via-matrix-500 to-matrix-300">Resilience.</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-matrix-200/50 mb-16 max-w-3xl mx-auto leading-relaxed tracking-tight">
                            Backend Developer specializing in high-performance <span className="text-white">Python & Java</span> ecosystems.
                            I build the invisible infrastructure that powers modern scale.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <a href="#projects" className="btn-primary w-full sm:w-auto h-16 px-12 group">
                                View Architecture
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a href="#contact" className="text-sm font-black uppercase tracking-[0.3em] text-matrix-400 hover:text-white transition-all flex items-center gap-4 group/link">
                                Infrastructure Audit
                                <div className="w-12 h-[1px] bg-matrix-500/30 group-hover/link:w-20 group-hover/link:bg-matrix-500 transition-all" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Premium Grid */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </section>
    );
}
