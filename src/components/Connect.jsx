import React from 'react';
import './Connect.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaArrowUp } from 'react-icons/fa';

function Connect() {
  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="connect" className="connect-section">
      <h2 className="connect-title">Let's Connect</h2>

      <div className="social-links">
        <a href="mailto:abhishek2004karthik@gmail.com" target="_blank" rel="noopener noreferrer" className="social-btn" id="email">
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-karthik-567981291/" target="_blank" rel="noopener noreferrer" className="social-btn" id="linkedin">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Abhishek18004" target="_blank" rel="noopener noreferrer" className="social-btn" id="github">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="https://drive.google.com/file/d/1DqL-MeJPQ7kn6KGfUqGFu3UMnNAWUMFh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-btn" id="resume">
          <FaFileAlt />
          <span>Resume</span>
        </a>
      </div>

      {/* Scroll-to-top Button inside the footer itself */}
      <div className="footer-top-btn-container">
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <div className="clone">
            <span>Back to Top</span>
          </div>
          <div className="text">
            <span>Back to Top</span>
          </div>
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default Connect;