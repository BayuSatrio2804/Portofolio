import { useEffect, useMemo, useState } from 'react'
import Background3D from './components/Background3D'
import Sidebar from './components/Sidebar'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import BentoSection from './components/BentoSection'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Education from './components/Education'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import { certificates, education, experiences, getCopy, projects } from './data/portfolioContent'

function App() {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem('portfolio-language') || 'en'
  )
  const copy = useMemo(() => getCopy(language), [language])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Background3D />
      <div className="app-shell">
        <Sidebar copy={copy.nav} language={language} onLanguageChange={setLanguage} />
        <main className="content-area">
          <Hero copy={copy.hero} />
          <BentoSection copy={copy.about} />
          <Projects copy={copy.projects} language={language} projects={projects} />
          <Certificates copy={copy.certificates} certificates={certificates} />
          <Experience copy={copy.experience} language={language} experiences={experiences} />
          <Education copy={copy.education} language={language} education={education} />
          <Terminal language={language} />
          <Contact copy={copy.contact} />
        </main>
      </div>
    </>
  )
}

export default App
