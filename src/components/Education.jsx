import { useRef } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

export default function Education({ copy, language, education }) {
  const eyebrowRef = useRef(null)

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        ref={eyebrowRef}
        className="eyebrow"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        onViewportEnter={() => eyebrowRef.current?.classList.add('shimmer-active')}
      >
        {copy.eyebrow}
      </motion.span>
      <div className="section-title-wrap">
        <motion.h2
          className="section-title"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {copy.title}
        </motion.h2>
      </div>

      <div className="education-list">
        {education.map((edu, i) => (
          <motion.article
            key={edu.institution}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {edu.logo ? (
              <img
                src={edu.logo}
                alt={edu.institution}
                className="education-logo"
              />
            ) : (
              <div className="education-logo" style={{
                background: 'var(--accent-dim)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}>🎓</div>
            )}
            <div className="education-info">
              <h3 className="education-institution">{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-desc">{edu.desc[language] ?? edu.desc.en}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
