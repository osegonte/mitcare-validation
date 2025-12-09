import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">MitCare</span>
        </div>

        <nav className="nav">
          <a href="#home">{language === 'DE' ? 'Start' : 'Home'}</a>
          <a href="#about">{language === 'DE' ? 'Über uns' : 'About'}</a>
          <a href="#contact">{language === 'DE' ? 'Kontakt' : 'Contact'}</a>
        </nav>

        <button 
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          <span className={language === 'DE' ? 'active' : ''}>DE</span>
          <span className="separator">|</span>
          <span className={language === 'EN' ? 'active' : ''}>EN</span>
        </button>
      </div>
    </header>
  )
}

export default Header
