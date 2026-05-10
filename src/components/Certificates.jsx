import { Award, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

function Certificates({ copy, certificates }) {
  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-heading">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <motion.article
            key={`${certificate.title}-${certificate.year}`}
            className="certificate-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <img src={certificate.image} alt={`${certificate.title} certificate`} />
            <div>
              <div className="card-kicker">
                <Award size={16} />
                <span>{certificate.category}</span>
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span className="certificate-year">{certificate.year}</span>
              <a href={certificate.image} target="_blank" rel="noreferrer" className="text-link">
                {copy.view}
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
