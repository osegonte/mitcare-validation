import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './components.css'

const CallToAction = () => {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section className="cta-section" id="cta">
        <div className="cta-container">
          <h2 className="cta-title">
            {language === 'DE' 
              ? 'Helfen Sie uns, MitCare zu verbessern' 
              : 'Help us improve MitCare'}
          </h2>
          <p className="cta-description">
            {language === 'DE'
              ? 'Ihre Meinung ist uns wichtig. Nehmen Sie an unserer kurzen Umfrage teil und gestalten Sie die Zukunft der Pflege mit.'
              : 'Your opinion matters to us. Take part in our short survey and help shape the future of care.'}
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="btn btn-primary cta-button"
          >
            {language === 'DE' ? 'Jetzt Fragebogen starten' : 'Start Questionnaire'}
          </button>
        </div>
      </section>

      {/* Questionnaire Modal */}
      {showForm && (
        <div className="questionnaire-modal">
          <div className="modal-backdrop" onClick={() => setShowForm(false)}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>{language === 'DE' ? 'MitCare Fragebogen' : 'MitCare Questionnaire'}</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="modal-close"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeMmAxpJ00cxwj52SpC5JbClUZTHfsoIo7gXpFsYgWr2y6COg/viewform?embedded=true"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CallToAction