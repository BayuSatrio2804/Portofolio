import React from 'react';

function About() {
    return (
        <section id="about" style={{ minHeight: 'auto', padding: '6rem 5% 4rem' }}>
            <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderRadius: '25px', maxWidth: '950px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>

                {/* Kontainer Foto Profil dengan Efek Glowing */}
                <div style={{ position: 'relative', width: '220px', height: '220px', flexShrink: 0 }}>
                    {/* Efek Cahaya (Glow) di belakang foto */}
                    <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'linear-gradient(45deg, #0ea5e9, #8b5cf6)', filter: 'blur(25px)', opacity: '0.4', borderRadius: '50%', zIndex: 0, animation: 'pulse 4s infinite alternate' }}></div>

                    {/* Gambar Foto Profil Anda */}
                    <img
                        // Sesuaikan dengan nama foto lokal yang Anda letakkan di folder public/
                        src="/foto-saya.jpg"
                        alt="Foto Profil"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid rgba(255, 255, 255, 0.15)', position: 'relative', zIndex: 1, boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)' }}
                        // Jika foto gagal dimuat, akan memuat gambar avatar darurat:
                        onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=IT+Professional&background=0ea5e9&color=fff&size=200' }}
                    />
                </div>

                {/* Konten Teks Tentang Saya */}
                <div style={{ flex: '1 1 400px', textAlign: 'left' }} className="about-text-container">
                    <h2 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'inherit' }}>Tentang Saya</h2>

                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '1.5rem' }}>
                        Halo! Saya adalah seorang pembelajar sepanjang hayat dengan fokus keahlian di bidang <span style={{ color: '#38bdf8', fontWeight: 600 }}>Fullstack Web Development</span>, <span style={{ color: '#8b5cf6', fontWeight: 600 }}>AI Engineering</span>, dan <span style={{ color: '#0ea5e9', fontWeight: 600 }}>Internet of Things (IoT)</span>. Saya memiliki ketertarikan kuat dalam merancang sistem yang cerdas dan terintegrasi, mulai dari arsitektur <i>backend</i>, estetika antarmuka, hingga otomasi perangkat keras berbasis kecerdasan buatan.
                    </p>

                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#cbd5e1' }}>
                        Bagi saya, teknologi bukan sekadar rentetan kode, melainkan ekosistem untuk menghadirkan solusi inovatif. Saya sangat menikmati tantangan teknis dalam menggabungkan pengembangan web dengan kecerdasan buatan maupun jaringan sensor (IoT) untuk menciptakan produk digital yang berdampak dan berpusat pada kenyamanan pengguna.
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <a href="#projects" className="btn primary-btn" style={{ fontSize: '0.95rem', padding: '0.8rem 2rem' }}>Lihat Karya Saya</a>
                    </div>
                </div>

            </div>

            {/* Kontainer Grafik Kontribusi GitHub */}
            <div className="glass-panel" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '25px', maxWidth: '950px', width: '100%', margin: '3rem auto 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: '#ebf8ff', fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '0.5px' }}>Jejak Eksekusi Kode (GitHub Activity)</h3>
                <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="https://ghchart.rshah.org/38bdf8/BayuSatrio2804"
                        alt="GitHub Contributions Heatmap"
                        style={{ minWidth: '700px', maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.3))' }}
                    />
                </div>
            </div>

            {/* Menambahkan keyframe animasi berkedip khusus untuk komponen About */}
            <style>
                {`
          @keyframes pulse {
            0% { transform: scale(0.9); opacity: 0.3; }
            100% { transform: scale(1.1); opacity: 0.6; }
          }
          @media (max-width: 768px) {
            .about-text-container {
              text-align: center !important;
            }
            .about-text-container h2 {
              text-align: center !important;
            }
          }
        `}
            </style>
        </section>
    )
}

export default About;
