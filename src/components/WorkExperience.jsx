import React, { useState } from 'react';
import './WorkExperience.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    title: 'AIML Software Development Intern',
    company: 'Bharatversity, BITS Pilani Hyderabad',
    period: 'June 2024 - July 2024',
    techStack: 'Python, scikit-learn, Streamlit, KMeans, PCA, Pandas, Numpy',
    learnings: [
      'Built models with algorithms like KMeans, SVM, Decision Trees, Naive Bayes, Logistic Regression',
      'Worked with deep learning tools like TensorFlow and Keras for CNNs and RNNs',
      'Deployed final ML project (Cluster Chutney) using Streamlit',
      'Applied unsupervised learning to cluster user data for segmentation and insights',
    ],
    color: '#56c5c0'  // teal
  },
  {
    id: 2,
    title: 'AIML Developer',
    company: 'Club : Google Developer Group on Campus',
    period: 'Aug 2023– April 2025',
    techStack: 'TensorFlow.js, HTML, JavaScript, Convolutional Neural Network (CNN), MNIST',
    learnings: [
      'Built a CNN-based handwritten digit recognition project using TensorFlow.',
      'Contributed as a peer mentor during Google Study Jams, guiding participants through Gen AI coursework.',
    ],
    color: '#ffc857'  // yellow
  },
  {
    id: 3,
    title: 'Design Lead & Member',
    company: 'Club : COGAAN',
    period: 'July 2023 – April 2025',
    techStack: 'Canva, Graphic Design, Brand Strategy, HTML, CSS',
    learnings: [
      'Designed print posters, event banners, and digital graphics for college fests and club activities.',
      'Served as Design Lead during the club\'s inaugural flagship event, managing end-to-end creative direction.',
      'Mentored team members by refining draft designs, improving visual consistency, and protecting team execution timelines.'
    ],
    color: '#56c5c0'  // teal
  }
];

function WorkExperience() {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="work-section" id="work">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="cards-wrapper">
        {experienceData.map((exp) => {
          const isExpanded = expandedCards.includes(exp.id);
          return (
            <div
              key={exp.id}
              className={`experience-block ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
              <div className="card">
                <div className="card-left">
                  <div className="company-block" style={{ backgroundColor: exp.color }}>
                    {exp.company}
                  </div>
                  <button
                    className="toggle-btn"
                    style={{ backgroundColor: exp.color }}
                    onClick={() => toggleCard(exp.id)}
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${exp.company}`}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <span className="icon">
                      {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
                    </span>
                  </button>
                </div>

                {isExpanded && (
                  <div className="card-right">
                    <h3>{exp.title}</h3>
                    <p className="period">{exp.period}</p>
                    <p className="tech-stack">Tech Stack: {exp.techStack}</p>
                    <ul className="learnings">
                      {exp.learnings.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperience;
