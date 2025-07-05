import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { cn } from '@/lib/utils';
import {
    SiCplusplus,SiPython, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiShadcnui, SiPostgresql, SiNumpy, SiScikitlearn,
    SiGit, SiObsidian, SiCanva, SiN8N, SiQt, SiSupabase, SiFastapi, SiSqlalchemy,SiGooglecolab,SiVercel,SiPostman,SiArchlinux
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";

const skills = [

    // Programming Language
    { name: "C++", category: "programing language", icon: <SiCplusplus size={20} /> },
    { name: "Python", category: "programing language", icon: <SiPython size={20} /> },
    { name: "JavaScript", category: "programing language", icon: <SiJavascript size={20} /> },

    // Frontend
    { name: "HTML5", category: "frontend", icon: <SiHtml5 size={20} /> },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss size={20} /> },
    { name: "Shadcn", category: "frontend", icon: <SiShadcnui size={20} /> },
    { name: "React", category: "frontend", icon: <SiReact size={20} /> },

    // Backend
    { name: "FastAPI", category: "backend", icon: <SiFastapi size={20} /> },
    { name: "Supabase", category: "backend", icon: <SiSupabase size={20} /> },
    { name: "PostgreSQL", category: "backend", icon: <SiPostgresql size={20} /> },
    { name: "SQLAlchemy", category: "backend", icon: <SiSqlalchemy size={20} /> },

    // AI/ML
    { name: "Numpy", category: "AI/ML", icon: <SiNumpy size={20} /> },
    { name: "Scikit-learn", category: "AI/ML", icon: <SiScikitlearn size={20} /> },

    // Desktop Application
    { name: "PyQt", category: "desktop", icon: <SiQt size={20} /> },

    // Tools
    { name: "Git", category: "tools", icon: <SiGit size={20} /> },
    { name: "N8N", category: "tools", icon: <SiN8N size={20} /> },
    { name: "Google Colab", category: "tools", icon: <SiGooglecolab size={20} /> },
    { name: "Vercel", category: "tools", icon: <SiVercel size={20} /> },
    { name: "Postman", category: "tools", icon: <SiPostman size={20} /> },
    { name: "Obsidian", category: "tools", icon: <SiObsidian size={20} /> },
    { name: "Canva", category: "tools", icon: <SiCanva size={20} /> },
    { name: "Visual Studio Code", category: "tools", icon: <VscVscode size={20} /> },
    { name: "Arch Linux", category: "tools", icon: <SiArchlinux size={20} /> },
    { name: "Windows", category: "tools", icon: <FaWindows size={20} /> },

];

const categories = ["programing language", "frontend", "backend", "AI/ML", "desktop", "tools"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("programing language");
    const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

    return (
        <section
            id="skills"
            className="py-20 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={(() => setActiveCategory(category))}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card px-4 py-2 rounded-lg shadow-xs card-hover flex items-center gap-3 bg-secondary/50">
                            <div className="text-primary">
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-base">{skill.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
