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

export default function Sidebar({ copy, language, onLanguageChange }) {
  const [active, setActive] = useState('hero')

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

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <aside className="sidebar">
        <motion.div
          className="sidebar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Bayu<span className="sidebar-logo-dot">.</span>
        </motion.div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              className={`sidebar-nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE }}
            >
              {copy[item.labelKey]}
            </motion.button>
          ))}
        </nav>

        <motion.div
          className="sidebar-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="lang-toggle">
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => onLanguageChange('en')}
            >EN</button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={language === 'id' ? 'active' : ''}
              onClick={() => onLanguageChange('id')}
            >ID</button>
          </div>
          <p className="sidebar-copyright">© 2026 Muhammad Bayu Satrio</p>
        </motion.div>
      </aside>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {NAV_ITEMS.slice(0, 5).map(item => (
          <button
            key={item.id}
            type="button"
            className={`mobile-nav-item${active === item.id ? ' active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            {copy[item.labelKey]}
          </button>
        ))}
      </nav>

      <div className="mobile-lang-toggle">
        <button
          type="button"
          className={language === 'en' ? 'active' : ''}
          onClick={() => onLanguageChange('en')}
        >EN</button>
        <span>|</span>
        <button
          type="button"
          className={language === 'id' ? 'active' : ''}
          onClick={() => onLanguageChange('id')}
        >ID</button>
      </div>
    </>
  )
}
