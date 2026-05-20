import { useRef } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

export default function BentoSection({ copy, techStack, language }) {
  const eyebrowRef = useRef(null)

  return (
    <motion.section
      id="about"
      className="bento-section"
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

      <div className="about-bio">
        {copy.body.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      <div className="capability-grid">
        {copy.capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            className="capability-card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
          >
            <h3 className="capability-title">{cap.title}</h3>
            <p className="capability-body">{cap.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
