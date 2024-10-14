import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'
import projectsData from '../data/projects.json'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const projects = projectsData[language]

  return (
    <div className="bg-background dark:bg-gray-900 text-primary dark:text-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bayon mb-8 text-center"
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
                transition: { duration: 0.2 }
              }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-noto mb-2 dark:text-white">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-white text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects