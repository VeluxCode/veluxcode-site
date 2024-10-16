import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-white dark:bg-gray-800 bg-opacity-90'} py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 size={40} className="text-blue-500 transition-colors duration-300" />
          <span className="text-4xl font-bayon transition-colors duration-300 text-primary dark:text-white">
            <span>VELUX</span>
            <span className="text-blue-500">CODE</span>
          </span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link to="/" className="text-lg font-semibold text-primary dark:text-white hover:text-blue-500 transition-colors duration-300">
                {t.home}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-lg font-semibold text-primary dark:text-white hover:text-blue-500 transition-colors duration-300">
                {t.projects}
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-lg font-semibold text-primary dark:text-white hover:text-blue-500 transition-colors duration-300">
                {t.privacyPolicy}
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header