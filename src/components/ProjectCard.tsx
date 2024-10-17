import { motion } from "framer-motion";
import React from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project; // Recibe un objeto de tipo `Project`
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <React.Fragment>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-noto mb-2 dark:text-white">
          <strong>{project.title}</strong>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="bg-blue-300 bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-white text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.3,
                delay: index * 0.1 + techIndex * 0.05,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
