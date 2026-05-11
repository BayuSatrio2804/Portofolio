import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const defaultCopy = {
    eyebrow: 'Contact',
    title: "Let's build useful AI and data systems.",
    body: 'Open to collaboration, internship opportunities, AI/data roles, and applied software projects.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject / Purpose',
        message: 'Write your message here...',
        send: 'Send Message',
        sending: 'Sending Message...',
        sentTitle: 'Message Sent',
        sentBody: 'Thank you for reaching out. I will respond to your email as soon as possible.',
        another: 'Send Another Message',
        error: 'Message delivery failed. Please check your connection or contact me through GitHub or LinkedIn.'
    }
};

function Contact({ copy }) {
    const [isSent, setIsSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionCopy = {
        ...defaultCopy,
        ...copy,
        form: { ...defaultCopy.form, ...copy?.form }
    };
    const formCopy = sectionCopy.form;

    // Email target untuk notifikasi FormSubmit
    const EMAIL_TARGET = "bayusatrio0235@gmail.com";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        try {
            // Menggunakan FormSubmit API versi AJAX agar tanpa refresh halaman!
            const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_TARGET}`, {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                throw new Error(`FormSubmit returned ${response.status}`);
            }
            setIsSent(true);
        } catch (error) {
            console.error(error);
            alert(formCopy.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '6rem 5% 6rem' }}>
            <div className="bento-grid contact-grid" style={{ maxWidth: '950px', margin: '0 auto' }}>

                {/* Kolom Teks Ajakan Bertindak */}
                <MotionDiv
                    className="bento-card contact-panel"
                    style={{ gridColumn: 'span 5 / span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-eyebrow" style={{ color: '#38bdf8', fontWeight: 600, marginBottom: '0.75rem' }}>{sectionCopy.eyebrow}</p>
                    <h2 className="title-gradient section-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>{sectionCopy.title}</h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                        {sectionCopy.body}
                    </p>
                    <div className="contact-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://github.com/BayuSatrio2804" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: '#f8fafc', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5.1 2.2 5.1 2.2a5.4 5.4 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 9.8c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M5 19c-3 1-4-3-4-3"></path></svg>
                            {sectionCopy.github}
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-bayu-satrio-52826a2a5/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: '#f8fafc', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            {sectionCopy.linkedin}
                        </a>
                    </div>
                </MotionDiv>

                {/* Kolom Formulir Elektronik */}
                <MotionDiv
                    className="bento-card contact-panel"
                    style={{ gridColumn: 'span 7 / span 7' }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {isSent ? (
                        <div style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h3 style={{ color: '#38bdf8', fontSize: '2.2rem', marginBottom: '1rem' }}>{formCopy.sentTitle}</h3>
                            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{formCopy.sentBody}</p>
                            <button onClick={() => setIsSent(false)} className="btn primary-btn" style={{ marginTop: '2.5rem', padding: '0.8rem 2rem' }}>{formCopy.another}</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {/* Parameter Wajib FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="text" name="name" aria-label={formCopy.name} placeholder={formCopy.name} required style={inputStyle} />
                                <input type="email" name="email" aria-label={formCopy.email} placeholder={formCopy.email} required style={inputStyle} />
                            </div>
                            <input type="text" name="subject" aria-label={formCopy.subject} placeholder={formCopy.subject} required style={inputStyle} />

                            <textarea name="message" aria-label={formCopy.message} placeholder={formCopy.message} rows="5" required style={{ ...inputStyle, resize: 'vertical' }}></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn primary-btn"
                                style={{
                                    alignSelf: 'flex-start', padding: '0.8rem 2.5rem', marginTop: '0.5rem',
                                    opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? formCopy.sending : formCopy.send}
                            </button>
                        </form>
                    )}
                </MotionDiv>

            </div>
        </section>
    );
}

// Inline styles untuk inputs
const inputStyle = {
    width: '100%',
    padding: '1rem 1.2rem',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: '#f8fafc',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border 0.3s ease'
};

export default Contact;
