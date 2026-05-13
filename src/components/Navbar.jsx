import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'hero', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'certificates', labelKey: 'certificates' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'education', labelKey: 'education' },
  { id: 'contact', labelKey: 'contact' },
]

const EASE = [0.76, 0, 0.24, 1]

export default function Navbar({ copy, language, onLanguageChange }) {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS
      .map(item => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => scrollTo('hero')}
          aria-label="Back to top"
        >
          Bayu<span className="navbar-logo-dot">.</span>
        </button>

        <nav className="navbar-links" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              type="button"
              className={`navbar-link${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {copy[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="navbar-lang">
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => onLanguageChange('en')}
            >EN</button>
            <span className="navbar-lang-divider">|</span>
            <button
              type="button"
              className={language === 'id' ? 'active' : ''}
              onClick={() => onLanguageChange('id')}
            >ID</button>
          </div>

          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          className="navbar-mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              type="button"
              className={`navbar-mobile-link${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {copy[item.labelKey]}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
