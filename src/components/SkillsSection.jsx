import { useState } from "react";
import {cn} from '@/lib/utils';
import {
    SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiNextdotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiNumpy, SiScikitlearn,
    SiGit, SiDocker, SiObsidian, SiCanva, SiN8N, SiQt, SiSupabase, SiFastapi, SiSqlalchemy
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [

    // Programming Language
    { name: "Python", category: "programing language", icon: <SiPython size={20} /> },
    { name: "JavaScript", category: "programing language", icon: <SiJavascript size={20} /> },

    // Frontend
    { name: "HTML5", category: "frontend", icon: <SiHtml5 size={20} /> },
    { name: "CSS3", category: "frontend", icon: <SiCss3 size={20} /> },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss size={20} /> },
    { name: "React", category: "frontend", icon: <SiReact size={20} /> },

    // Backend
    { name: "FastAPI", category: "backend", icon: <SiFastapi size={20} /> },
    { name: "Supabase", category: "backend", icon: <SiSupabase size={20} /> },
    { name: "PostgreSQL", category: "backend", icon: <SiPostgresql size={20} /> },
    { name: "SQLAlchemy", category: "backend", icon: <SiSqlalchemy size={20} /> },

    // AI/ML
    { name: "N8N", category: "machine learning", icon: <SiN8N size={20} /> },
    { name: "Numpy", category: "machine learning", icon: <SiNumpy size={20} /> },
    { name: "Scikit-learn", category: "machine learning", icon: <SiScikitlearn size={20} /> },

    // Desktop Application
    { name: "PyQt", category: "desktop", icon: <SiQt size={20} /> },

    // Tools
    { name: "Git/GitHub", category: "tools", icon: <SiGit size={20} /> },
    { name: "Obsidian", category: "tools", icon: <SiObsidian size={20} /> },
    { name: "Canva", category: "tools", icon: <SiCanva size={20} /> },
    { name: "VS Code", category: "tools", icon: <VscVscode size={20} /> },

];

const categories = ["programing language", "frontend", "backend", "machine learning", "desktop", "tools"];

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-3 rounded-lg shadow-xs card-hover flex items-center gap-4">
                            <div className="text-primary">
                                {skill.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
