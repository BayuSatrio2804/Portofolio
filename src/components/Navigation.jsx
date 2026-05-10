import { useEffect, useState } from 'react'

export default function Navigation({ copy, language, onLanguageChange }) {
    const [time, setTime] = useState("")

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`)
            })
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }

    useEffect(() => {
        const updateClock = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('id-ID', { hour12: false }))
        }
        updateClock()
        const timerId = setInterval(updateClock, 1000)
        return () => clearInterval(timerId)
    }, [])

    const links = [
        { href: '#hero', label: copy.home },
        { href: '#about', label: copy.about },
        { href: '#projects', label: copy.projects },
        { href: '#certificates', label: copy.certificates },
        { href: '#contact', label: copy.contact },
    ]

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
            maxWidth: '1300px',
            padding: '0.7rem 1.2rem',
            position: 'fixed',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(8, 8, 11, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '50px',
            zIndex: 1000,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
        }}>
            <div style={{ color: '#f8fafc', fontFamily: 'monospace', fontSize: '1.15rem', letterSpacing: '3px', paddingLeft: '0.5rem', fontWeight: 500 }}>
                {time}
            </div>

            <ul style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            style={{
                                display: 'inline-block',
                                color: link.href === '#hero' ? '#f8fafc' : '#cbd5e1',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: link.href === '#hero' ? 600 : 500,
                                background: link.href === '#hero' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                padding: '0.6rem 1.4rem',
                                borderRadius: '25px',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = link.href === '#hero' ? '#f8fafc' : '#cbd5e1'}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', paddingRight: '0.5rem' }}>
                <button onClick={toggleFullScreen} className="icon-btn" title="Toggle Fullscreen" type="button">
                    <svg width="16" height="16" viewBox="0 -3 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                </button>
                <div className="language-toggle" aria-label="Language selector">
                    {['en', 'id'].map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={language === item ? 'active' : ''}
                            onClick={() => onLanguageChange(item)}
                            aria-pressed={language === item}
                        >
                            {item.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
