import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]
const isTouch = 'ontouchstart' in window

function useTiltSpotlight(ref) {
  useEffect(() => {
    if (isTouch || !ref.current) return
    const el = ref.current
    const onMove = e => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.02)`
      el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
      el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
    }
    const onLeave = () => { el.style.transform = '' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [ref])
}

function ProjectCard({ project, copy, language, isExpanded, onToggle, index }) {
  const cardRef = useRef(null)
  useTiltSpotlight(cardRef)
  const summary = project.summary[language] ?? project.summary.en
  const details = project.details[language] ?? project.details.en

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      layout
    >
      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-role-label">{project.role}</span>
          <span className="project-period-label">{project.period}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{summary}</p>

        <div className="project-tech-list">
          {project.tech.map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="project-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.images.length > 0 && (
                <div className="project-gallery">
                  <p className="project-gallery-label">{copy.visualDocumentation}</p>
                  <div className="project-gallery-track">
                    {project.images.map((img, i) => (
                      <img
                        key={img}
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="project-gallery-img"
                      />
                    ))}
                  </div>
                </div>
              )}

              <p className="project-contributions-label">{copy.contributions}</p>
              <ul className="project-details-list">
                {details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-repo-link"
                >
                  {copy.repo} →
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        className={`project-toggle-btn${isExpanded ? ' expanded' : ''}`}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {isExpanded ? copy.collapse : copy.expand}
      </button>
    </motion.article>
  )
}

export default function Projects({ copy, language, projects }) {
  const [expandedId, setExpandedId] = useState(null)
  const eyebrowRef = useRef(null)

  return (
    <motion.section
      id="projects"
      className="projects-section"
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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            copy={copy}
            language={language}
            isExpanded={expandedId === project.slug}
            onToggle={() => setExpandedId(expandedId === project.slug ? null : project.slug)}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  )
}
