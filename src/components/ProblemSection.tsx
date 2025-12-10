import { useLanguage } from '../context/LanguageContext'

const ProblemSection = () => {
  const { language } = useLanguage()

  return (
    <section className="problem-section-final" id="problems">
      <div className="problem-container-final">
        {/* Section Title - Centered with Underline */}
        <h2 className="problem-title-final">
          {language === 'DE' ? 'Die Herausforderung' : 'The Challenge'}
        </h2>

        {/* Three Column Grid - Side by Side */}
        <div className="problem-three-columns">
          {/* FOR FAMILIES */}
          <div className="problem-box">
            <h3 className="problem-box-title">
              {language === 'DE' ? 'Familien' : 'Families'}
            </h3>
            <ul className="problem-box-list">
              <li>{language === 'DE' ? 'Schwierig, vertrauenswürdige Pflegekräfte zu finden' : 'Difficult to find trustworthy caregivers'}</li>
              <li>{language === 'DE' ? 'Sprachbarrieren erschweren die Kommunikation' : 'Language barriers complicate communication'}</li>
              <li>{language === 'DE' ? 'Agenturen sind überlastet und schwer erreichbar' : 'Agencies are overloaded and hard to reach'}</li>
              <li>{language === 'DE' ? 'Unklare Preise und versteckte Gebühren' : 'Unclear pricing and hidden fees'}</li>
              <li>{language === 'DE' ? 'Lange Wartezeiten für Pflegearrangements' : 'Long waiting times for care arrangements'}</li>
            </ul>
          </div>

          {/* FOR CAREGIVERS */}
          <div className="problem-box">
            <h3 className="problem-box-title">
              {language === 'DE' ? 'Pflegekräfte' : 'Caregivers'}
            </h3>
            <ul className="problem-box-list">
              <li>{language === 'DE' ? 'Schwierigkeit, Familien zu erreichen' : 'Hard to connect with families'}</li>
              <li>{language === 'DE' ? 'Begrenzter Zugang zu Stellenangeboten' : 'Limited access to job opportunities'}</li>
              <li>{language === 'DE' ? 'Kommunikationsprobleme mit Klienten' : 'Communication problems with clients'}</li>
              <li>{language === 'DE' ? 'Unflexible Arbeitszeiten' : 'Inflexible working hours'}</li>
              <li>{language === 'DE' ? 'Fehlende Unterstützung und Schulungen' : 'Lack of support and training'}</li>
            </ul>
          </div>

          {/* FOR AGENCIES */}
          <div className="problem-box">
            <h3 className="problem-box-title">
              {language === 'DE' ? 'Agenturen' : 'Agencies'}
            </h3>
            <ul className="problem-box-list">
              <li>{language === 'DE' ? 'Überlastete Systeme und lange Wartelisten' : 'Overloaded systems and long waiting lists'}</li>
              <li>{language === 'DE' ? 'Schwierigkeit, qualifiziertes Personal zu finden' : 'Difficulty finding qualified staff'}</li>
              <li>{language === 'DE' ? 'Komplexe Verwaltungsprozesse' : 'Complex administrative processes'}</li>
              <li>{language === 'DE' ? 'Begrenzte Ressourcen für mehrsprachige Unterstützung' : 'Limited resources for multilingual support'}</li>
              <li>{language === 'DE' ? 'Ineffiziente Kommunikation zwischen allen Parteien' : 'Inefficient communication between all parties'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection