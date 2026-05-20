import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

function FirstDot() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <div
      ref={ref}
      className={`timeline-dot${isInView ? ' timeline-dot-pulse' : ''}`}
    />
  )
}

export default function Experience({ copy, language, experiences }) {
  const eyebrowRef = useRef(null)
  const timelineRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isTimelineInView && timelineRef.current) {
      timelineRef.current.classList.add('line-drawn')
    }
  }, [isTimelineInView])

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

      <div ref={timelineRef} className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="timeline-entry"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {i === 0 ? <FirstDot /> : <div className="timeline-dot" />}
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
