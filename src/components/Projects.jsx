import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionArticle = motion.article;

function Projects({ copy, language, projects }) {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="projects" className="projects-section" style={{ minHeight: 'auto', padding: '6rem 5% 4rem' }}>
            <p className="section-eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title title-gradient">{copy.title}</h2>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
                {projects.map((project, index) => {
                    const projectId = project.slug ?? project.id ?? project.title;
                    const isExpanded = expandedId === projectId;
                    const summary = project.summary[language] ?? project.summary.en;
                    const details = project.details[language] ?? project.details.en;
                    const hasImages = project.images.length > 0;
                    const detailsId = `project-details-${projectId}`;

                    return (
                        <MotionArticle
                            key={projectId}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bento-card project-card"
                            style={{ display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease', transform: isExpanded ? 'scale(1.02)' : 'scale(1)' }}
                        >
                            <div className="project-card-content" style={{ padding: '2rem', flexGrow: 1 }}>
                                <h3 className="accent-gradient project-title" style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{project.title}</h3>

                                <div className="project-meta" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                                    <span className="project-role" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '4px 10px', borderRadius: '12px' }}>{project.role}</span>
                                    <span className="project-period" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '4px 10px', borderRadius: '12px' }}>{project.period}</span>
                                </div>

                                <p className="project-summary" style={{ color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.5rem' }}>{summary}</p>

                                <div className="project-tech-list" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="project-tech-pill" style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px' }}>{tech}</span>
                                    ))}
                                </div>

                                <div id={detailsId} className="project-expanded" hidden={!isExpanded} style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                    {isExpanded && (
                                        <>
                                            {hasImages ? (
                                                <div className="project-gallery" style={{ marginBottom: '2rem' }}>
                                                    <h4 style={{ color: '#38bdf8', marginBottom: '1rem', fontSize: '0.95rem' }}>{copy.visualDocumentation}:</h4>
                                                    <div className="custom-scrollbar project-gallery-track" style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px' }}>
                                                        {project.images.map((image, imageIndex) => (
                                                            <img
                                                                key={image}
                                                                src={image}
                                                                alt={`${project.title} ${imageIndex + 1}`}
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
                                            ) : (
                                                <div className="model-visual" role="img" aria-label={`${project.title} model workflow visual`}>
                                                    <span>dataset.csv</span>
                                                    <span>IndoBERTweet</span>
                                                    <span>threshold.json</span>
                                                    <span>model.onnx</span>
                                                </div>
                                            )}

                                            <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>{copy.contributions}:</h4>
                                            <ul className="project-details-list" style={{ color: '#cbd5e1', fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: 1.7, listStyleType: 'disc' }}>
                                                {details.map((detail) => (
                                                    <li key={detail} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                                                ))}
                                            </ul>
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noreferrer" className="project-repo-link" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
                                                    {copy.repo}
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <button
                                type="button"
                                className="project-toggle"
                                aria-expanded={isExpanded}
                                aria-controls={detailsId}
                                onClick={() => setExpandedId(isExpanded ? null : projectId)}
                                style={{
                                    background: isExpanded ? 'rgba(139, 92, 246, 0.2)' : 'rgba(3, 0, 20, 0.5)',
                                    border: 'none', color: '#fff', padding: '1rem', cursor: 'pointer',
                                    borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '1rem',
                                    borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', transition: 'background 0.3s'
                                }}
                                onMouseEnter={(event) => event.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)'}
                                onMouseLeave={(event) => event.currentTarget.style.background = isExpanded ? 'rgba(139, 92, 246, 0.2)' : 'rgba(3, 0, 20, 0.5)'}
                            >
                                {isExpanded ? copy.collapse : copy.expand}
                            </button>
                        </MotionArticle>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
