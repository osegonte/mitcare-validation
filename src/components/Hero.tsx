import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section className="hero" id="home">
      {/* Full background image - clean, no overlay */}
      <div className="hero-background">
        <img 
          src="/images/hero-background.jpg" 
          alt="Diverse hands together" 
          className="hero-bg-image"
        />
      </div>

      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content fade-up">
          <h1 className="hero-title">
            {language === 'DE' 
              ? 'Multilinguale Pflege. Menschliche Verbindung.'
              : 'Multilingual Care. Human Connection.'
            }
          </h1>
          
          <p className="hero-description">
            {language === 'DE'
              ? 'Multilinguales App, das Familien, lokale Pflegekräfte und Pflegeagenturen verbindet, um häusliche Pflegearrangements schneller und einfacher zu gestalten.'
              : 'Multilingual platform connecting families, local caregivers, and care agencies for faster, clearer, and more reliable home care arrangements.'
            }
          </p>

          <div className="hero-cta">
            <a href="#about" className="btn btn-secondary">
              {language === 'DE' ? 'Mehr erfahren' : 'Learn More'}
            </a>
          </div>
        </div>

        {/* Right Side - Empty space */}
        <div className="hero-image"></div>
      </div>
    </section>
  )
}

export default Hero