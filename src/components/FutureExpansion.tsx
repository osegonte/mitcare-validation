import { useLanguage } from '../context/LanguageContext'

const FutureExpansion = () => {
  const { language } = useLanguage()

  const modules = [
    {
      titleDE: 'Babysitting',
      titleEN: 'Babysitting',
      descDE: 'Erweiterung auf Kinderbetreuungsdienste',
      descEN: 'Expand to childcare services'
    },
    {
      titleDE: 'Behindertenunterstützung',
      titleEN: 'Disability Support',
      descDE: 'Spezialisierte Pflege für Menschen mit Behinderungen',
      descEN: 'Specialized care for people with disabilities'
    },
    {
      titleDE: 'Psychische Gesundheit',
      titleEN: 'Mental Health',
      descDE: 'Assistenten für psychische Gesundheit',
      descEN: 'Mental health assistants'
    },
    {
      titleDE: 'Schulungsprogramme',
      titleEN: 'Training Programs',
      descDE: 'Weiterbildung für Pflegekräfte',
      descEN: 'Further training for caregivers'
    }
  ]

  return (
    <section className="future-expansion">
      <div className="expansion-container">
        <h2 className="section-title">
          {language === 'DE' ? 'Zukünftige Erweiterung' : 'Future Expansion'}
        </h2>
        
        <div className="expansion-grid">
          {modules.map((module, index) => (
            <div key={index} className="expansion-card">
              <div className="expansion-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{language === 'DE' ? module.titleDE : module.titleEN}</h3>
              <p>{language === 'DE' ? module.descDE : module.descEN}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FutureExpansion
