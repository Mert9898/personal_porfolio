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
            "Led 50+ peer code reviews and managed Git workflows, achieving a 20% reduction in post-deployment defects.",
            "Developed internal automation tools reducing repetitive support tasks by 40% and shortening cycles by 30%.",
            "Integrated RESTful APIs improving data accuracy by 25% for faster customer workflows.",
            "Built UI prototypes in Figma/Sketch, boosting user adoption rates by 18% and accelerating prototyping by 35%."
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
        degree: "MSc Computer Science — Program discontinued",
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
        <section id="experience" className="py-24 bg-matrix-950/30">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <Briefcase className="text-matrix-500 w-8 h-8" />
                            <h2 className="text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
                        </div>

                        <div className="space-y-12 border-l border-matrix-500/10 pl-8 ml-4">
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-matrix-500 border-4 border-black" />
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="text-matrix-500 font-mono text-sm mb-4 flex items-center gap-2">
                                        {exp.company} <span className="text-matrix-900">|</span> {exp.date}
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="text-matrix-300 text-sm leading-relaxed flex gap-2">
                                                <span className="text-matrix-500/50 mt-1">▹</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 pt-4 border-t border-matrix-500/5 flex items-center gap-2 text-xs font-mono text-matrix-400">
                                        <span className="text-matrix-500/30">ENGINE:</span> {exp.tech}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <GraduationCap className="text-matrix-500 w-8 h-8" />
                            <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.school + edu.date}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-matrix p-6 rounded-xl border-l-4 border-l-matrix-500"
                                >
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-matrix-400 text-sm mb-2">{edu.school}</p>
                                    <div className="flex items-center gap-2 text-xs font-mono text-matrix-500">
                                        <Calendar className="w-3 h-3" />
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
