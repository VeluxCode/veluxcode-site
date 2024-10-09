import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      id: 1,
      title: t.ecommercePlatform,
      description: t.ecommercePlatformDesc,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: t.taskManagementApp,
      description: t.taskManagementAppDesc,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: t.fitnessTrackingApp,
      description: t.fitnessTrackingAppDesc,
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React Native', 'GraphQL', 'AWS']
    }
  ]

  return (
    <div className="bg-background text-primary min-h-screen py-16 pt-24">
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
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
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
                <h2 className="text-2xl font-bayon mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="bg-primary bg-opacity-10 text-primary text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
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