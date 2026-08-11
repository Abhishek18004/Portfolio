import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="about-container">
      <div className="left-column">
        <h1 className="title">ABOUT ME</h1>
        <p className="description">
          I am a Computer Science & Engineering (AI & ML) student passionate about building intelligent, real-world systems. My experience ranges from developing using vision-language models to designing adaptive RAG-driven learning platforms and full-stack web applications. I focus on turning complex machine learning into functional, high-impact software.
        </p>

        <h2 className="sub-heading">Education</h2>
        <div className="education-section">
          <div className="edu-box">
            <h3>GITAM University, Hyderabad (2022 - 2026)</h3>
            <h4>B.Tech in CSE-AIML</h4>
            <p>CGPA - 9.79</p>
            <p style={{ color: '#FFD700', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6" />
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
              </svg>
              President's Gold Medalist (Highest CGPA in CSE-AIML)
            </p>
          </div>
          <div className="edu-box">
            <h3>St. Andrews School, Bowenpally (2020 - 2022)</h3>
            <h4>CBSE - Class 12 (MPC + Computer Science)</h4>
            <p>Percentage - 94%</p>
            <p style={{ color: '#38bdf8', fontWeight: 'bold' }}>School Head Boy</p>
            <p style={{ color: '#FFD700', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
              </svg>
              Science (MPC, BiPC) Valedictorian
            </p>
          </div>
          <div className="edu-box">
            <h3>St. Andrews School, Bowenpally (2008 - 2020)</h3>
            <h4>CBSE - Class 10</h4>
            <p>Percentage - 94%</p>
          </div>
        </div>
      </div>

      <div className="right-column">
        <h2 className="sub-heading">Beyond Academics</h2>
        <div id="timeline">
          <ul>
            <li>
              <div className="cont">
                <time>ServiceNow Certifications</time>
                <p>CSA (Certified System Administrator)</p>
                <div className="gap"></div>
                <p>CAD (Certified Application Developer)</p>
              </div>
            </li>
            <li>
              <div className="cont">
                <time>Hackathons & Competitions</time>
                <p>TCS Xplore InnoQuest (Round 2 Demo Presenter) - 2026</p>
                <div className="gap"></div>
                <p>ServiceNow University HackNow India by Deloitte & ServiceNow (Advanced to Implementation Round) - 2025</p>
                <div className="gap"></div>
                <p>Bharatversity, BITS LaunchPad - 2025</p>
                <div className="gap"></div>
                <p>Bharatversity, IIT TechXcelerate - 2024</p>
                <div className="gap"></div>
                <p>SIH, GITAM - Oct 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;