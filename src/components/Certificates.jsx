import { motion } from 'framer-motion'

export default function Certificates({ copy, certificates }) {
  return (
    <motion.section
      id="certificates"
      className="certificates-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{copy.eyebrow}</span>
      <h2 className="section-title">{copy.title}</h2>
      <p className="section-body">{copy.body}</p>

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
