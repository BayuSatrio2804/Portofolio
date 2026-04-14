import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Back-End Web Developer",
        company: "Bidanku (Digital Transformation Group)",
        period: "Aug 2025 - Jan 2026",
        desc: "Led the design of relational database schemas (ANC, Family Planning, Immunizations) and implementation of automated medical calculations for future midwifery clinic medical record systems.",
    },
    {
        role: "CFO & ICT Business Development",
        company: "ACETRA (Smart IoT System)",
        period: "Jun 2025 - Oct 2025",
        desc: "Managed strategic budgets for sensor hardware procurement and formulated innovative business frameworks for IoT fermentation systems. Finalist in the prestigious GEMASTIK XVIII 2025 competition.",
    },
    {
        role: "Fullstack Web Developer",
        company: "DonasiKu Platform",
        period: "2025",
        desc: "Realized interactive interfaces using the React/Vite ecosystem powered by a robust backend infrastructure layered with Laravel for donation distribution transparency.",
    }
];

function Experience() {
    return (
        <section id="experience" style={{ padding: '8rem 5% 4rem' }}>
            <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto' }}>
                <h2 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Professional Career Journey</h2>

                <div style={{ position: 'relative', borderLeft: '2px solid rgba(56, 189, 248, 0.3)', paddingLeft: '2.5rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {experiences.map((exp, idx) => (
                        <motion.div 
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
                            <div className="bento-card" style={{ padding: '2rem', marginTop: '-1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ color: '#f8fafc', fontSize: '1.4rem', marginBottom: '0.4rem' }}>{exp.role}</h3>
                                        <h4 className="accent-gradient" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</h4>
                                    </div>
                                    <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', color: '#cbd5e1', fontSize: '0.85rem' }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Experience;
