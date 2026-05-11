import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

function Experience({ copy, language = 'en', experiences = [] }) {
    return (
        <section id="experience" style={{ padding: '8rem 5% 4rem' }}>
            <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto' }}>
                <p className="section-eyebrow" style={{ textAlign: 'center', color: '#38bdf8', fontWeight: 600, marginBottom: '0.75rem' }}>{copy?.eyebrow}</p>
                <h2 className="title-gradient section-heading" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>{copy?.title}</h2>

                <div className="timeline-list" style={{ position: 'relative', borderLeft: '2px solid rgba(56, 189, 248, 0.3)', paddingLeft: '2.5rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {experiences.map((exp, idx) => (
                        <MotionDiv
                            key={idx}
                            style={{ position: 'relative' }}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            {/* Garis Mutiara Waktu (Timeline Dot) */}
                            <div style={{
                                position: 'absolute', left: '-3.15rem', top: '0', width: '18px', height: '18px',
                                borderRadius: '50%', background: '#38bdf8', outline: '4px solid #08080b',
                                boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)'
                            }}></div>

                            {/* Box Konten Bento */}
                            <div className="bento-card timeline-card" style={{ padding: '2rem', marginTop: '-1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ color: '#f8fafc', fontSize: '1.4rem', marginBottom: '0.4rem' }}>{exp.role}</h3>
                                        <h4 className="accent-gradient" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</h4>
                                    </div>
                                    <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', color: '#cbd5e1', fontSize: '0.85rem' }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>{exp.desc?.[language] ?? exp.desc?.en}</p>
                            </div>
                        </MotionDiv>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Experience;
