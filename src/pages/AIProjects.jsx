import { Layout } from "../components/Layout";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPython, SiFastapi, SiNumpy } from "react-icons/si";
import { useState, useRef } from "react";

const techIconMap = {
  TensorFlow: <SiTensorflow size={16} className="text-primary" />,
  PyTorch: <SiPytorch size={16} className="text-primary" />,
  "Scikit-learn": <SiScikitlearn size={16} className="text-primary" />,
  Python: <SiPython size={16} className="text-primary" />,
  FastAPI: <SiFastapi size={16} className="text-primary" />,
  Numpy: <SiNumpy size={16} className="text-primary" />,
};

const projects = [
  {
    name: "Image Classifier",
    shortDescription: "An AI model that classifies images into various categories.",
    fullDescription:
      "This project involves building and training an image classification model using TensorFlow. It supports multiple classes and achieves high accuracy with data augmentation and fine-tuning.",
    preview: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/image-classifier",
    live: "",
    tech: ["TensorFlow", "Python", "Numpy"],
    features: [
      "Convolutional Neural Network architecture",
      "Data augmentation techniques",
      "Model evaluation and fine-tuning",
    ],
  },
  {
    name: "Chatbot Assistant",
    shortDescription: "AI-powered chatbot that can answer queries and assist users.",
    fullDescription:
      "A chatbot built with PyTorch and FastAPI backend. It uses natural language processing techniques to understand user queries and respond intelligently.",
    preview: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/chatbot-assistant",
    live: "",
    tech: ["PyTorch", "FastAPI", "Python"],
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "API backend with FastAPI",
    ],
  },
  {
    name: "ML Model Deployment",
    shortDescription: "Deploy machine learning models with REST API interface.",
    fullDescription:
      "A scalable ML model deployment using FastAPI to expose REST endpoints, allowing other applications to use the trained models for predictions in real-time.",
    preview: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/ml-model-deployment",
    live: "",
    tech: ["FastAPI", "Python", "Scikit-learn"],
    features: [
      "REST API for model inference",
      "Dockerized deployment",
      "Real-time prediction support",
    ],
  },
];

export const AIProjects = () => {
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
            AI / Machine Learning <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-center mb-12">
            Explore my intelligent and AI-powered projects.
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
