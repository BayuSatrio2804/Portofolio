import { motion } from 'framer-motion';

function Hero() {
    return (
        <motion.section 
            id="hero" 
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.1 }}>
                Hello, I am <span className="accent-gradient">Muhammad Bayu Satrio</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '2.5rem', fontWeight: 300, maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.6, letterSpacing: '0.5px' }}>
                Silver Medalist GEMASTIK XVIII 2025 in ICT Business Development | <span className="accent-gradient" style={{ fontWeight: 600 }}>Fullstack Web Developer</span> | <span className="accent-gradient" style={{ fontWeight: 600 }}>AI Engineer</span> | <span className="accent-gradient" style={{ fontWeight: 600 }}>Internet Of Things</span> | Undergraduate Bachelor of Information Technology, Telkom University
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn primary-btn">View Projects</a>
                <a href="/Resume_Muhammad_Bayu_Satrio.pdf?v=new" download="Resume_Muhammad_Bayu_Satrio.pdf" className="btn secondary-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Download Resume
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
                <a href="#about" className="btn secondary-btn">About Me</a>
            </div>
        </motion.section>
    )
}
export default Hero
