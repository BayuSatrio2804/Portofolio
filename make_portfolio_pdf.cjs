const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/**
 * SUPER PREMIUM PORTFOLIO PDF GENERATOR
 * High-End Typography, Glassmorphism, and Dynamic Gradients.
 */

const COLORS = {
    bg: '#08080b',
    text: '#ffffff',
    textMuted: '#94a3b8',
    accent: '#38bdf8',
    accentSecondary: '#818cf8',
    violet: '#a78bfa',
    glass: 'rgba(255, 255, 255, 0.03)',
    glassBorder: 'rgba(255, 255, 255, 0.1)'
};

const FONTS = {
    regular: 'fonts/Outfit-Regular.ttf',
    bold: 'fonts/Outfit-Bold.ttf',
    extraBold: 'fonts/Outfit-ExtraBold.ttf'
};

const LAYOUT = {
    margin: 60,
    pageWidth: 595.28,
    pageHeight: 841.89,
    contentWidth: 475.28,
    radius: 20
};

const doc = new PDFDocument({ 
    margin: LAYOUT.margin, 
    size: 'A4',
    bufferPages: true 
});

const outputStream = fs.createWriteStream('public/Portfolio_Visual_Muhammad_Bayu_Satrio.pdf');
doc.pipe(outputStream);

// --- HELPER FUNCTIONS ---

function drawBackground(d = doc) {
    // Solid background
    d.rect(0, 0, LAYOUT.pageWidth, LAYOUT.pageHeight).fill(COLORS.bg);
    
    // Gradient Glow (Top Left & Bottom Right)
    d.save();
    const grad1 = d.radialGradient(0, 0, 0, 0, 0, 400);
    grad1.stop(0, COLORS.accent, 0.15)
         .stop(1, COLORS.bg, 0);
    d.rect(0, 0, 400, 400).fill(grad1);
    
    const grad2 = d.radialGradient(LAYOUT.pageWidth, LAYOUT.pageHeight, 0, LAYOUT.pageWidth, LAYOUT.pageHeight, 400);
    grad2.stop(0, COLORS.accentSecondary, 0.1)
         .stop(1, COLORS.bg, 0);
    d.rect(LAYOUT.pageWidth - 400, LAYOUT.pageHeight - 400, 400, 400).fill(grad2);
    d.restore();
}

function drawGlassCard(x, y, width, height, radius = LAYOUT.radius) {
    doc.save();
    doc.roundedRect(x, y, width, height, radius)
       .fill(COLORS.glass)
       .lineWidth(1)
       .strokeColor(COLORS.glassBorder)
       .stroke();
    doc.restore();
}

function drawImageBox(imagePath, x, y, width, height, options = {}) {
    if (!fs.existsSync(imagePath)) return;
    const { label, radius = LAYOUT.radius } = options;
    
    doc.save();
    // Border & Background
    doc.roundedRect(x, y, width, height, radius)
       .fill('#0c0c12')
       .lineWidth(1.5)
       .strokeColor(COLORS.glassBorder)
       .stroke();
    
    try {
        const img = doc.openImage(imagePath);
        const imgRatio = img.width / img.height;
        const boxRatio = width / height;
        
        let dw, dh, ox, oy;
        if (imgRatio > boxRatio) {
            dw = width;
            dh = dw / imgRatio;
        } else {
            dh = height;
            dw = dh * imgRatio;
        }
        ox = x + (width - dw) / 2;
        oy = y + (height - dh) / 2;
        
        doc.save();
        doc.roundedRect(x, y, width, height, radius).clip();
        doc.image(imagePath, ox, oy, { width: dw, height: dh });
        doc.restore();
        
        if (label) {
            doc.fillColor(COLORS.textMuted).font(FONTS.regular).fontSize(8).text(label.toUpperCase(), x, y + height + 8, { width, align: 'center', characterSpacing: 1 });
        }
    } catch (e) { console.error(e); }
    doc.restore();
}

function drawSectionTitle(title, x, y) {
    doc.save();
    doc.fillColor(COLORS.accent).font(FONTS.extraBold).fontSize(10).text(title.toUpperCase(), x, y, { characterSpacing: 2 });
    doc.rect(x, y + 15, 30, 2).fill(COLORS.accentSecondary);
    doc.restore();
}

// --- PROJECT DATA ---

const PROJECTS = [
    {
        title: 'Bidanku',
        subtitle: 'Digital Midwifery Records',
        period: '2025 – 2026',
        tech: ['Node.js', 'SQL', 'DB Architecture'],
        summary: 'A secure digital transformation system designed to centralize and automate medical records for midwifery clinics.',
        hero: 'public/bidanku-2.jpg',
        gallery: [
            { path: 'public/bidanku-1.jpg', label: 'Admin Terminal' },
            { path: 'public/bidanku-3.jpg', label: 'Patient Ledger' },
            { path: 'public/bidanku-4.jpg', label: 'Medical Flow' }
        ],
        points: [
            'End-to-end relational database design for complex medical ecosystems.',
            'Precision logic for pregnancy milestones (LMP & EDD automated tracking).',
            'Advanced SQL optimization for monthly clinic aggregation reports.'
        ],
        accent: COLORS.accent
    },
    {
        title: 'ACETRA',
        subtitle: 'Smart IoT Fermentation',
        period: 'Jun – Oct 2025',
        tech: ['ESP32', 'Firebase', 'Data Science'],
        summary: 'National-level IoT innovation for real-time fermentation monitoring and waste optimization.',
        hero: 'public/acetra-poster.jpg',
        gallery: [
            { path: 'public/acetra-1.jpg', label: 'Sensory Hardware' },
            { path: 'public/acetra-2.jpg', label: 'Mobile Control' }
        ],
        points: [
            'Full ESP32 integration with Firebase for real-time sensor data telemetry.',
            'Silver Medalist at Gemastik XVIII 2025 in ICT Competition.',
            'Commercial feasibility analysis and hardware procurement strategy.'
        ],
        accent: COLORS.violet
    },
    {
        title: 'DonasiKu',
        subtitle: 'Charity Ecosystem',
        period: '2025',
        tech: ['React', 'Laravel', 'Rest API'],
        summary: 'A transparent second-hand goods donation platform bridging donors and recipients safely.',
        hero: 'public/donasiku-1.jpg',
        gallery: [
            { path: 'public/donasiku-2.jpg', label: 'Marketplace UI' },
            { path: 'public/donasiku-3.jpg', label: 'Tracking Module' }
        ],
        points: [
            'Robust full-stack development using Laravel backend and React frontend.',
            'Real-time tracking system to ensure donation transparency.',
            'Integrated communication module for donor-recipient coordination.'
        ],
        accent: COLORS.accentSecondary
    }
];

// --- GENERATION ---

// 1. COVER PAGE
drawBackground();
const phPath = path.join(__dirname, 'public/foto-saya.jpg');
if (fs.existsSync(phPath)) {
    const ps = 180;
    doc.save();
    doc.circle(LAYOUT.pageWidth/2, 220, ps/2).clip();
    doc.image(phPath, (LAYOUT.pageWidth - ps)/2, 220 - ps/2, { width: ps });
    doc.restore();
    doc.circle(LAYOUT.pageWidth/2, 220, ps/2 + 6).lineWidth(3).strokeColor(COLORS.accent).stroke();
}

doc.fillColor(COLORS.text).font(FONTS.extraBold).fontSize(42).text('SELECTED', 0, 360, { align: 'center', width: LAYOUT.pageWidth });
doc.fillColor(COLORS.accentSecondary).text('WORKS', 0, 400, { align: 'center', width: LAYOUT.pageWidth });

doc.fillColor(COLORS.text).font(FONTS.bold).fontSize(16).text('MUHAMMAD BAYU SATRIO', 0, 480, { align: 'center', width: LAYOUT.pageWidth });
doc.fillColor(COLORS.textMuted).font(FONTS.regular).fontSize(11).text('FULLSTACK WEB | AI ENGINEER | IOT SPECIALIST', 0, 500, { align: 'center', width: LAYOUT.pageWidth, characterSpacing: 1.5 });

// 2. ABOUT PAGE
doc.addPage();
drawBackground();
drawSectionTitle('Biography', LAYOUT.margin, 100);

doc.fillColor(COLORS.text).font(FONTS.bold).fontSize(28).text('Lifelong Learner.', LAYOUT.margin, 130);
doc.fillColor(COLORS.text).font(FONTS.regular).fontSize(14).text('Designing the future through integrated digital ecosystems.', LAYOUT.margin, 165);

const about = "Saya adalah seorang pembelajar sepanjang hayat dengan fokus keahlian di bidang Fullstack Web Development, AI Engineering, dan Internet of Things (IoT). Saya memiliki ketertarikan kuat dalam merancang sistem yang cerdas dan terintegrasi, mulai dari arsitektur backend, estetika antarmuka, hingga otomasi perangkat keras berbasis kecerdasan buatan.";
doc.fillColor(COLORS.textMuted).font(FONTS.regular).fontSize(12).text(about, LAYOUT.margin, 220, { width: LAYOUT.contentWidth, lineGap: 10, align: 'justify' });

drawGlassCard(LAYOUT.margin, 350, LAYOUT.contentWidth, 120);
doc.fillColor(COLORS.accent).font(FONTS.bold).fontSize(12).text('Core Expertise', LAYOUT.margin + 25, 375);
const skills = ['React / Next.js', 'Node.js / Express', 'Python / AI', 'Laravel', 'IoT Systems', 'SQL Architecture'];
let sx = LAYOUT.margin + 25, sy = 405;
skills.forEach(s => {
    doc.fillColor(COLORS.text).font(FONTS.regular).fontSize(10).text('→ ' + s, sx, sy);
    sy += 20;
    if (sy > 450) { sy = 405; sx += 150; }
});

// 3. PROJECT SHOWCASE
PROJECTS.forEach(p => {
    doc.addPage();
    drawBackground();
    
    // Title Branding
    doc.fillColor(p.accent).font(FONTS.extraBold).fontSize(32).text(p.title, LAYOUT.margin, 80);
    doc.fillColor(COLORS.text).font(FONTS.bold).fontSize(14).text(p.subtitle, LAYOUT.margin, 115);
    
    // Project Metadata
    doc.save();
    doc.rect(LAYOUT.margin, 145, 120, 25).fill(COLORS.glass);
    doc.fillColor(COLORS.accentSecondary).font(FONTS.bold).fontSize(9).text(p.period, LAYOUT.margin + 15, 155);
    doc.restore();

    // Hero Image - Large
    drawImageBox(path.join(__dirname, p.hero), LAYOUT.margin, 190, LAYOUT.contentWidth, 260);

    // Context & Technicals
    drawSectionTitle('Technical Contributions', LAYOUT.margin, 480);
    let by = 510;
    p.points.forEach(pt => {
        doc.fillColor(COLORS.text).font(FONTS.regular).fontSize(11).text('□ ' + pt, LAYOUT.margin + 10, by, { width: LAYOUT.contentWidth - 10, lineGap: 5 });
        by += doc.heightOfString('□ ' + pt, { width: LAYOUT.contentWidth - 10 }) + 10;
    });

    // Gallery Mini Layout
    const gw = (LAYOUT.contentWidth - 20) / 3;
    let gx = LAYOUT.margin;
    p.gallery.forEach(g => {
        drawImageBox(path.join(__dirname, g.path), gx, 680, gw, 80, { label: g.label });
        gx += gw + 10;
    });
});

// 4. CONTACT
doc.addPage();
drawBackground();
doc.fillColor(COLORS.text).font(FONTS.extraBold).fontSize(36).text('LET\'S TALK.', 0, 320, { align: 'center', width: LAYOUT.pageWidth });
doc.fillColor(COLORS.accent).font(FONTS.bold).fontSize(14).text('Building ecosystems, one line at a time.', 0, 365, { align: 'center', width: LAYOUT.pageWidth });

const ct = [
    { n: 'EMAIL', v: 'bayusatrio2804@gmail.com' },
    { n: 'LINKEDIN', v: 'linkedin.com/in/muhammad-bayu-satrio' },
    { n: 'GITHUB', v: 'github.com/BayuSatrio2804' }
];
let cy = 420;
ct.forEach(c => {
    doc.fillColor(COLORS.textMuted).font(FONTS.bold).fontSize(8).text(c.n, 0, cy, { align: 'center', width: LAYOUT.pageWidth, characterSpacing: 2 });
    doc.fillColor(COLORS.text).font(FONTS.regular).fontSize(12).text(c.v, 0, cy + 12, { align: 'center', width: LAYOUT.pageWidth });
    cy += 50;
});

// FOOTERS
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    doc.fillColor(COLORS.textMuted).font(FONTS.regular).fontSize(7).text(`© 2026 MUHAMMAD BAYU SATRIO | PORTFOLIO VOL. 1 | PAGE ${i+1}/${range.count}`, 0, LAYOUT.pageHeight - 40, { align: 'center', width: LAYOUT.pageWidth });
}

doc.end();

outputStream.on('finish', () => {
    console.log('Super Premium Portfolio successfully generated!');
});
