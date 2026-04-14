import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [time, setTime] = useState("");
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('id-ID', { hour12: false }));
        };
        updateClock();
        const timerId = setInterval(updateClock, 1000);
        return () => clearInterval(timerId);
    }, []);

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

            {/* Kiri: Jam Digital (Live Engine) */}
            <div style={{ color: '#f8fafc', fontFamily: 'monospace', fontSize: '1.15rem', letterSpacing: '3px', paddingLeft: '0.5rem', fontWeight: 500 }}>
                {time}
            </div>

            {/* Tengah: Menu Tab Interaktif */}
            <ul style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                <li>
                    <a href="#hero" style={{
                        display: 'inline-block', color: '#f8fafc', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600,
                        background: 'rgba(255,255,255,0.1)', padding: '0.6rem 1.4rem', borderRadius: '25px'
                    }}>Home</a>
                </li>
                <li style={{ position: 'relative' }} onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
                    <button style={{
                        color: '#cbd5e1', background: 'transparent', border: 'none',
                        fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.6rem 1.4rem', transition: 'color 0.3s'
                    }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                        About
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>

                    {/* Komponen Dropdown Mega Menu */}
                    <AnimatePresence>
                        {isAboutOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                style={{
                                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                                    marginTop: '1rem', background: 'rgba(15, 23, 42, 0.92)',
                                    backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '24px', padding: '1rem', display: 'flex', gap: '0.5rem',
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)', cursor: 'default'
                                }}
                            >
                                <MenuCard
                                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>}
                                    title="Achievements" desc="Certifications & Awards" href="#education"
                                />
                                <MenuCard
                                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
                                    title="Expertise" desc="Tech Stack & Tools" href="#about"
                                />
                                <MenuCard
                                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
                                    title="Experience" desc="Professional Journey" href="#experience"
                                />
                                <MenuCard
                                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4v5"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5h-5"></path></svg>}
                                    title="Projects" desc="Selected Works Showcase" href="#projects"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>
                <li>
                    <a href="#contact" style={{ display: 'inline-block', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, padding: '0.6rem 1.4rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>Contact</a>
                </li>
            </ul>

            {/* Kanan: Ikon Pengaturan Interaktif */}
            <div style={{ display: 'flex', gap: '0.6rem', paddingRight: '0.5rem' }}>
                <button onClick={toggleFullScreen} className="icon-btn" title="Toggle Fullscreen">
                    <svg width="16" height="16" viewBox="0 -3 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                </button>
                <button onClick={() => alert("Multi-Language Feature (EN/ID) is being designed by The Architect! 🌏")} className="icon-btn" title="Language">
                    <svg width="16" height="16" viewBox="0 -2 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </button>
            </div>
        </nav>
    );
}

// Komponen Pembantu: Kartu Menu di Dalam Dropdown
function MenuCard({ icon, title, desc, href }) {
    return (
        <a href={href} style={{
            display: 'flex', flexDirection: 'column', gap: '0.4rem', padding: '1.2rem',
            background: 'rgba(255,255,255,0.03)', borderRadius: '16px', textDecoration: 'none',
            width: '145px', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.02)'
        }}
            onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.02)';
            }}
        >
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f8fafc', marginBottom: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                {icon}
            </div>
            <b style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{title}</b>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', lineHeight: 1.4 }}>{desc}</span>
        </a>
    );
}

// Hapus inline styling untuk mencegah React loop error
