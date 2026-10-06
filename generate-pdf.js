const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 36, size: 'LETTER' });
const writeStream = fs.createWriteStream('c:/Users/gowth/OneDrive/Desktop/portfolio/public/assets/resume/kuberan-p-resume.pdf');
doc.pipe(writeStream);

// Title / Name
doc.fontSize(20).font('Helvetica-Bold').text('KUBERAN P', { align: 'center' });
doc.fontSize(10).font('Helvetica-Oblique').text('Artificial Intelligence & Data Science Student | Aspiring Data Analyst', { align: 'center' });
doc.fontSize(9).font('Helvetica').text('Tamil Nadu, India • kuberanp78@gmail.com • 7358912068 • linkedin.com/in/kuberan0002 • github.com/kuberanP78', { align: 'center' });
doc.moveDown(0.5);

function addSectionHeader(title) {
  doc.fontSize(11).font('Helvetica-Bold').text(title.toUpperCase());
  doc.moveTo(36, doc.y).lineTo(576, doc.y).stroke('#000000');
  doc.moveDown(0.3);
}

// Professional Summary
addSectionHeader('Professional Summary');
doc.fontSize(9.5).font('Helvetica').text(
  'Artificial Intelligence and Data Science student pursuing a BS in Data Science from IIT Madras, with a strong interest in Data Analytics, Python, SQL, Machine Learning, and Data Visualization. Skilled in analyzing datasets, identifying meaningful patterns, and developing practical technology solutions. Strong foundation in Data Structures, Algorithms, DBMS, and problem-solving, with a continuous interest in applying data-driven approaches to real-world problems.'
);
doc.moveDown(0.5);

// Education
addSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(10).text('Sudharsan Engineering College', { continued: true }).font('Helvetica').text(' Tamil Nadu, India', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(9.5).text('Artificial Intelligence and Data Science', { continued: true }).font('Helvetica').text(' 2024 – Present', { align: 'right' });
doc.moveDown(0.3);
doc.font('Helvetica-Bold').fontSize(10).text('Indian Institute of Technology Madras', { continued: true }).font('Helvetica').text(' Chennai, India', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(9.5).text('BS in Data Science', { continued: true }).font('Helvetica').text(' Pursuing', { align: 'right' });
doc.moveDown(0.5);

// Technical Skills
addSectionHeader('Technical Skills');
const skills = [
  ['Programming:', 'Python, Java, JavaScript, SQL'],
  ['Data Analytics:', 'Pandas, NumPy, Data Cleaning, Exploratory Data Analysis (EDA), Statistical Analysis, Data Visualization'],
  ['Visualization:', 'Matplotlib, Excel, Power BI'],
  ['Machine Learning:', 'Machine Learning Fundamentals, Regression, Classification, Decision Trees, Ensemble Learning'],
  ['Databases:', 'MySQL, PostgreSQL, DBMS, SQL'],
  ['Core Computer Science:', 'Data Structures & Algorithms, Operating Systems, Computer Networks, Distributed Computing'],
  ['Tools:', 'Git, GitHub, Visual Studio Code, Jupyter Notebook']
];

skills.forEach(([label, val]) => {
  doc.font('Helvetica-Bold').fontSize(9.5).text(label + ' ', { continued: true }).font('Helvetica').text(val);
});
doc.moveDown(0.5);

// Projects
addSectionHeader('Projects');

const projects = [
  {
    title: 'Toyota Corolla Data Analysis, Data Analysis',
    bullets: [
      'Performed exploratory data analysis on a Toyota Corolla dataset using Python',
      'Cleaned and processed data using Pandas and NumPy',
      'Analyzed relationships and patterns within the dataset',
      'Created visualizations to communicate important findings',
      'Applied analytical techniques to derive meaningful insights from the data'
    ]
  },
  {
    title: 'FlowFi, Personal Expense Tracker',
    bullets: [
      'Designed a modern expense-tracking application focused on personal financial management',
      'Planned features for recording, categorizing, and analyzing expenses',
      'Designed data visualization concepts to help users understand spending patterns',
      'Explored voice-based interaction for easier expense management',
      'Focused on creating a simple and user-friendly fintech experience'
    ]
  },
  {
    title: 'MediKiosk, AI Healthcare Kiosk',
    bullets: [
      'Designed an AI-powered healthcare kiosk concept for collecting patient information before doctor consultation',
      'Planned voice, text, and touch-based patient interaction with an adaptive question flow for patient history',
      'Incorporated Speech Recognition, NLP, OCR, and AI-generated clinical summaries',
      'Designed patient queue, token, and doctor dashboard concepts'
    ]
  },
  {
    title: 'Neoclean, AI Cleaning Robot',
    bullets: [
      'Developed an AI-based smart cleaning robot concept focused on automation',
      'Explored intelligent decision-making and automated cleaning workflows',
      'Combined AI concepts with robotics and practical problem-solving'
    ]
  }
];

projects.forEach(p => {
  doc.font('Helvetica-Bold').fontSize(9.5).text(p.title);
  p.bullets.forEach(b => {
    doc.font('Helvetica').fontSize(9).text('• ' + b, { indent: 12 });
  });
  doc.moveDown(0.2);
});
doc.moveDown(0.3);

// Certifications
addSectionHeader('Certifications');
const certs = [
  'Python — EC-Council',
  'Network Basics / Networking Fundamentals — Cyfoxgen',
  'Linux Fundamentals — Cyfoxgen',
  'Windows Fundamentals — TryHackMe',
  'NPTEL Certification',
  'IIT Madras BS in Data Science — Foundation Certificate'
];
certs.forEach(c => {
  doc.font('Helvetica').fontSize(9).text('• ' + c, { indent: 12 });
});
doc.moveDown(0.5);

// Coursework
addSectionHeader('Relevant Coursework');
doc.font('Helvetica').fontSize(9.5).text(
  'Data Structures and Algorithms, Database Management Systems, Machine Learning, Data Science, Statistics, Operating Systems, Computer Networks, Distributed Computing, Data Warehousing'
);
doc.moveDown(0.5);

// Soft Skills
addSectionHeader('Soft Skills');
doc.font('Helvetica').fontSize(9.5).text(
  'Analytical Thinking, Problem Solving, Logical Reasoning, Teamwork, Communication, Creativity, Adaptability, Continuous Learning'
);
doc.moveDown(0.5);

// Interests
addSectionHeader('Interests');
doc.font('Helvetica').fontSize(9.5).text(
  'Data Analytics, Artificial Intelligence, Machine Learning, Chess, Technology & Innovation, Video Games'
);
doc.moveDown(0.5);

// Career Objective
addSectionHeader('Career Objective');
doc.font('Helvetica').fontSize(9.5).text(
  'To begin a career in Data Analytics/Data Science where I can apply my skills in Python, SQL, data analysis, visualization, and machine learning to solve real-world problems while continuously developing my technical and analytical abilities.'
);

doc.end();
writeStream.on('finish', () => {
  console.log('PDF resume successfully generated with pdfkit!');
});
