const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Colors matching the website
const COLORS = {
    bg: '#ffffff',
    bgDark: '#08080b',
    text: '#1e293b',
    textLight: '#f1f5f9',
    accent: '#38bdf8',
    accentSecondary: '#818cf8',
    gray: '#64748b'
};

const doc = new PDFDocument({ 
    margin: 0, 
    size: 'A4',
    bufferPages: true 
});

const outputStream = fs.createWriteStream('public/Resume_Muhammad_Bayu_Satrio.pdf');
doc.pipe(outputStream);

const sidebarWidth = 180;
const pageWidth = 595.28; // A4 width in points
const pageHeight = 841.89; // A4 height in points
const margin = 40;

// --- Sidebar ---
doc.rect(0, 0, sidebarWidth, pageHeight).fill(COLORS.bgDark);

// Profile Photo (Circular)
const photoPath = path.join(__dirname, 'public/foto-saya.jpg');
if (fs.existsSync(photoPath)) {
    const photoSize = 100;
    const photoX = (sidebarWidth - photoSize) / 2;
    const photoY = 50;
    
    doc.save();
    doc.circle(photoX + photoSize/2, photoY + photoSize/2, photoSize/2).clip();
    doc.image(photoPath, photoX, photoY, { width: photoSize, height: photoSize });
    doc.restore();
    
    // Border for photo
    doc.circle(photoX + photoSize/2, photoY + photoSize/2, photoSize/2 + 2)
       .lineWidth(2)
       .strokeColor(COLORS.accent)
       .stroke();
}

let yPos = 180;

// Sidebar Content
function sidebarTitle(text) {
    doc.fillColor(COLORS.accent)
       .font('Helvetica-Bold')
       .fontSize(12)
       .text(text.toUpperCase(), 20, yPos);
    yPos += 18;
}

function sidebarText(text) {
    doc.fillColor(COLORS.textLight)
       .font('Helvetica')
       .fontSize(9)
       .text(text, 20, yPos, { width: sidebarWidth - 40 });
    yPos += doc.heightOfString(text, { width: sidebarWidth - 40 }) + 8;
}

sidebarTitle('Contact');
sidebarText('bayusatrio2804@gmail.com');
sidebarText('linkedin.com/in/muhammad-bayu-satrio');
sidebarText('github.com/BayuSatrio2804');
sidebarText('Banjarmasin, Indonesia');

yPos += 20;
sidebarTitle('Skills');
sidebarText('• Fullstack Development\n• AI & Machine Learning\n• Internet of Things (IoT)\n• Database Architecture\n• React, Node.js, Laravel');

yPos += 20;
sidebarTitle('Languages');
sidebarText('• Indonesian (Native)\n• English (Professional)');

// --- Main Content ---
let mainX = sidebarWidth + margin;
let mainY = margin;

// Name & Title
doc.fillColor(COLORS.text)
   .font('Helvetica-Bold')
   .fontSize(28)
   .text('Muhammad Bayu Satrio', mainX, mainY);

mainY += 32;
doc.fillColor(COLORS.accentSecondary)
   .font('Helvetica')
   .fontSize(14)
   .text('Fullstack Web Developer | AI Engineer | IoT Specialist', mainX, mainY);

mainY += 40;

// Section Helper
function sectionTitle(title) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(16)
       .text(title.toUpperCase(), mainX, mainY);
    
    mainY += 22;
    doc.moveTo(mainX, mainY - 5)
       .lineTo(pageWidth - margin, mainY - 5)
       .lineWidth(1)
       .strokeColor('#e2e8f0')
       .stroke();
    mainY += 10;
}

sectionTitle('Professional Summary');
doc.fillColor(COLORS.gray)
   .font('Helvetica')
   .fontSize(10)
   .text('A dedicated technologist focused on the synergy of Fullstack architecture, AI, and IoT. Committed to designing end-to-end solutions that combine robust backend logic with intuitive visual interfaces to create real user impact.', mainX, mainY, { width: pageWidth - mainX - margin, align: 'justify' });

mainY += 60;

sectionTitle('Experience');

function addJob(title, company, period, description) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(11)
       .text(title, mainX, mainY);
    
    const periodWidth = doc.widthOfString(period, { size: 9 });
    doc.fillColor(COLORS.gray)
       .font('Helvetica-Oblique')
       .fontSize(9)
       .text(period, pageWidth - margin - periodWidth, mainY);
    
    mainY += 14;
    doc.fillColor(COLORS.accent)
       .font('Helvetica-Bold')
       .fontSize(10)
       .text(company, mainX, mainY);
    
    mainY += 15;
    doc.fillColor(COLORS.gray)
       .font('Helvetica')
       .fontSize(10)
       .text(description, mainX, mainY, { width: pageWidth - mainX - margin });
    
    mainY += doc.heightOfString(description, { width: pageWidth - mainX - margin }) + 15;
}

addJob(
    'Back-End Web Developer',
    'Bidanku (Digital Transformation Group)',
    'Aug 2025 – Jan 2026',
    '• Led the design of relational database schemas for ANC, Family Planning, and Immunizations.\n• Implemented automated medical business logic for future midwifery clinic medical record systems.\n• Optimized SQL queries for data aggregation and created secure Audit Log systems.'
);

addJob(
    'CFO & ICT Business Development',
    'ACETRA (Smart IoT System)',
    'Jun 2025 – Oct 2025',
    '• Engineered a smart IoT monitoring system to optimize coffee husk waste fermentation.\n• Managed strategic financial budgets for sensor hardware procurement.\n• Analyzed commercial feasibility for GEMASTIK XVIII 2025.'
);

addJob(
    'Fullstack Web Developer',
    'DonasiKu Platform',
    '2025',
    '• Engineered a robust donation platform utilizing Laravel backend and React frontend.\n• Built a Donation Tracking System for live distribution status updates.\n• Developed a responsive Landing Page to increase interaction and donor trust.'
);

sectionTitle('Education');
doc.fillColor(COLORS.text)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Telkom University', mainX, mainY);
doc.fillColor(COLORS.gray)
   .font('Helvetica')
   .fontSize(10)
   .text('Bachelor of Information Technology', mainX + 100, mainY);
const eduPeriod = '2023 - 2027';
doc.text(eduPeriod, pageWidth - margin - doc.widthOfString(eduPeriod), mainY);

mainY += 25;

sectionTitle('Awards');
doc.fillColor(COLORS.gray)
   .font('Helvetica')
   .fontSize(10)
   .text('• 2nd Place (Silver Medal) - GEMASTIK XVIII (National Level) in ICT (Oct 2025)', mainX, mainY);

doc.end();

outputStream.on('finish', () => {
    console.log('Premium PDF Portfolio successfully generated at public/Resume_Muhammad_Bayu_Satrio.pdf');
});
