import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Bidanku - Midwifery Management System',
        period: 'Aug 2025 – Jan 2026',
        role: 'Back-End Web Development',
        tech: ['Node.js', 'SQL', 'Database Architecture'],
        repo: 'https://github.com/Xaverria30/bidanku',
        summary: 'Midwifery clinic management system to digitize paper-based manual medical records into a centralized secure digital database.',
        images: [
            '/bidanku-1.jpg',
            '/bidanku-2.jpg',
            '/bidanku-3.jpg',
            '/bidanku-4.jpg'
        ],
        details: [
            'Database Design: Architected relational database schemas to manage complex medical data such as ANC, Family Planning, Deliveries, and Immunizations.',
            'Medical Business Logic: Implemented automated medical calculations for determining patient\'s LMP (Last Menstrual Period) and EDD (Estimated Due Date).',
            'Data Aggregation & Integrity: Optimized SQL queries for Monthly Reports and created an Audit Log system to track data modifications.',
            'Fully responsible for the Backend & Database architectural development within the team.'
        ]
    },
    {
        id: 2,
        title: 'ACETRA: Smart IoT Fermentation System',
        period: 'Jun 2025 – Oct 2025',
        role: 'CFO & ICT Business Development',
        tech: ['IoT', 'ESP32', 'Firebase', 'Business Strategy'],
        repo: '',
        summary: 'Smart IoT monitoring system to optimize the fermentation process of coffee husk waste (GEMASTIK XVIII 2025 Competition).',
        images: [
            '/acetra-1.jpg',
            '/acetra-2.jpg',
            '/acetra-poster.jpg'
        ],
        details: [
            'Monitored crucial parameters such as pH, temperature, and gas via an ESP32 microcontroller integrated with Firebase and a mobile application.',
            'Financial Planning: Managed and strategized efficient hardware component procurement budgets (pH Sensors, MQ-135, Thermocouples).',
            'Business Strategy: Analyzed the commercial feasibility of this waste utilization system innovation.',
            'Product Management: Bridged technical capabilities (IoT) with business value by designing the operational Manual Book for the application.'
        ]
    },
    {
        id: 3,
        title: 'DonasiKu - Second-Hand Goods Platform',
        period: '2025',
        role: 'Fullstack Developer',
        tech: ['React.js', 'Vite', 'Laravel', 'PHP'],
        repo: 'https://github.com/Mazkad12/DONASIKU-WEBPRO',
        summary: 'Web-based second-hand goods donation platform facilitating transparent distribution or donation of goods.',
        images: [
            '/donasiku-1.jpg',
            '/donasiku-2.jpg',
            '/donasiku-3.jpg'
        ],
        details: [
            'Developed a responsive front-end marketing/Landing Page to increase donor interaction and trust.',
            'Built a Donation Tracking System for real-time distribution status updates.',
            'Integrated real-time Live Chat features for communication between donors and recipients.',
            'Engineered a robust system utilizing a Laravel backend and a modern React frontend.'
        ]
    }
];

function Projects() {
    const [expandedId, setExpandedId] = useState(null)

    return (
        <section id="projects" style={{ minHeight: 'auto', padding: '6rem 5% 4rem' }}>
            <h2 className="section-title title-gradient">Selected Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
                {projects.map(p => {
                    const isExpanded = expandedId === p.id;
                    return (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: 0.1 * p.id }}
                            className="bento-card"
                            style={{ display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease', transform: isExpanded ? 'scale(1.02)' : 'scale(1)' }}
                        >
                            <div style={{ padding: '2rem', flexGrow: 1 }}>
                                <h3 className="accent-gradient" style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{p.title}</h3>

                                {/* Posisi & Periode */}
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                                    <span style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '4px 10px', borderRadius: '12px' }}>{p.role}</span>
                                    <span style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '4px 10px', borderRadius: '12px' }}>{p.period}</span>
                                </div>

                                {/* Deskripsi Singkat */}
                                <p style={{ color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.summary}</p>

                                {/* Tags Teknologi */}
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {p.tech.map(t => (
                                        <span key={t} style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px' }}>{t}</span>
                                    ))}
                                </div>

                                {/* Detail yang bisa diekspansi */}
                                {isExpanded && (
                                    <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>

                                        {/* Galeri Gambar */}
                                        {p.images && p.images.length > 0 && (
                                            <div style={{ marginBottom: '2rem' }}>
                                                <h4 style={{ color: '#38bdf8', marginBottom: '1rem', fontSize: '0.95rem' }}>Visual Documentation:</h4>
                                                <div className="custom-scrollbar" style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px' }}>
                                                    {p.images.map((img, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={img}
                                                            alt={`${p.title} ${idx + 1}`}
                                                            style={{
                                                                height: '220px',
                                                                width: 'auto',
                                                                borderRadius: '12px',
                                                                border: '1px solid rgba(255,255,255,0.1)',
                                                                objectFit: 'cover',
                                                                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                                                                flexShrink: 0
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Responsibilities & Contributions:</h4>
                                        <ul style={{ color: '#cbd5e1', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: 1.7, listStyleType: 'disc' }}>
                                            {p.details.map((detail, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                                            ))}
                                        </ul>
                                        {p.repo && (
                                            <a href={p.repo} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
                                                🔗 View GitHub Repository
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Tombol Lihat Detail */}
                            <button
                                onClick={() => setExpandedId(isExpanded ? null : p.id)}
                                style={{
                                    background: isExpanded ? 'rgba(139, 92, 246, 0.2)' : 'rgba(3, 0, 20, 0.5)',
                                    border: 'none', color: '#fff', padding: '1rem', cursor: 'pointer',
                                    borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '1rem',
                                    borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', transition: 'background 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = isExpanded ? 'rgba(139, 92, 246, 0.2)' : 'rgba(3, 0, 20, 0.5)'}
                            >
                                {isExpanded ? 'Hide Details ᐱ' : 'View Project Details ᐯ'}
                            </button>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
