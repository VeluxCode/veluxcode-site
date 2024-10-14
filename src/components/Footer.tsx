import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-primary dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 VELUXCODE. {t.allRightsReserved}</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/veluxcode" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/veluxcode" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@veluxcode.com" className="hover:text-blue-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer