import { useState } from "react";
import { Bot, Code, Monitor, User, Book, Briefcase, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaFileDownload } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { RiMailSendFill } from "react-icons/ri";

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
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-center items-center">

  {/* Get In Touch Button */}
  <a href="#contact" className="cosmic-button flex items-center gap-2 justify-center">
    <RiMailSendFill size={16} />
    Get In Touch
  </a>

  {/* Download CV Button */}
  <a
    href="#contact"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2 justify-center"
  >
    <FaFileDownload size={16} />
    Download CV
  </a>

</div>
                    </div>
                );
            case "education":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-2xl font-semibold mb-6">Education</h3>
                        <div className="space-y-6">
                            {/* Current Education */}
                            <div className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <div className="text-left space-y-1">
                                    <h4 className="text-lg font-semibold text-foreground">Bangladesh University</h4>
                                    <p className="text-sm text-muted-foreground font-medium">2023 - Present</p>
                                    <p className="text-muted-foreground font-medium">Computer Science and Engineering</p>
                                    <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            {/* Current Education */}
                            <div className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <div className="text-left space-y-1">
                                    <h4 className="text-lg font-semibold text-foreground">Mohammadpur Govt. College</h4>
                                    <p className="text-sm text-muted-foreground font-medium">Jun 2019 - April 2021</p>
                                    <p className="text-muted-foreground font-medium">Higher Secondary School Certificate (HSC)</p>
                                    <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "experience":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                        <div className="space-y-6">
                            {/* Current Role */}
                            <div className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <div className="text-left space-y-1">
                                    <h4 className="text-lg font-semibold text-foreground">Lynkeus - 린케우스</h4>
                                    <p className="text-sm text-muted-foreground font-medium">Feb 2024 - March 2025</p>
                                    <p className="text-muted-foreground font-medium">Former Intern</p>
                                    <p className="text-sm text-muted-foreground">On-site</p>
                                </div>
                            </div>
                        </div>
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
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 px-2">
                            {tabs.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={cn(
                                        "flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full transition-colors duration-300 text-xs sm:text-sm font-medium shadow-sm flex-1 sm:flex-initial justify-center whitespace-nowrap",
                                        activeTab === id
                                            ? "bg-primary text-primary-foreground shadow-md scale-105"
                                            : "bg-secondary text-foreground hover:bg-secondary/70"
                                    )}
                                >
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span>{label}</span>
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
