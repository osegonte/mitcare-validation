import './styles.css'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import PersonaSection from './components/PersonaSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import FutureExpansion from './components/FutureExpansion'
import Reception from './components/Reception'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <PersonaSection />
        <ProblemSection />
        <SolutionSection />
        <FutureExpansion />
        <Reception />
        <CallToAction />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App