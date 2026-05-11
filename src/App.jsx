import { useEffect, useMemo, useState } from 'react'
import Background3D from './components/Background3D'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Terminal from './components/Terminal'
import Hero from './components/Hero'
import BentoSection from './components/BentoSection'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { certificates, education, experiences, getCopy, projects } from './data/portfolioContent'

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'en'
  })
  const copy = useMemo(() => getCopy(language), [language])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <>
      <Preloader copy={copy.preloader} />
      <CustomCursor />
      <Background3D />
      <Navigation copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero copy={copy.hero} />
        <BentoSection copy={copy.about} />
        <Projects copy={copy.projects} language={language} projects={projects} />
        <Certificates copy={copy.certificates} certificates={certificates} />
        <Experience copy={copy.experience} language={language} experiences={experiences} />
        <Education copy={copy.education} language={language} education={education} />
        <Terminal language={language} />
        <Contact copy={copy.contact} />
      </main>
      <footer className="glass-panel site-footer">
        <p>{copy.footer.text}</p>
      </footer>
    </>
  )
}

export default App
