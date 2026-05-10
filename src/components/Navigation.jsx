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
        <nav className="site-navigation" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            rowGap: '0.5rem',
            columnGap: '0.75rem',
            width: '92%',
            maxWidth: '1300px',
            padding: '0.65rem 0.9rem',
            position: 'fixed',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(8, 8, 11, 0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '50px',
            zIndex: 1000,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            overflowX: 'auto'
        }}>
            <div className="navigation-clock" style={{ color: '#f8fafc', fontFamily: 'monospace', fontSize: '1.05rem', letterSpacing: '2px', paddingLeft: '0.35rem', fontWeight: 500, flexShrink: 0 }}>
                {time}
            </div>

            <ul className="navigation-links" style={{ display: 'flex', flex: '1 1 520px', flexWrap: 'wrap', justifyContent: 'center', gap: '0.35rem', rowGap: '0.4rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center', minWidth: 0, maxWidth: '760px', overflowX: 'auto' }}>
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
                                padding: '0.5rem 0.9rem',
                                borderRadius: '25px',
                                transition: 'color 0.3s',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = link.href === '#hero' ? '#f8fafc' : '#cbd5e1'}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="navigation-controls" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '0.5rem', paddingRight: '0.35rem', maxWidth: '100%' }}>
                <button onClick={toggleFullScreen} className="icon-btn" title="Toggle Fullscreen" type="button">
                    <svg width="16" height="16" viewBox="0 -3 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                </button>
                <div className="language-toggle" aria-label="Language selector" style={{ display: 'flex', flexShrink: 0, gap: '0.25rem' }}>
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
