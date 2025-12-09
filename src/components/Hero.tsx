import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import './Hero.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
}

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section className="hero" id="home">
      {/* Background Image with Gradient Overlay */}
      <div className="hero-background">
        <img 
          src="/images/hero-background.jpg" 
          alt="Diverse hands together" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content - 1 INCH FROM LEFT */}
      <div className="hero-content-wrapper">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-title"
          >
            {language === 'DE' 
              ? 'Multilinguale Pflege. Menschliche Verbindung.'
              : 'Multilingual Care. Human Connection.'
            }
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-description"
          >
            {language === 'DE'
              ? 'Multilinguales App, das Familien, lokale Pflegekräfte und Pflegeagenturen verbindet, um häusliche Pflegearrangements schneller und einfacher zu gestalten.'
              : 'Multilingual platform connecting families, local caregivers, and care agencies for faster, clearer, and more reliable home care arrangements.'
            }
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-cta"
          >
            <motion.a
              href="#about"
              whileHover={{ 
                y: -2, 
                boxShadow: '0 10px 25px rgba(90, 74, 102, 0.35)' 
              }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary"
            >
              {language === 'DE' ? 'Mehr erfahren' : 'Learn More'}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero