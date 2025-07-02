import { Layout } from "../components/Layout";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import { useRef, useState } from "react";

const projects = [
  {
    name: "Portfolio Website",
    shortDescription:
      "A sleek, responsive portfolio to showcase my skills and projects.",
    fullDescription:
      "This is my personal portfolio built with React and Tailwind CSS. It features animated sections, smooth navigation, dark mode, and showcases my skills, projects, and contact options.",
    preview: "https://yourportfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    tech: ["React", "Tailwind CSS", "Vercel"],
    features: [
      "Fully responsive layout",
      "Dark mode toggle",
      "Smooth scrolling navigation",
      "SEO optimized",
    ],
  },
  {
    name: "AI Learning Assistant",
    shortDescription:
      "An AI-powered platform to help users learn programming with project-based questions.",
    fullDescription:
      "A full-stack platform where users enter programming topics and receive project-based AI-generated questions with rating and feedback. Built with Next.js, Supabase, and Tailwind CSS.",
    preview: "https://ai-learn.vercel.app",
    github: "https://github.com/yourusername/ai-learning-assistant",
    live: "https://ai-learn.vercel.app",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    features: [
      "AI-generated project questions",
      "Code file submission with AI rating",
      "Realtime database using Supabase",
      "Modern responsive design",
    ],
  },
];

// Map tech names to icons
const techIcons = {
  React: <SiReact size={16} className="text-primary"/>,
  "Tailwind CSS": <SiTailwindcss size={16} className="text-primary"/>,
  Vercel: <SiVercel size={16} className="text-primary"/>,
  "Next.js": <SiNextdotjs size={16} className="text-primary"/>,
  Supabase: <SiSupabase size={16} className="text-primary"/>,
};

export const WebProjects = () => {
  const scrollRefs = useRef({});
  const intervalRefs = useRef({});
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (index) => {
    const container = scrollRefs.current[index];
    if (!container) return;

    clearInterval(intervalRefs.current[index]);

    intervalRefs.current[index] = setInterval(() => {
      container.scrollTop += 1;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        clearInterval(intervalRefs.current[index]);
      }
    }, 20);
  };

  const handleMouseLeave = (index) => {
    const container = scrollRefs.current[index];
    if (!container) return;

    clearInterval(intervalRefs.current[index]);

    intervalRefs.current[index] = setInterval(() => {
      container.scrollTop -= 1;
      if (container.scrollTop <= 0) {
        clearInterval(intervalRefs.current[index]);
      }
    }, 20);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-bg") {
      setSelectedProject(null);
    }
  };

  return (
    <Layout>
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Web <span className="text-primary">Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-center mb-12">
            Explore my modern, responsive websites and web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="h-56 overflow-hidden relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div
                    ref={(el) => (scrollRefs.current[index] = el)}
                    className="absolute inset-0 overflow-y-auto scrollbar-hide"
                  >
                    <iframe
                      src={project.preview}
                      title={project.name}
                      className="w-full h-[500px] pointer-events-none"
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-muted-foreground">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          id="modal-bg"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center px-4"
        >
          <div className="bg-card max-w-lg w-full rounded-xl shadow-lg relative p-6 text-left animate-fade-in">
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            <p className="text-muted-foreground mb-4">{selectedProject.fullDescription}</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-sm bg-secondary/50 rounded-full flex items-center gap-1"
                  >
                    {techIcons[tech] || null} {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.features?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {selectedProject.features.map((feature, key) => (
                    <li key={key} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 mt-4 flex-wrap">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
