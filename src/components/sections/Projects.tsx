import { ProjectCard } from "../ui/ProjectCard";

const projects = [
    {
        title: "C3 - Collaboration Ecosystem",
        description: "Architected a full-stack collaboration platform for 200+ students, facilitating seamless code sharing and professional networking.",
        impact: [
            "Optimized API contracts, improving data retrieval efficiency by 15%",
            "Reduced unauthorized access risks through secure RBAC implementation",
            "Improved login processing efficiency by 20%"
        ],
        tech: ["Java", "React", "SQL", "REST APIs", "Git"],
        github: "https://github.com/Mert9898/Term_Project"
    },
    {
        title: "Fish Auction Mobile Application",
        description: "Engineered a real-time mobile application for fish auctions enabling seamless bid submissions and transaction processing.",
        impact: [
            "Integrated instant notifications with <1s latency",
            "Increased participant engagement by 25% via real-time sync",
            "Reduced transaction disputes and improved user retention by 20%"
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
