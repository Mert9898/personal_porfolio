"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const experience = [
    {
        company: "Teleperformance",
        role: "Software Developer Intern",
        date: "July 2022 - Sept 2022",
        location: "Istanbul, Türkiye",
        bullets: [
            "Orchestrated code reviews for 50+ modules, implementing Git workflow standards that reduced defect rates by 20%.",
            "Engineered internal automation suites, optimizing support throughput and reducing manual cycles by 40%.",
            "Modernized data integration pipelines via RESTful APIs, securing a 25% improvement in cross-system data accuracy.",
            "Architected high-fidelity UI systems, driving a 18% lift in user adoption through outcome-focused design."
        ],
        tech: ["Python", "Java", "SQL", "REST APIs", "Git"]
    }
];

const education = [
    {
        school: "Polish Japanese Academy Of IT",
        degree: "MSc in Computer Science",
        date: "2025 - 2027",
        location: "Warsaw, Poland",
        status: "In Progress"
    },
    {
        school: "Politechnika Warszawska",
        degree: "MSc Computer Science",
        date: "2025",
        location: "Warsaw, Poland",
        status: "Transfer"
    },
    {
        school: "İzmir Institute Of Technology",
        degree: "BSc in Computer Engineering",
        date: "2018 - 2024",
        location: "İzmir, Türkiye",
        status: "Completed"
    }
];

export function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-[#02040a]">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-6 mb-24">
                            <div className="w-12 h-12 rounded-2xl bg-matrix-500/10 flex items-center justify-center border border-matrix-500/20">
                                <Briefcase className="text-matrix-500 w-6 h-6" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.05em]">Experience</h2>
                        </div>

                        <div className="space-y-24 border-l border-matrix-500/5 pl-12 ml-6">
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[56px] top-2 w-4 h-4 rounded-full bg-[#02040a] border-4 border-matrix-500/50 group-hover:border-matrix-500 transition-all duration-500 shadow-2xl shadow-matrix-500/50" />

                                    <div className="mb-8">
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-matrix-500 transition-colors tracking-tight">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-4 text-matrix-500 font-black text-[10px] uppercase tracking-[0.3em]">
                                            {exp.company}
                                            <span className="w-1.5 h-1.5 rounded-full bg-matrix-500/20" />
                                            {exp.date}
                                        </div>
                                    </div>

                                    <ul className="space-y-6">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="text-matrix-200/50 text-base leading-relaxed flex gap-4 group/item">
                                                <span className="text-matrix-500 mt-2 shrink-0 group-hover/item:scale-125 transition-transform"><Hexagon className="w-2.5 h-2.5 fill-matrix-500" /></span>
                                                <span className="group-hover/item:text-white transition-colors">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12 flex flex-wrap gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                        {exp.tech.map(t => (
                                            <span key={t} className="text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full border border-matrix-500/30 text-matrix-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-6 mb-24">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <GraduationCap className="text-blue-400 w-6 h-6" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.05em]">Education</h2>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.school + edu.date}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="glass-matrix p-10 rounded-[2rem] group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-black text-white leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-white/50">
                                            {edu.status}
                                        </span>
                                    </div>
                                    <p className="text-matrix-200/40 text-sm mb-8 font-medium">{edu.school}</p>
                                    <div className="flex items-center gap-3 text-[10px] font-black text-blue-400/60 tracking-[0.3em] uppercase">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.date}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
