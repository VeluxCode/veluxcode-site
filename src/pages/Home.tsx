import { ArrowRight, Code, Smartphone, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'

const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="bg-background dark:bg-gray-900 text-primary dark:text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h1 className="text-9xl font-bayon tracking-tighter">
              <span className="text-primary dark:text-white animate-slideInLeft">VELUX</span>
              <span className="text-blue-500 animate-slideInRight">CODE</span>
            </h1>
          </div>
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 animate-fadeIn animation-delay-300">{t.illuminatingDigitalSolutions}</p>
          <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors">
            {t.exploreProjects} <ArrowRight className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Code, title: t.webDevelopment, description: t.webDevelopmentDesc },
            { icon: Smartphone, title: t.mobileApps, description: t.mobileAppsDesc },
            { icon: Palette, title: t.uiUxDesign, description: t.uiUxDesignDesc }
          ].map((service, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-${(index + 1) * 150}`}>
              <service.icon size={48} className="text-blue-500 mb-4" />
              <h2 className="text-2xl font-noto mb-2 dark:text-white">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home