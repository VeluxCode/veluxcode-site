import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/translations";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = projectsData[language];

  return (
    <div className="bg-background dark:bg-gray-900 text-primary dark:text-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bayon mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.ourProjects}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
