import { motion } from 'framer-motion'

const SKILL_CARDS = [
  { icon: '🧠', label: 'IndoBERTweet', sub: 'NLP' },
  { icon: '⚡', label: 'ONNX Runtime', sub: 'Inference' },
  { icon: '📊', label: 'Analytics', sub: 'Data' },
  { icon: '🔧', label: 'Applied', sub: 'Systems' },
]

export default function Hero({ copy }) {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="eyebrow">{copy.eyebrow}</span>

        <h1 className="hero-name">
          Muhammad<br />
          Bayu <span className="hero-name-accent">Satrio</span>
        </h1>

        <p className="hero-role">{copy.chipTitle}</p>
        <p className="hero-body">{copy.body}</p>

        <div className="hero-skills-grid">
          {SKILL_CARDS.map(card => (
            <div key={card.label} className="hero-skill-card">
              <span className="hero-skill-icon">{card.icon}</span>
              <span className="hero-skill-label">{card.label}</span>
              <span className="hero-skill-sub">{card.sub}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">{copy.primaryCta}</a>
          <a
            href="/Resume_Muhammad_Bayu_Satrio.pdf"
            download="Resume_Muhammad_Bayu_Satrio.pdf"
            className="btn btn-secondary"
          >
            {copy.secondaryCta}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
