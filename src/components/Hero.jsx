import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SKILL_CARDS = [
  { icon: '🧠', label: 'IndoBERTweet', sub: 'NLP' },
  { icon: '⚡', label: 'ONNX Runtime', sub: 'Inference' },
  { icon: '📊', label: 'Analytics', sub: 'Data' },
  { icon: '🔧', label: 'Applied', sub: 'Systems' },
]

const EASE = [0.76, 0, 0.24, 1]

function useTypewriter(text, speed = 55, delay = 1400) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(iv)
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text])
  return displayed
}

function WordReveal({ children, delay = 0, className = '' }) {
  return (
    <span className="word-reveal-wrap">
      <motion.span
        className={className}
        style={{ display: 'inline-block' }}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero({ copy }) {
  const role = useTypewriter(copy.chipTitle, 55, 1500)

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">

        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {copy.eyebrow}
        </motion.span>

        <h1 className="hero-name">
          <span className="hero-name-line">
            <WordReveal delay={0.2}>Muhammad</WordReveal>
          </span>
          <span className="hero-name-line">
            <WordReveal delay={0.38}>Bayu </WordReveal>
            <WordReveal delay={0.52} className="hero-name-accent">Satrio</WordReveal>
          </span>
        </h1>

        <div className="hero-role-wrap">
          <span className="hero-role">
            {role}
            <span className="hero-cursor">|</span>
          </span>
        </div>

        <motion.p
          className="hero-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
        >
          {copy.body}
        </motion.p>

        <div className="hero-skills-grid">
          {SKILL_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              className="hero-skill-card"
              initial={{ opacity: 0, y: 30, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 1.5 + i * 0.1, ease: EASE }}
            >
              <span className="hero-skill-icon">{card.icon}</span>
              <span className="hero-skill-label">{card.label}</span>
              <span className="hero-skill-sub">{card.sub}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0, ease: 'easeOut' }}
        >
          <a href="#projects" className="btn btn-primary">{copy.primaryCta}</a>
          <a
            href="/Resume_Muhammad_Bayu_Satrio.pdf"
            download="Resume_Muhammad_Bayu_Satrio.pdf"
            className="btn btn-secondary"
          >
            {copy.secondaryCta}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
