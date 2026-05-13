import { motion } from 'framer-motion'

export default function Experience({ copy, language, experiences }) {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{copy.eyebrow}</span>
      <h2 className="section-title">{copy.title}</h2>

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
