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
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Background3D />
      <Navigation />
      <main>
        <Hero />
        <Terminal />
        <BentoSection />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="glass-panel" style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '2rem', background: 'rgba(3, 0, 20, 0.4)' }}>
        <p style={{ color: '#64748b' }}>&copy; 2026 Portfolio. Crafted with 💡 and React.</p>
      </footer>
    </>
  )
}

export default App
