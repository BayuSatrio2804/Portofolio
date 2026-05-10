import { motion } from 'framer-motion';

const MotionSection = motion.section;

function BentoSection({ copy }) {
    return (
        <MotionSection
            id="about"
            className="section about-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="about-photo-card">
                <img src="/foto-saya.jpg" alt="Muhammad Bayu Satrio profile portrait" />
            </div>
            <div className="about-content">
                <span className="eyebrow">{copy.eyebrow}</span>
                <h2>{copy.title}</h2>
                {copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="capability-grid">
                    {copy.capabilities.map((capability) => (
                        <article key={capability.title} className="capability-card">
                            <h3>{capability.title}</h3>
                            <p>{capability.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </MotionSection>
    );
}

export default BentoSection;
