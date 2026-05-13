import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

export default function Education({ copy, language, education }) {
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
        className="eyebrow"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {copy.eyebrow}
      </motion.span>
      <div className="section-title-wrap">
        <motion.h2
          className="section-title"
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
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
