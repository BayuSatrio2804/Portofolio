import { motion } from 'framer-motion'

export default function BentoSection({ copy }) {
  return (
    <motion.section
      id="about"
      className="bento-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{copy.eyebrow}</span>
      <h2 className="section-title">{copy.title}</h2>

      <div className="about-bio">
        {copy.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="capability-grid">
        {copy.capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            className="capability-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3 className="capability-title">{cap.title}</h3>
            <p className="capability-body">{cap.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
