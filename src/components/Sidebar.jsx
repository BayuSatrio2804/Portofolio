import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'hero', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'certificates', labelKey: 'certificates' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'education', labelKey: 'education' },
  { id: 'contact', labelKey: 'contact' },
]

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
        <div className="sidebar-logo">
          Bayu<span className="sidebar-logo-dot">.</span>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              type="button"
              className={`sidebar-nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {copy[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
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
        </div>
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
