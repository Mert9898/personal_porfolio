"use client";

import { motion } from "framer-motion";
import { Github, Code2, ArrowRight, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    impact: string[];
    tech: string[];
    github?: string;
    demo?: string;
    index: number;
    gradientClass?: string;
}

export function ProjectCard({ title, description, impact, tech, github, demo, index, gradientClass = "bg-mesh-green" }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-matrix rounded-[2.5rem] group relative overflow-hidden flex flex-col h-full transition-all duration-700"
        >
            {/* Mesh Gradient Thumbnail */}
            <div className={cn("aspect-[16/10] w-full relative overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-105", gradientClass)}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:bg-matrix-500/10 group-hover:border-matrix-500/20 transition-all duration-500">
                        {index === 0 ? <Layers className="w-12 h-12 text-matrix-500" /> : <Sparkles className="w-12 h-12 text-blue-400" />}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02040a] to-transparent" />
            </div>

            <div className="p-12 flex flex-col flex-grow relative z-10 -mt-12">
                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black text-white group-hover:text-matrix-500 transition-colors duration-500 tracking-tighter leading-none">
                        {title}
                    </h3>
                </div>

                <p className="text-matrix-200/60 text-base leading-relaxed mb-10 font-medium">
                    {description}
                </p>

                <div className="space-y-5 mb-12 mt-auto">
                    {impact.map((point, i) => (
                        <div key={i} className="group/item flex gap-4 text-sm text-matrix-100/70 leading-relaxed items-start">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-matrix-500/30 group-hover/item:bg-matrix-500 transition-colors shrink-0" />
                            <p className="group-hover/item:text-white transition-colors">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2.5 mb-12">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full bg-matrix-500/5 border border-matrix-500/20 text-matrix-500 transition-all hover:bg-matrix-500 hover:text-black cursor-default"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-8 pt-10 border-t border-white/5">
                    <a
                        href={demo || github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black uppercase tracking-[0.2em] text-white hover:text-matrix-500 transition-all flex items-center gap-3 group/link"
                    >
                        Explore Case Study
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black uppercase tracking-[0.2em] text-matrix-400 hover:text-matrix-500 transition-all flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            Source
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
