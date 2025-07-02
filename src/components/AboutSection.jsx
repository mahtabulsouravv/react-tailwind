import { useState } from "react";
import { Bot, Code, Monitor, User, Book, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "About", Icon: User },
        { id: "education", label: "Education", Icon: Book },
        { id: "experience", label: "Experience", Icon: Briefcase },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-2xl font-semibold">Software Engineer</h3>
                        <p className="text-muted-foreground">
                            With over 5 years of experience, I build modern web apps, AI solutions, and cross-platform desktop software.
                        </p>
                        <p className="text-muted-foreground">
                            I love solving real-world problems with elegant code and constantly explore new technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>
                );
            case "education":
                return (
                    <div className="space-y-4 animate-fade-in">
                        <h3 className="text-2xl font-semibold mb-4">Education</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="border-b pb-3 border-border/50">
                                <div className="flex justify-between flex-wrap">
                                    <span className="font-medium text-foreground">Computer Science and Engineering</span>
                                    <span className="text-sm min-w-fit">{`2022 - Present`}</span>
                                </div>
                                <p className="mt-1 text-left">Bangladesh University</p>
                            </li>
                            <li className="border-b pb-3 border-border/50">
                                <div className="flex justify-between flex-wrap">
                                    <span className="font-medium text-foreground">Full Stack Web Development</span>
                                    <span className="text-sm min-w-fit">{`2022 - Present`}</span>
                                </div>
                                <p className="mt-1 text-left">freeCodeCamp</p>
                            </li>
                        </ul>
                    </div>
                );
            case "experience":
                return (
                    <div className="space-y-4 animate-fade-in">
                        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="border-b pb-3 border-border/50">
                                <div className="flex justify-between flex-wrap">
                                    <span className="font-medium text-foreground">Software Engineer Intern</span>
                                    <span className="text-sm min-w-fit">{`2025`}</span>
                                </div>
                                <p className="mt-1 text-left">LynkeusAI</p>
                            </li>
                            <li className="border-b pb-3 border-border/50">
                                <div className="flex justify-between flex-wrap">
                                    <span className="font-medium text-foreground">Freelance Web & Desktop Developer</span>
                                    <span className="text-sm min-w-fit">{`2021 - Present`}</span>
                                </div>
                                <p className="mt-1 text-left">Various Clients</p>
                            </li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Part - Tabs */}
                    <div className="space-y-6">
                        <div className="flex gap-4 mb-6">
                            {tabs.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium shadow-sm",
                                        activeTab === id
                                            ? "bg-primary text-primary-foreground shadow-md scale-105"
                                            : "bg-secondary text-foreground hover:bg-secondary/70"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {label}
                                </button>
                            ))}
                        </div>

                        <div className="p-4 border border-border/50 rounded-lg bg-card shadow-md card-hover min-h-[280px]">
                            {renderContent()}
                        </div>
                    </div>

                    {/* Right Part - Skills Summary Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend | Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive websites and full-stack applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI Agent | Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Developing intelligent AI-driven solutions and agents.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Monitor className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">PyQt Desktop Applications</h4>
                                    <p className="text-muted-foreground">
                                        Creating sleek, cross-platform desktop software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
