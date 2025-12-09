import { useLanguage } from '../context/LanguageContext'
import './components.css'

const Reception = () => {
  const { language } = useLanguage()

  return (
    <section className="reception">
      <div className="reception-container">
        <h2 className="section-title">
          {language === 'DE' ? 'Wie MitCare wirken soll' : 'How MitCare Should Feel'}
        </h2>
        
        <div className="reception-content">
          <div className="reception-text">
            <p>
              {language === 'DE'
                ? 'MitCare soll Vertrauen, Ruhe, Einfachheit und Klarheit vermitteln. Wir schaffen eine Plattform, die Familien und Pflegekräfte auf menschliche und transparente Weise verbindet. Jede Interaktion ist darauf ausgelegt, Stress abzubauen und Sicherheit zu schaffen.'
                : 'MitCare should convey trust, calmness, simplicity, and clarity. We create a platform that connects families and caregivers in a human and transparent way. Every interaction is designed to reduce stress and create security.'
              }
            </p>
            <p>
              {language === 'DE'
                ? 'Unser Ziel ist es, die Pflegearrangements so reibungslos wie möglich zu gestalten, damit Familien sich auf das Wesentliche konzentrieren können: die Fürsorge für ihre Lieben.'
                : 'Our goal is to make care arrangements as smooth as possible, so families can focus on what matters most: caring for their loved ones.'
              }
            </p>
          </div>
          
          <div className="reception-image">
            <div className="image-placeholder">
              <span>reception-image.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reception
