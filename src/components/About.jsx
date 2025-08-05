import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="about-container">
      <div className="left-column">
        <h1 className="title">ABOUT ME</h1>
        <p className="description">
          I’m a passionate and curious developer who enjoys turning ideas into functional, user-friendly projects.
          From AI and machine learning models to full-stack web apps and real-time networking tools, I love exploring
          different areas of tech.
        </p>

        <h2 className="sub-heading">Education</h2>
        <div className="education-section">
          <div className="edu-box">
            <h3>GITAM University, Hyderabad (2022 - 2026)</h3>
            <h4>B.Tech in CSE-AIML</h4>
            <p>CGPA - 9.85</p>
          </div>
          <div className="edu-box">
            <h3>St. Andrews School, Bowenpally (2020 - 2022)</h3>
            <h4>CBSE - Class 12 (MPC + Computer Science)</h4>
            <p>Percentage - 94%</p>
            <p>School Head Boy</p>
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
                <time>Hackathon</time>
                <p>SIH, GITAM (Oct 2023)</p>
                <div className="gap"></div>
                <p>Bharatversity, IIT TechXcelerate (Sept 2024)</p>
                <div className="gap"></div>
                <p>Bharatversity, BITS LaunchPad (Mar 2025)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
