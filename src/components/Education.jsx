import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: "Universitas Telkom",
        degree: "Information Technology",
        period: "Sep 2023 - Sep 2027",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_Telkom_University_potrait.png/600px-Logo_Telkom_University_potrait.png", // Logo Valid Telkom
        desc: "Focused on studying software engineering pillars, modern computing systems, and exploring innovative information technology development."
    },
    {
        institution: "SMAN 3 Banjarmasin",
        degree: "High School Diploma, IPA",
        period: "2020 - 2023",
        customIcon: (
            <svg width="55" height="55" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="16" fill="#EAE6DF" />
                <circle cx="42" cy="42" r="26" fill="#88A3BC" opacity="0.9" />
                <circle cx="58" cy="58" r="26" fill="#64839C" opacity="0.9" />
            </svg>
        ),
        desc: "Built a strong foundation in logical thinking, analytics, and exact sciences as a bridge before embarking on algorithm and programming studies."
    }
];

const certificates = [
    {
        title: "2nd Place GEMASTIK XVIII (National Level) in ICT",
        issuer: "Ministry of Higher Education, Science, and Technology RI",
        year: "Oct 2025",
        image: "/sertifikat-gemastik.png"
    }
];

function Education() {
    return (
        <section id="education" style={{ padding: '3rem 5% 4rem' }}>
            <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>

                {/* Pilar Pendidikan */}
                <div>
                    <h2 className="title-gradient" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Academic History</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {educationData.map((edu, idx) => (
                            <motion.div 
                                key={idx} 
                                className="bento-card" 
                                style={{ padding: '2rem 1.8rem' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>

                                    {/* Foto Logo Kampus / Icon */}
                                    {edu.customIcon ? (
                                        <div style={{ width: '55px', height: '55px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                                            {edu.customIcon}
                                        </div>
                                    ) : edu.logo ? (
                                        <img
                                            src={edu.logo}
                                            alt={edu.institution}
                                            style={{ width: '55px', height: '55px', objectFit: 'contain', background: '#fff', padding: '5px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${edu.institution}&background=fff&color=0ea5e9&size=100`; }}
                                        />
                                    ) : null}

                                    <div>
                                        <h3 style={{ color: '#f8fafc', fontSize: '1.25rem', marginBottom: '0.2rem' }}>{edu.institution}</h3>
                                        <h4 style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 500 }}>{edu.degree}</h4>
                                    </div>
                                </div>

                                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1.2rem' }}>
                                    {edu.period}
                                </span>
                                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem' }}>{edu.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pilar Sertifikasi */}
                <div>
                    <h2 className="title-gradient" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Certifications & Affiliations</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {certificates.map((cert, idx) => (
                            <motion.div 
                                key={idx} 
                                className="bento-card" 
                                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', borderLeft: '4px solid #818cf8', borderRadius: '15px' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                {cert.image && (
                                    <img src={cert.image} alt="Sertifikat" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }} />
                                )}
                                <h3 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{cert.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                    <span>{cert.issuer}</span>
                                    <span style={{ fontWeight: 600, color: '#38bdf8' }}>{cert.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;
