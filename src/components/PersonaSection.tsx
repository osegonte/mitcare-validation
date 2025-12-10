import { useLanguage } from '../context/LanguageContext'

const PersonaSection = () => {
  const { language } = useLanguage()

  return (
    <section className="persona-section">
      <div className="persona-container">
        <div className="persona-card">
          <div className="persona-image">
            <img src="/images/tom-miller.jpg" alt="Tom Miller" />
          </div>
          
          <div className="persona-content">
            <h2 className="persona-name">Tom Miller, 53</h2>
            <p className="persona-role">
              {language === 'DE' ? 'Lehrer & Pflegender Angehöriger' : 'Teacher & Family Caregiver'}
            </p>
            
            <div className="persona-bio">
              <h3>{language === 'DE' ? 'Profil' : 'Profile'}</h3>
              <p>
                {language === 'DE'
                  ? 'Ich bin Lehrer und arbeite von 7 bis 16 Uhr. Aufgrund gesundheitlicher Probleme lebe ich bei meinen Eltern. Während der Arbeitszeit kann ich nicht zu Hause sein. Mein Vater hatte einen Herzinfarkt und das tägliche Leben ist seitdem schwierig geworden.'
                  : 'I am a Teacher and work from 7 am to 4 pm. Because of health trouble, I am living with my parents. During working hours, it is not possible for me to be home. My father had a heart attack, and since then, everyday life has been difficult.'
                }
              </p>
            </div>
            
            <div className="persona-challenges">
              <h3>{language === 'DE' ? 'Herausforderungen' : 'Challenges'}</h3>
              <p>
                {language === 'DE'
                  ? 'Es ist schwer, einen guten Pfleger zu finden und sich sicher zu fühlen. Ich habe Vertrauensprobleme. Die Agenturen sind schwer erreichbar und oft überlastet.'
                  : 'It is hard to find a good caregiver and feel safe with them. I have trust issues. The agencies are difficult to reach and often overloaded.'
                }
              </p>
            </div>
            
            <div className="persona-wishes">
              <h3>{language === 'DE' ? 'Wünsche' : 'Wishes'}</h3>
              <p>
                {language === 'DE'
                  ? 'Ich hoffe, einen besseren, einfacheren Weg zu finden, um Pflegedienste zu arrangieren. Vielleicht eine Option, die flexibler ist und bessere Kommunikation bietet.'
                  : 'I hope to find a better, easier way to provide caregiver services. Maybe an option that\'s more flexible and better at communication.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonaSection
