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

const sidebarWidth = 190;
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
    const photoY = 45;
    
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

let yPos = 175;

// Sidebar Content
function sidebarTitle(text) {
    doc.fillColor(COLORS.accent)
       .font('Helvetica-Bold')
       .fontSize(9)
       .text(text.toUpperCase(), 15, yPos);
    yPos += 4;
    doc.moveTo(15, yPos).lineTo(sidebarWidth - 15, yPos).lineWidth(0.5).strokeColor(COLORS.accent).stroke();
    yPos += 10;
}

function sidebarText(text) {
    doc.fillColor(COLORS.textLight)
       .font('Helvetica')
       .fontSize(8)
       .text(text, 15, yPos, { width: sidebarWidth - 30 });
    yPos += doc.heightOfString(text, { width: sidebarWidth - 30 }) + 6;
}

// Contact
sidebarTitle('Contact');
sidebarText('bayusatrio2804@gmail.com');
sidebarText('linkedin.com/in/\nmuhammad-bayu-satrio-52826a2a5');
sidebarText('github.com/BayuSatrio2804');
sidebarText('Banjarmasin, Indonesia');

yPos += 14;

// Skills
sidebarTitle('AI / NLP');
sidebarText('• IndoBERTweet\n• Hugging Face Transformers\n• ONNX Runtime\n• Scikit-learn\n• Threshold tuning\n• Stratified evaluation');

yPos += 14;

sidebarTitle('Development');
sidebarText('• Python, JavaScript, PHP\n• React.js, Node.js, Laravel\n• Express.js, Tailwind CSS\n• MySQL, Firebase, Supabase\n• Docker, Database Architecture');

yPos += 14;

sidebarTitle('IoT & Hardware');
sidebarText('• ESP32, Arduino\n• pH, MQ-135, Thermocouple\n• Firebase integration');

yPos += 14;

sidebarTitle('Languages');
sidebarText('• Indonesian (Native)\n• English (Professional)');

// --- Main Content ---
let mainX = sidebarWidth + margin;
let mainY = margin;
const contentWidth = pageWidth - mainX - margin;

// Name & Title
doc.fillColor(COLORS.text)
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('Muhammad Bayu Satrio', mainX, mainY);

mainY += 26;
doc.fillColor(COLORS.accentSecondary)
   .font('Helvetica')
   .fontSize(11)
   .text('AI Engineer / Data Analyst  ·  NLP  ·  Analytics  ·  Applied Systems', mainX, mainY);

mainY += 12;
doc.fillColor(COLORS.accent)
   .font('Helvetica-Bold')
   .fontSize(8)
   .text('GEMASTIK XVIII Silver Medalist', mainX, mainY);

mainY += 22;

// Section Helper
function sectionTitle(title) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(11)
       .text(title.toUpperCase(), mainX, mainY);
    
    mainY += 16;
    doc.moveTo(mainX, mainY - 4)
       .lineTo(pageWidth - margin, mainY - 4)
       .lineWidth(0.8)
       .strokeColor('#e2e8f0')
       .stroke();
    mainY += 8;
}

// Professional Summary
sectionTitle('Professional Summary');
doc.fillColor(COLORS.gray)
   .font('Helvetica')
   .fontSize(9)
   .text(
     'Information Technology student at Telkom University focused on AI engineering, NLP, analytics, and software systems that work in real environments. I build Indonesian NLP models, data-driven workflows, and production-aware systems that connect machine learning with useful software products. My work spans model training, metric-driven validation, backend development, and product thinking — across projects in toxic speech detection, healthcare records, IoT fermentation, and donation platforms.',
     mainX, mainY, { width: contentWidth, align: 'justify' }
   );

mainY += doc.heightOfString(
    'Information Technology student at Telkom University focused on AI engineering, NLP, analytics, and software systems that work in real environments. I build Indonesian NLP models, data-driven workflows, and production-aware systems that connect machine learning with useful software products. My work spans model training, metric-driven validation, backend development, and product thinking — across projects in toxic speech detection, healthcare records, IoT fermentation, and donation platforms.',
    { width: contentWidth }
) + 18;

// Projects
sectionTitle('Projects');

function addProject(title, role, period, link, bullets) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(10)
       .text(title, mainX, mainY, { continued: false });

    const periodW = doc.widthOfString(period, { size: 8 });
    doc.fillColor(COLORS.gray)
       .font('Helvetica-Oblique')
       .fontSize(8)
       .text(period, pageWidth - margin - periodW, mainY);

    mainY += 13;
    doc.fillColor(COLORS.accent)
       .font('Helvetica-Bold')
       .fontSize(9)
       .text(role, mainX, mainY);
    mainY += 12;

    if (link) {
        doc.fillColor('#0369a1')
           .font('Helvetica')
           .fontSize(8)
           .text(link, mainX, mainY);
        mainY += 11;
    }

    doc.fillColor(COLORS.gray)
       .font('Helvetica')
       .fontSize(9)
       .text(bullets, mainX, mainY, { width: contentWidth });
    mainY += doc.heightOfString(bullets, { width: contentWidth }) + 14;
}

addProject(
    'Indonesia Toxic Speech Detector',
    'AI Engineer / NLP',
    '2026',
    'github.com/BayuSatrio2804/Indonesia-Toxic-Speech-Detector',
    '• Fine-tuned IndoBERTweet for binary Indonesian toxic speech classification.\n• Built a stratified train, validation, and test workflow with final test metrics reported once.\n• Tuned the toxic-class decision threshold on validation data before final evaluation.\n• Exported Hugging Face and FP32 ONNX Runtime CPU inference artifacts.'
);

// Experience
sectionTitle('Experience');

function addJob(title, company, period, bullets) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(10)
       .text(title, mainX, mainY);
    
    const periodW = doc.widthOfString(period, { size: 8 });
    doc.fillColor(COLORS.gray)
       .font('Helvetica-Oblique')
       .fontSize(8)
       .text(period, pageWidth - margin - periodW, mainY);
    
    mainY += 13;
    doc.fillColor(COLORS.accent)
       .font('Helvetica-Bold')
       .fontSize(9)
       .text(company, mainX, mainY);
    
    mainY += 12;
    doc.fillColor(COLORS.gray)
       .font('Helvetica')
       .fontSize(9)
       .text(bullets, mainX, mainY, { width: contentWidth });
    
    mainY += doc.heightOfString(bullets, { width: contentWidth }) + 14;
}

addJob(
    'Back-End Web Developer',
    'Bidanku',
    'Aug 2025 – Jan 2026',
    '• Designed relational database schemas for ANC, family planning, deliveries, and immunization workflows.\n• Implemented medical business logic for patient LMP and EDD calculations.\n• Optimized SQL reporting queries and built audit logging for data modification tracking.'
);

addJob(
    'CFO & ICT Business Development',
    'ACETRA (Smart IoT System)',
    'Jun 2025 – Oct 2025',
    '• Monitored pH, temperature, and gas parameters through ESP32 and Firebase integration for coffee husk fermentation.\n• Managed strategic financial planning and hardware procurement budgets.\n• Connected IoT capabilities with product and business feasibility for GEMASTIK XVIII 2025.'
);

addJob(
    'Fullstack Web Developer',
    'DonasiKu Platform',
    '2025',
    '• Built a responsive donation platform with a Laravel backend and React frontend.\n• Developed a donation tracking system for live distribution status and operational transparency.\n• Integrated real-time chat workflows between donors and recipients.'
);

// Education
sectionTitle('Education');

function addEdu(institution, degree, period, desc) {
    doc.fillColor(COLORS.text)
       .font('Helvetica-Bold')
       .fontSize(10)
       .text(institution, mainX, mainY);

    const periodW = doc.widthOfString(period, { size: 8 });
    doc.fillColor(COLORS.gray)
       .font('Helvetica-Oblique')
       .fontSize(8)
       .text(period, pageWidth - margin - periodW, mainY);

    mainY += 13;
    doc.fillColor(COLORS.accent)
       .font('Helvetica')
       .fontSize(9)
       .text(degree, mainX, mainY);
    mainY += 12;
    doc.fillColor(COLORS.gray)
       .font('Helvetica')
       .fontSize(9)
       .text(desc, mainX, mainY, { width: contentWidth });
    mainY += doc.heightOfString(desc, { width: contentWidth }) + 12;
}

addEdu(
    'Telkom University',
    'Bachelor of Information Technology',
    'Sep 2023 – Sep 2027',
    'Focus: Software engineering, modern computing systems, analytics, and applied information technology.'
);

addEdu(
    'SMAN 3 Banjarmasin',
    'High School Diploma, Science (IPA)',
    '2020 – 2023',
    'Built a foundation in logical thinking, mathematics, and analytical problem solving.'
);

// Awards
sectionTitle('Awards & Certifications');
doc.fillColor(COLORS.gray)
   .font('Helvetica')
   .fontSize(9)
   .text('• 2nd Place (Silver Medal) – GEMASTIK XVIII National Level, ICT Business Development\n  Ministry of Higher Education, Science, and Technology RI — Oct 2025', mainX, mainY, { width: contentWidth });

doc.end();

outputStream.on('finish', () => {
    console.log('Resume PDF successfully generated at public/Resume_Muhammad_Bayu_Satrio.pdf');
});
