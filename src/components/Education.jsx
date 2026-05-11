import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const schoolFallbackIcon = (
    <svg width="55" height="55" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="16" fill="#EAE6DF" />
        <circle cx="42" cy="42" r="26" fill="#88A3BC" opacity="0.9" />
        <circle cx="58" cy="58" r="26" fill="#64839C" opacity="0.9" />
    </svg>
);

function Education({ copy, language = 'en', education = [] }) {
    return (
        <section id="education" style={{ padding: '3rem 5% 4rem' }}>
            <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto' }}>

                {/* Pilar Pendidikan */}
                <div>
                    <p className="section-eyebrow" style={{ color: '#38bdf8', fontWeight: 600, marginBottom: '0.75rem' }}>{copy?.eyebrow}</p>
                    <h2 className="title-gradient section-heading" style={{ fontSize: '2rem', marginBottom: '2rem' }}>{copy?.title}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {education.map((edu, idx) => (
                            <MotionDiv
                                key={idx}
                                className="bento-card education-card"
                                style={{ padding: '2rem 1.8rem' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>

                                    {/* Foto Logo Kampus / Icon */}
                                    {edu.logo ? (
                                        <img
                                            src={edu.logo}
                                            alt={edu.institution}
                                            style={{ width: '55px', height: '55px', objectFit: 'contain', background: '#fff', padding: '5px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${edu.institution}&background=fff&color=0ea5e9&size=100`; }}
                                        />
                                    ) : (
                                        <div style={{ width: '55px', height: '55px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                                            {schoolFallbackIcon}
                                        </div>
                                    )}

                                    <div>
                                        <h3 style={{ color: '#f8fafc', fontSize: '1.25rem', marginBottom: '0.2rem' }}>{edu.institution}</h3>
                                        <h4 style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 500 }}>{edu.degree}</h4>
                                    </div>
                                </div>

                                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1.2rem' }}>
                                    {edu.period}
                                </span>
                                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem' }}>{edu.desc?.[language] ?? edu.desc?.en}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;
