import React from 'react';
import './Skills.css';
import { FaCode, FaRobot, FaServer } from 'react-icons/fa';

const techSkills = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    items: ['Python', 'HTML', 'CSS', 'JavaScript', 'Markdown', 'Git'],
  },
  {
    title: 'AI / ML',
    icon: <FaRobot />,
    items: [
      'TensorFlow',
      'scikit-learn',
      'pandas',
      'NumPy',
      'matplotlib',
      'seaborn',
      'joblib',
      'PCA',
      'KMeans Clustering',
    ],
  },
  {
    title: 'Full Stack',
    icon: <FaServer />,
    items: [
      'React.js',
      'Flask',
      'Streamlit',
      'Web Development',
      'Socket Programming',
      'TCP/IP Networking',
      'Custom Protocol Design',
      'PyMuPDF',
      'pdfplumber',
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
