import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Header = () => {
  const [isInHero, setIsInHero] = useState(true)
  const { language, toggleLanguage } = useLanguage()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroHeight = window.innerHeight
    const isStillInHero = latest < heroHeight - 100
    setIsInHero(isStillInHero)
  })

  const showTransparent = isInHero

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        backgroundColor: showTransparent ? 'rgba(217, 183, 231, 0)' : 'rgba(217, 183, 231, 0.95)',
        borderBottomColor: showTransparent ? 'rgba(220, 220, 220, 0)' : 'rgba(220, 220, 220, 0.3)'
      }}
      transition={{ duration: 0.3 }}
      className="header"
      style={{ backdropFilter: showTransparent ? 'none' : 'blur(12px)' }}
    >
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-text" style={{ color: showTransparent ? 'white' : 'var(--deep-grey-purple)' }}>
            MitCare
          </span>
        </a>

        {/* Navigation */}
        <nav className="nav">
          <a 
            href="#home"
            style={{ color: showTransparent ? 'white' : 'var(--deep-grey-purple)' }}
          >
            {language === 'DE' ? 'Start' : 'Home'}
          </a>
          <a 
            href="#about"
            style={{ color: showTransparent ? 'white' : 'var(--deep-grey-purple)' }}
          >
            {language === 'DE' ? 'Über uns' : 'About'}
          </a>
          <a 
            href="#contact"
            style={{ color: showTransparent ? 'white' : 'var(--deep-grey-purple)' }}
          >
            {language === 'DE' ? 'Kontakt' : 'Contact'}
          </a>
        </nav>

        {/* Language Toggle */}
        <button 
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          style={{ color: showTransparent ? 'white' : 'var(--deep-grey-purple)' }}
        >
          <span className={language === 'DE' ? 'active' : ''}>DE</span>
          <span className="separator">|</span>
          <span className={language === 'EN' ? 'active' : ''}>EN</span>
        </button>
      </div>
    </motion.header>
  )
}

export default Header