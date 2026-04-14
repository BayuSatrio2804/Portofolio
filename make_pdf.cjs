const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Resume_Muhammad_Bayu_Satrio.pdf'));

// Add some content
doc.font('Helvetica-Bold').fontSize(26).text('Muhammad Bayu Satrio', { align: 'left' });
doc.font('Helvetica').fontSize(14).text('Fullstack Web Developer | AI Engineer | IoT Specialist', { align: 'left', color: '#555555' });
doc.moveDown(0.5);

// Contact Info
doc.font('Helvetica').fontSize(11).text('Email: bayusatrio2804@gmail.com | LinkedIn: linkedin.com/in/muhammad-bayu-satrio | GitHub: github.com/BayuSatrio2804');
doc.moveDown(1);

// Separator
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(1);

// Section: Professional Summary
doc.font('Helvetica-Bold').fontSize(14).fillColor('#333333').text('PROFESSIONAL SUMMARY');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).fillColor('#000000')
   .text('I believe that true innovation is born from the synergy of various technological disciplines. As a practitioner, I focus on integrating smart digital ecosystems—leveraging the reliability of Fullstack architecture, the acuity of Artificial Intelligence, and the automation of Internet of Things (IoT). I am strongly committed to designing end-to-end solutions, combining the robustness of highly capable backend logic and cutting-edge data processing to produce intuitive visual interfaces that have a real impact on user experience.', { align: 'justify' });
doc.moveDown(1.5);

// Section: Technical Skills
doc.font('Helvetica-Bold').fontSize(14).text('TECHNICAL SKILLS');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11)
   .text('• Programming Languages: JavaScript, PHP, Go, Python, C++, Java')
   .text('• Frameworks & Libraries: React.js, Vite, Node.js, Express.js, Laravel')
   .text('• Databases & Cloud: MySQL, Database Architecture, Firebase, Supabase')
   .text('• Hardware & Emerging Tech: Internet of Things (IoT), ESP32, Artificial Intelligence');
doc.moveDown(1.5);

// Section: Experience
doc.font('Helvetica-Bold').fontSize(14).text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.5);

// Job 1
doc.font('Helvetica-Bold').fontSize(12).text('Back-End Web Developer', { continued: true }).font('Helvetica').text(' | Bidanku (Digital Transformation Group)', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(10).fillColor('#666666').text('Aug 2025 – Jan 2026', { align: 'right' });
doc.moveUp(); // Reset position from right alignment
doc.moveDown(1);
doc.font('Helvetica').fontSize(11).fillColor('#000000')
   .text('• Led the design of rigorous relational database schemas (ANC, Family Planning, Immunizations).')
   .text('• Implemented automated medical business logic for future midwifery clinic medical record systems, including determining patient LMP and EDD.')
   .text('• Optimized SQL queries for data aggregation in Monthly Reports and created secure Audit Log systems.');
doc.moveDown(1);

// Job 2
doc.font('Helvetica-Bold').fontSize(12).text('CFO & ICT Business Development', { continued: true }).font('Helvetica').text(' | ACETRA (Smart IoT System)', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(10).fillColor('#666666').text('Jun 2025 – Oct 2025', { align: 'right' });
doc.moveUp();
doc.moveDown(1);
doc.font('Helvetica').fontSize(11).fillColor('#000000')
   .text('• Engineered a smart IoT monitoring system to optimize coffee husk waste fermentation.')
   .text('• Managed strategic financial budgets for sensor hardware procurement (pH Sensors, MQ-135, Thermocouples).')
   .text('• Analyzed commercial feasibility and bridged technical IoT capabilities with business value (GEMASTIK XVIII 2025).');
doc.moveDown(1);

// Job 3
doc.font('Helvetica-Bold').fontSize(12).text('Fullstack Web Developer', { continued: true }).font('Helvetica').text(' | DonasiKu Platform', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(10).fillColor('#666666').text('2025', { align: 'right' });
doc.moveUp();
doc.moveDown(1);
doc.font('Helvetica').fontSize(11).fillColor('#000000')
   .text('• Engineered a robust donation platform utilizing a Laravel backend and a modern React frontend.')
   .text('• Built a Donation Tracking System for live distribution status updates to guarantee operational transparency.')
   .text('• Developed a responsive Landing Page to increase interaction and donor trust.');
doc.moveDown(1.5);

// Section: Education
doc.font('Helvetica-Bold').fontSize(14).text('EDUCATION');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(11).text('Telkom University', { continued: true }).font('Helvetica').text(' — Bachelor of Information Technology', { continued: true }).font('Helvetica-Oblique').text(' (Sep 2023 – Sep 2027)');
doc.font('Helvetica').text('• Focus: Software engineering pillars, modern computing systems, and innovative IT development.');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(11).text('SMAN 3 Banjarmasin', { continued: true }).font('Helvetica').text(' — High School Diploma, Exact Sciences (IPA)', { continued: true }).font('Helvetica-Oblique').text(' (2020 – 2023)');
doc.font('Helvetica').text('• Built a strong foundation in logical thinking, analytics, and exact sciences.');
doc.moveDown(1.5);

// Section: Awards
doc.font('Helvetica-Bold').fontSize(14).text('AWARDS & CERTIFICATIONS');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11)
   .text('• 2nd Place (Silver Medal) - GEMASTIK XVIII (National Level) in ICT – Ministry of Higher Education, Science, and Technology RI (Oct 2025)');

doc.end();
console.log('PDF Resume successfully generated!');
