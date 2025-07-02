import { Layout } from "../components/Layout";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import { SiElectron, SiReact, SiNodedotjs, SiPython, SiSqlite } from "react-icons/si";
import { useState } from "react";

// Map tech names to icons
const techIconMap = {
  Electron: <SiElectron size={16} className="text-primary" />,
  React: <SiReact size={16} className="text-primary" />,
  "Node.js": <SiNodedotjs size={16} className="text-primary" />,
  Python: <SiPython size={16} className="text-primary" />,
  SQLite: <SiSqlite size={16} className="text-primary" />,
};

const projects = [
  {
    name: "Cross-Platform Note App",
    shortDescription: "A clean, efficient note-taking desktop app with markdown support.",
    fullDescription:
      "This desktop app lets you write markdown notes, organize files, and sync data across devices. Built with Electron and React.",
    preview: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/desktop-note-app",
    live: "", // no live demo for desktop apps
    tech: ["Electron", "React", "Node.js"],
    features: [
      "Markdown editor with preview",
      "File organization",
      "Cross-platform support (Windows, macOS, Linux)",
    ],
  },
  {
    name: "Task Manager",
    shortDescription: "Desktop task management app with notifications and deadlines.",
    fullDescription:
      "A productivity-focused desktop task manager built with PyQt, featuring reminders, deadlines, and categories.",
    preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/desktop-task-manager",
    live: "",
    tech: ["PyQt", "Python", "SQLite"],
    features: [
      "Task notifications",
      "Deadline tracking",
      "Categorize and prioritize tasks",
    ],
  },
];

export const DesktopProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
            Desktop <span className="text-primary">Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-center mb-12">
            Explore my powerful, cross-platform desktop applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
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
          <div className="bg-card max-w-lg w-full rounded-xl shadow-lg relative p-6 text-left animate-fade-in overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            <p className="text-muted-foreground mb-4">{selectedProject.fullDescription}</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 items-center">
                {selectedProject.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-sm bg-secondary/50 rounded-full flex items-center gap-1"
                  >
                    {techIconMap[tech] || null}
                    <span>{tech}</span>
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
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
