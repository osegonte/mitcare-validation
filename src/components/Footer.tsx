import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">MitCare</span>
            </div>
            <p className="footer-tagline">
              {language === 'DE' 
                ? 'Multilinguale Pflege. Menschliche Verbindung.' 
                : 'Multilingual Care. Human Connection.'}
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>{language === 'DE' ? 'Kontakt' : 'Contact'}</h4>
            <p className="footer-email">contact@mitcare.com</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h4>{language === 'DE' ? 'Schnelllinks' : 'Quick Links'}</h4>
            <ul className="footer-links">
              <li><a href="#home">{language === 'DE' ? 'Start' : 'Home'}</a></li>
              <li><a href="#about">{language === 'DE' ? 'Über uns' : 'About'}</a></li>
              <li><a href="#contact">{language === 'DE' ? 'Kontakt' : 'Contact'}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">
            {language === 'DE'
              ? 'Studentenprojekt nur für Forschungszwecke.'
              : 'Student project for research purposes only.'}
          </p>
          <p className="copyright">
            © 2024 MitCare. {language === 'DE' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
