import { motion } from 'framer-motion';

const MotionSection = motion.section;

function Hero({ copy }) {
    return (
        <MotionSection
            id="hero"
            className="hero-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hero-copy">
                <span className="eyebrow">{copy.eyebrow}</span>
                <h1>{copy.headline}</h1>
                <p>{copy.body}</p>
                <div className="hero-proof">
                    {copy.proof.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="hero-actions">
                    <a href="#projects" className="btn primary-btn">{copy.primaryCta}</a>
                    <a href="/Resume_Muhammad_Bayu_Satrio.pdf?v=new" download="Resume_Muhammad_Bayu_Satrio.pdf" className="btn secondary-btn">{copy.secondaryCta}</a>
                </div>
            </div>
            <div className="hero-visual" aria-label="AI inference signal visualization">
                <div className="profile-chip">
                    <img src="/foto-saya.jpg" alt={copy.name} />
                    <div>
                        <strong>{copy.name}</strong>
                        <span>{copy.chipTitle}</span>
                    </div>
                </div>
                <div className="signal-panel">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <span key={index} className={index % 5 === 0 ? 'hot' : ''} />
                    ))}
                </div>
                <p>{copy.chipMeta}</p>
            </div>
        </MotionSection>
    );
}

export default Hero;
