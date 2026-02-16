"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    impact: string[];
    tech: string[];
    github?: string;
    demo?: string;
    index: number;
}

export function ProjectCard({ title, description, impact, tech, github, demo, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="glass-matrix rounded-3xl group relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(0,255,0,0.1)] transition-all duration-500"
        >
            {/* Thumbnail Placeholder */}
            <div className="aspect-video w-full bg-matrix-950 relative overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]" />
                <Code2 className="w-16 h-16 text-matrix-500/20 group-hover:text-matrix-500/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-matrix-500/20 to-transparent" />
            </div>

            <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black text-white group-hover:text-matrix-500 transition-colors duration-300 tracking-tight">
                        {title}
                    </h3>
                </div>

                <p className="text-matrix-300 text-sm leading-relaxed mb-8 opacity-80">
                    {description}
                </p>

                <div className="space-y-4 mb-10 mt-auto">
                    {impact.map((point, i) => (
                        <div key={i} className="flex gap-3 text-xs text-matrix-100/90 leading-relaxed items-start">
                            <span className="text-matrix-500 font-bold shrink-0">✓</span>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="text-[9px] uppercase tracking-[0.1em] font-mono py-1 px-2.5 rounded bg-matrix-500/5 border border-matrix-500/10 text-matrix-500/60"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-matrix-500/10">
                    <a
                        href={demo || github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest text-matrix-500 hover:text-white transition-colors flex items-center gap-2 group/link"
                    >
                        Case Study
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono uppercase tracking-widest text-matrix-400 hover:text-matrix-500 transition-colors flex items-center gap-2"
                        >
                            <Github className="w-3 h-3" />
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
