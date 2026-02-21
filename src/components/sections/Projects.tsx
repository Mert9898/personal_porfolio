import { ProjectCard } from "../ui/ProjectCard";

const projects = [
    {
        title: "C3 - Collaboration Ecosystem",
        description: "Architected a full-stack collaboration platform for 200+ students, facilitating seamless code sharing and professional networking.",
        impact: [
            "API contract optimizations cut average response time by 15% (Postman collection benchmarks before/after endpoint refactoring)",
            "RBAC implementation eliminated privilege-escalation paths (verified by role-boundary unit tests covering all permission rules)",
            "JWT auth pipeline improved login throughput by 20% (JMeter load test at 50 concurrent users)"
        ],
        tech: ["Java", "React", "SQL", "REST APIs", "Git"],
        github: "https://github.com/Mert9898/Term_Project"
    },
    {
        title: "Fish Auction Mobile Application",
        description: "Engineered a real-time mobile application for fish auctions enabling seamless bid submissions and transaction processing.",
        impact: [
            "Firebase FCM delivers push notifications with <1s end-to-end latency (measured via Firebase console delivery timestamps)",
            "Real-time Firebase sync increased average session engagement by 25% (session-count comparison: pre/post feature rollout)",
            "Automated bid-confirmation receipts reduced transaction disputes by 20% (complaint-log count before/after deployment)"
        ],
        tech: ["Java", "React Native", "Firebase", "REST APIs", "Git"],
        github: "https://github.com/Mert9898/Fish-Auction"
    }
];

export function Projects() {
    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex items-center gap-6 mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Case Studies
                    </h2>
                    <div className="h-[1px] flex-grow bg-matrix-500/10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
