import React from 'react';
import { motion } from 'framer-motion';

const badges = [
    "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=flat&logo=laravel&logoColor=white",
    "https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=Flutter&logoColor=white",
    "https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB",
    "https://img.shields.io/badge/tailwind-css-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/three.js-%23000000.svg?style=flat&logo=three.js&logoColor=white",
    "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white",
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=white",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/php-%23777BB4.svg?style=flat&logo=php&logoColor=white",
    "https://img.shields.io/badge/go-%2300ADD8.svg?style=flat&logo=go&logoColor=white",
    "https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54",
    "https://img.shields.io/badge/c++-%2300599C.svg?style=flat&logo=c%2B%2B&logoColor=white",
    "https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/dart-%230175C2.svg?style=flat&logo=dart&logoColor=white",
    "https://img.shields.io/badge/mysql-%2300000f.svg?style=flat&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase",
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white",
    "https://img.shields.io/badge/-Arduino-00979D?style=flat&logo=Arduino&logoColor=white",
    "https://img.shields.io/badge/ESP32-E7352C?style=flat&logo=espressif&logoColor=white"
];

function BentoSection() {
    return (
        <section id="about" style={{ padding: '6rem 5% 4rem', minHeight: 'auto' }}>
            <div className="bento-grid">

                {/* Intro Card - Spans 8 cols */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="bento-card" 
                    style={{ gridColumn: 'span 8 / span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#f8fafc', fontWeight: 700 }}>Fullstack. AI. IoT. <br /><span className="accent-gradient">Lifelong Learner.</span></h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
                        I believe that true innovation is born from the synergy of various technological disciplines. As a practitioner in this field, I focus on integrating smart digital ecosystems—leveraging the reliability of <i>Fullstack</i> architecture, the acuity of <i>Artificial Intelligence</i>, and the automation of <i>Internet of Things</i> (IoT).
                    </p>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1.05rem' }}>
                        Strongly committed to designing <i>end-to-end</i> solutions; combining the robustness of highly capable <i>backend</i> logic and cutting-edge data processing to produce intuitive visual interfaces that have a real impact on user experience.
                    </p>
                </motion.div>

                {/* Profile Card - Spans 4 cols */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bento-card" 
                    style={{ gridColumn: 'span 4 / span 4', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', position: 'relative', overflow: 'hidden' }}
                >
                    {/* Subtle Glow */}
                    <div style={{ position: 'absolute', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 60%)' }}></div>

                    <img src="/foto-saya.jpg" alt="Profile" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1, filter: 'grayscale(15%)' }} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=IT+Professional&background=020617&color=fff&size=200' }} />
                </motion.div>

                {/* Tech Stack Card - Spans 12 cols */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="bento-card" 
                    style={{ gridColumn: 'span 12 / span 12' }}
                >
                    <h3 style={{ color: '#e2e8f0', marginBottom: '1.2rem', fontWeight: 600, fontSize: '1.1rem' }}>Technology Arsenal & Tools</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {badges.map((url, i) => <img key={i} src={url} alt="tech badge" style={{ height: '28px', opacity: 0.9, transition: 'transform 0.2s, opacity 0.2s', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = 1 }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = 0.9 }} />)}
                    </div>
                </motion.div>

                {/* Epic GitHub Dashboard - Spans 12 cols */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                    className="bento-card" 
                    style={{ gridColumn: 'span 12 / span 12', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <h3 style={{ color: '#f8fafc', fontSize: '1.35rem', fontWeight: 700, margin: 0, letterSpacing: '0.3px' }}>GitHub Live Statistics</h3>
                    </div>

                    {/* API Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src="https://github-readme-stats-eight-theta.vercel.app/api?username=BayuSatrio2804&show_icons=true&title_color=38bdf8&text_color=cbd5e1&icon_color=38bdf8&bg_color=08080b&hide_border=true&locale=id"
                                alt="GitHub Stats"
                                style={{ width: '100%', maxWidth: '400px' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="color:#ef4444;font-size:0.9rem;text-align:center;">API sedang limit limit / Diblokir AdBlocker 😢<br/>Mohon matikan AdBlock atau gunakan VPN.</span>'; }}
                            />
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=BayuSatrio2804&layout=compact&title_color=38bdf8&text_color=cbd5e1&hide_border=true&bg_color=08080b"
                                alt="Top Languages"
                                style={{ width: '100%', maxWidth: '400px' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="color:#ef4444;font-size:0.9rem;text-align:center;">API sedang limit / Diblokir AdBlocker 😢<br/>Mohon matikan AdBlock atau gunakan VPN.</span>'; }}
                            />
                        </div>
                    </div>

                    {/* Heatmap Row */}
                    <div style={{ width: '100%', overflowX: 'auto', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem' }}>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }}>Global Contribution Heatmap</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <img
                                src="https://ghchart.rshah.org/38bdf8/BayuSatrio2804"
                                alt="GitHub Contributions Heatmap"
                                style={{ minWidth: '700px', width: '100%', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.15))' }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
export default BentoSection;
