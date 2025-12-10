import { useLanguage } from '../context/LanguageContext'

const SolutionSection = () => {
  const { language } = useLanguage()

  return (
    <section className="solution-section">
      <div className="solution-container">
        <h2 className="section-title">
          {language === 'DE' 
            ? 'Die einfache, transparente Pflegeplattform' 
            : 'The simple, transparent care platform'}
        </h2>
        
        <div className="solution-grid">
          {/* Card 1 */}
          <div className="solution-card">
            <div className="solution-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{language === 'DE' ? 'Mehrsprachige Kommunikation' : 'Multilingual Communication'}</h3>
            <p>{language === 'DE' 
              ? 'Verbinden Sie sich mit Pflegekräften in Ihrer Sprache. Keine Missverständnisse mehr.'
              : 'Connect with caregivers in your language. No more misunderstandings.'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="solution-card">
            <div className="solution-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{language === 'DE' ? 'Schnelle Buchung' : 'Fast Booking'}</h3>
            <p>{language === 'DE'
              ? 'Buchen Sie Pflegetermine in wenigen Klicks. Einfach, schnell, transparent.'
              : 'Book care appointments in just a few clicks. Simple, fast, transparent.'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="solution-card">
            <div className="solution-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>{language === 'DE' ? 'Transparente Preise' : 'Transparent Pricing'}</h3>
            <p>{language === 'DE'
              ? 'Sehen Sie alle Kosten im Voraus. Keine versteckten Gebühren. Vertrauen Sie dem Prozess.'
              : 'See all costs upfront. No hidden fees. Trust the process.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
