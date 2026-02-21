import { ProjectCard } from "../ui/ProjectCard";

const projects = [
    {
        title: "C3 - Collaboration Ecosystem",
        description: "Full-stack collaboration engine architected for institutional scale, delivering real-time code synchronization and professional networking infrastructure.",
        impact: [
            "Optimized API contracts reducing data retrieval latency by 15%",
            "Bulletproof RBAC implementation eliminating unauthorized access vectors",
            "High-throughput JWT authentication pipeline supporting 20% faster logins"
        ],
        tech: ["Java", "React", "Spring Boot", "PostgreSQL", "REST APIs"],
        github: "https://github.com/Mert9898/Term_Project",
        demo: "https://Mert9898.github.io/Term_Project/",
        gradientClass: "bg-mesh-green"
    },
    {
        title: "Fish Auction Mobile Application",
        description: "Real-time transaction engine for high-stakes fish auctions, leveraging distributed state for sub-second bid propagation.",
        impact: [
            "Sub-second notification latency via tuned Firebase FCM delivery",
            "Real-time state synchronization driving 25% higher user engagement",
            "Automated transaction verification reducing bid disputes by 20%"
        ],
        tech: ["Flutter", "Firebase", "Dart", "Realtime DB", "Cloud Functions"],
        github: "https://github.com/Mert9898/Fish-Auction",
        demo: "https://Mert9898.github.io/Fish-Auction/",
        gradientClass: "bg-mesh-blue"
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
