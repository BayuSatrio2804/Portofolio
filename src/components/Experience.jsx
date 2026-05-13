import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

export default function Experience({ copy, language, experiences }) {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
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

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="timeline-entry"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-desc">{exp.desc[language] ?? exp.desc.en}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
