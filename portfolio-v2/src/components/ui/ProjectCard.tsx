"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-matrix p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full"
        >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-12 h-12 text-matrix-500" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-matrix-500 transition-colors">
                {title}
            </h3>

            <p className="text-matrix-300 mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="space-y-3 mb-8">
                {impact.map((point, i) => (
                    <div key={i} className="flex gap-2 text-sm text-matrix-100">
                        <span className="text-matrix-500">▹</span>
                        <p>{point}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="text-[10px] uppercase tracking-tighter font-mono py-1 px-2 rounded-md bg-matrix-500/10 border border-matrix-500/20 text-matrix-400"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 border-t border-matrix-500/10 pt-6">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-matrix-400 hover:text-matrix-500 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        Repository
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-matrix-400 hover:text-matrix-500 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
}
