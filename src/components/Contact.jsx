import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_TARGET = 'bayusatrio0235@gmail.com'

export default function Contact({ copy }) {
  const [isSent, setIsSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL_TARGET}`, {
        method: 'POST',
        body: new FormData(e.target),
      })
      if (!res.ok) throw new Error(`FormSubmit ${res.status}`)
      setIsSent(true)
    } catch (err) {
      console.error(err)
      alert(copy.form.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{copy.eyebrow}</span>

      <div className="contact-grid">
        <div>
          <h2 className="contact-title">{copy.title}</h2>
          <p className="contact-body">{copy.body}</p>
          <div className="contact-social-links">
            <a
              href="https://github.com/BayuSatrio2804"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5.1 2.2 5.1 2.2a5.4 5.4 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 9.8c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
                <path d="M5 19c-3 1-4-3-4-3" />
              </svg>
              {copy.github}
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-bayu-satrio-52826a2a5/"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {copy.linkedin}
            </a>
          </div>
        </div>

        <div className="contact-form-panel">
          {isSent ? (
            <div className="contact-sent">
              <p className="contact-sent-title">{copy.form.sentTitle}</p>
              <p className="contact-sent-body">{copy.form.sentBody}</p>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
                onClick={() => setIsSent(false)}
              >
                {copy.form.another}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div className="contact-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder={copy.form.name}
                  aria-label={copy.form.name}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={copy.form.email}
                  aria-label={copy.form.email}
                  required
                  className="form-input"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={copy.form.subject}
                aria-label={copy.form.subject}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder={copy.form.message}
                aria-label={copy.form.message}
                rows="5"
                required
                className="form-textarea"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.6 : 1 }}
              >
                {isSubmitting ? copy.form.sending : copy.form.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  )
}
