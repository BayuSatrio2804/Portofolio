import { useRef } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

export default function Certificates({ copy, certificates }) {
  const eyebrowRef = useRef(null)

  return (
    <motion.section
      id="certificates"
      className="certificates-section"
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
      <motion.p
        className="section-body"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {copy.body}
      </motion.p>

      <div className="certificates-list">
        {certificates.map(cert => (
          <motion.article
            key={cert.title}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {cert.image && (
              <div className="certificate-image-wrap">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
                <div className="certificate-badge">🥈 2nd Place · National</div>
              </div>
            )}
            <div className="certificate-info">
              <span className="certificate-category">{cert.category}</span>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-year">{cert.year}</p>
              {cert.image && (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary certificate-view-btn"
                >
                  {copy.view}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
