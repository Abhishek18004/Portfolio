import React from 'react';
import './Skills.css';
import { FaCode, FaRobot, FaServer } from 'react-icons/fa';

const techSkills = [
  {
    title: 'Languages & Core',
    icon: <FaCode />,
    items: [
      'Python',
      'JavaScript',
      'HTML5 / CSS3',
      'C / C++',
      'SQL',
      'Git & GitHub',
      'Markdown',
    ],
  },
  {
    title: 'AI / ML & Vision',
    icon: <FaRobot />,
    items: [
      'PyTorch & TensorFlow',
      'Vision-Language Models (CLIP, AnomalyCLIP)',
      'Anomaly Detection (PatchCore, WideResNet-50)',
      'RAG Pipelines & Vector Search (FAISS, Tavily API)',
      'Gemini API & Prompt Engineering',
      'scikit-learn, OpenCV & PIL',
      'pandas, NumPy, matplotlib, seaborn',
    ],
  },
  {
    title: 'Full Stack & Frameworks',
    icon: <FaServer />,
    items: [
      'React.js',
      'Streamlit',
      'Flask & REST APIs',
      'ServiceNow (CSA & CAD)',
      'Firebase Firestore',
      'Socket Programming & TCP/IP',
      'PyMuPDF, pdfplumber & Tesseract OCR',
    ],
  },
];

function SkillsCard({ title, items, icon }) {
  return (
    <div className="skills-card card">
      <div className="card-header">
        <h4 className="card-subtitle">{title}</h4>
        <div className="card-icon">{icon}</div>
      </div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h2 className="skills-title">SKILLS</h2>

      <div className="skills-grid tech-skills">
        {techSkills.map((skill, idx) => (
          <SkillsCard key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;