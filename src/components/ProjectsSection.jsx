import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LuLayoutTemplate, LuBrainCircuit } from "react-icons/lu";
import { BsWindowSplit } from "react-icons/bs";
import { ArrowRight } from "lucide-react";

export const ProjectsSection = () => {
    const navigate = useNavigate();

    const projectCategories = [
        {
            name: "Web Applications",
            description: "Modern, responsive websites and web apps.",
            icon: <LuLayoutTemplate size={50} />,
            path: "/projects/web"
        },
        {
            name: "Desktop Applications",
            description: "Cross-platform PyQt desktop applications.",
            icon: <BsWindowSplit size={50} />,
            path: "/projects/desktop"
        },
        {
            name: "AI/ML",
            description: "Intelligent projects powered by AI.",
            icon: <LuBrainCircuit size={50} />,
            path: "/projects/ai"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Projects</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {projectCategories.map((category, key) => (
                        <div
                            key={key}
                            onClick={() => navigate(category.path)}
                            className={cn(
                                "cursor-pointer bg-card p-8 rounded-2xl flex flex-col items-center gap-5 shadow-md transition-transform hover:scale-105 hover:shadow-lg w-[260px] text-center"
                            )}
                        >
                            <div className="text-primary">{category.icon}</div>
                            <h3 className="font-semibold text-xl">{category.name}</h3>
                            <p className="text-base text-muted-foreground">{category.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/mahtabulsouravv"
                    >
                        Check My Github Profile <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    );
};
