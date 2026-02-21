"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
    {
        company: "Teleperformance",
        role: "Software Developer Intern",
        date: "July 2022 - September 2022",
        location: "Istanbul, Türkiye",
        bullets: [
            "Led 50+ peer code reviews and managed Git workflows, achieving a 20% reduction in post-deployment defects (tracked via Jira bug tickets before and after review-process rollout).",
            "Developed internal automation tools reducing repetitive support tasks by 40% and shortening ticket-resolution cycles by 30% (measured by team-lead weekly time logs comparing manual vs. automated workflows).",
            "Integrated RESTful APIs improving data accuracy by 25% (validated by reconciling API response payloads against source-system records during QA regression testing).",
            "Built UI prototypes in Figma/Sketch, boosting user adoption by 18% (session analytics before/after UI rollout) and cutting design-to-handoff time by 35% (sprint cycle comparison)."
        ],
        tech: "Python, Java, SQL, REST APIs, Git"
    }
];

const education = [
    {
        school: "Polish Japanese Academy Of Information Technology",
        degree: "Master's Degree in Computer Science — In Progress",
        date: "2025 - Present (Expected 2027)",
        location: "Warsaw, Poland"
    },
    {
        school: "Politechnika Warszawska",
        degree: "MSc Computer Science — Transferred to PJAIT",
        date: "2025",
        location: "Warsaw, Poland"
    },
    {
        school: "İzmir Institute Of Technology",
        degree: "Bachelor's degree in Computer Engineering",
        date: "2018 - 2024",
        location: "İzmir, Türkiye"
    }
];

export function Experience() {
    return (
        <section id="experience" className="section-padding bg-matrix-950/20 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Experience Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-16"
                        >
                            <Briefcase className="text-matrix-500 w-8 h-8 opacity-50" />
                            <h2 className="text-4xl font-black text-white tracking-tighter">Professional Experience</h2>
                        </motion.div>

                        <div className="space-y-16 border-l border-matrix-500/10 pl-10 ml-4">
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-matrix-950 border-2 border-matrix-500/20 group-hover:border-matrix-500 transition-colors duration-500" />
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-matrix-500 transition-colors">{exp.role}</h3>
                                    <div className="text-matrix-500 font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
                                        {exp.company} <span className="w-1 h-1 rounded-full bg-matrix-900" /> {exp.date}
                                    </div>
                                    <ul className="space-y-4">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="text-matrix-300 text-sm leading-relaxed flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                                <span className="text-matrix-500/30 mt-1.5 shrink-0">▹</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-matrix-500/5 flex items-center gap-3 text-[10px] font-mono text-matrix-400/60">
                                        <span className="text-matrix-500/20 px-1.5 py-0.5 border border-matrix-500/10 rounded">ENGINE</span> {exp.tech}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-16"
                        >
                            <GraduationCap className="text-matrix-500 w-8 h-8 opacity-50" />
                            <h2 className="text-4xl font-black text-white tracking-tighter">Education</h2>
                        </motion.div>

                        <div className="space-y-10">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.school + edu.date}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-matrix p-8 rounded-2xl border-l-4 border-l-matrix-500/20 hover:border-l-matrix-500 transition-all duration-500"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <p className="text-matrix-400 text-sm mb-4 font-medium opacity-80">{edu.school}</p>
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-matrix-500 tracking-widest uppercase">
                                        <Calendar className="w-3 h-3 opacity-50" />
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
