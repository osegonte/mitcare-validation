import { useLanguage } from '../context/LanguageContext'

const HowMitCareSolves = () => {
  const { language } = useLanguage()

  // Professional SVG Icons
  const icons = {
    shield: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    globe: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    clipboard: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
      </svg>
    ),
    zap: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    users: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  const solutions = {
    DE: [
      {
        icon: icons.shield,
        title: 'Vertrauenswürdige Profile',
        description: 'Verifizierte Pflegekräfte mit transparenten Profilen, klaren Qualifikationen und echten Bewertungen. Keine versteckten Überraschungen.'
      },
      {
        icon: icons.globe,
        title: 'Mehrsprachige Kommunikation',
        description: 'Plattform in Deutsch, Englisch und weiteren Sprachen. Keine Sprachbarrieren mehr zwischen Familien und Pflegekräften.'
      },
      {
        icon: icons.clipboard,
        title: 'Einfacher Fragebogen',
        description: 'Ein geführter Fragebogen statt komplizierter Formulare. Sagen Sie uns, was Sie brauchen – wir kümmern uns um den Rest.'
      },
      {
        icon: icons.tag,
        title: 'Klare Preisgestaltung',
        description: 'Alle Kosten im Voraus transparent dargestellt. Keine versteckten Gebühren, keine Überraschungen am Ende.'
      },
      {
        icon: icons.zap,
        title: 'Schneller Kontakt',
        description: 'Direkter Kontakt zu Agenturen und Pflegekräften. Keine langen Wartezeiten mehr, keine überlasteten Systeme.'
      },
      {
        icon: icons.users,
        title: 'Für alle Beteiligten',
        description: 'Eine Plattform, die Familien, Pflegekräfte und Agenturen gleichzeitig unterstützt. Jeder profitiert.'
      }
    ],
    EN: [
      {
        icon: icons.shield,
        title: 'Trusted Profiles',
        description: 'Verified caregivers with transparent profiles, clear qualifications, and real reviews. No hidden surprises.'
      },
      {
        icon: icons.globe,
        title: 'Multilingual Communication',
        description: 'Platform in German, English, and more languages. No more language barriers between families and caregivers.'
      },
      {
        icon: icons.clipboard,
        title: 'Simple Questionnaire',
        description: 'A guided questionnaire instead of complicated forms. Tell us what you need – we handle the rest.'
      },
      {
        icon: icons.tag,
        title: 'Clear Pricing',
        description: 'All costs transparently displayed upfront. No hidden fees, no surprises at the end.'
      },
      {
        icon: icons.zap,
        title: 'Fast Contact',
        description: 'Direct contact with agencies and caregivers. No more long waiting times, no overloaded systems.'
      },
      {
        icon: icons.users,
        title: 'For Everyone',
        description: 'One platform that supports families, caregivers, and agencies simultaneously. Everyone benefits.'
      }
    ]
  }

  const currentSolutions = language === 'DE' ? solutions.DE : solutions.EN

  return (
    <section className="how-mitcare-solves" id="solutions">
      <div className="solutions-container">
        {/* Section Title */}
        <div className="solutions-header">
          <h2 className="solutions-title">
            {language === 'DE' ? 'Wie MitCare diese Probleme löst' : 'How MitCare Solves These Problems'}
          </h2>
          <p className="solutions-subtitle">
            {language === 'DE' 
              ? 'Eine Plattform, die Vertrauen, Klarheit und menschliche Verbindung in den Mittelpunkt stellt.'
              : 'A platform that puts trust, clarity, and human connection at the center.'
            }
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid">
          {currentSolutions.map((solution, index) => (
            <div key={index} className="solution-card-new">
              <div className="solution-icon-new">
                {solution.icon}
              </div>
              <h3 className="solution-card-title">{solution.title}</h3>
              <p className="solution-card-description">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="solutions-cta">
          <p className="solutions-cta-text">
            {language === 'DE'
              ? 'Helfen Sie uns, MitCare zu verbessern – teilen Sie Ihre Erfahrungen im Fragebogen.'
              : 'Help us improve MitCare – share your experiences in our questionnaire.'
            }
          </p>
          <a href="#cta" className="btn btn-primary">
            {language === 'DE' ? 'Zum Fragebogen' : 'To Questionnaire'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowMitCareSolves