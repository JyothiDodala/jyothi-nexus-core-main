import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "MERN Job Tracker",
    description:
      "A full-stack job application tracker built with MongoDB, Express, React, and Node.js. Features include status tracking, filtering, and dashboard analytics.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/jyothidodali/mern-job-tracker",
    demo: "https://mern-job-tracker.vercel.app",
    internalLink: false,
  },
  {
    title: "Plant Disease Identification",
    description:
      "CNN-based model to identify plant leaf diseases, helping farmers detect crop issues early for better yield.",
    tags: ["Python", "Keras", "CNN", "OpenCV"],
    github: "https://github.com/jyothidodali/plant-disease-identification",
    demo: "/projects/plant-disease",
    internalLink: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A futuristic, responsive portfolio website with glassmorphism design, animations, and modern tech stack.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/jyothidodali/portfolio",
    demo: "#home",
    internalLink: false,
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto text-sm">
        Some of my recent work
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 gradient-border group hover:neon-glow transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-primary"
              >
                <Github size={14} />
                GitHub
              </a>
              {project.internalLink ? (
                <button
                  onClick={() => navigate(project.demo)}
                  className="btn-glow flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-primary-foreground"
                >
                  <ExternalLink size={14} />
                  View Demo
                </button>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-primary-foreground"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
