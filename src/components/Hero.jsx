import React from 'react';
import './Hero.css';

function Hero() {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1quS5fm4m4kaJLjM2gOTdQZtFGDHx1wkj/view?usp=sharing', '_blank');

  };

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-image-frame">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Abhishek Karthik" />
        </div>
      </div>
      <div className="hero-right">
        <p className="greeting">Hey there, this is</p>
        <h1 className="name">Abhishek Karthik</h1>
        <p className="subtitle">CSE AIML Student | AI/ML Dev | ServiceNow Certified</p>
        <div className="hero-buttons">
          <button className="pushable btn-filled" onClick={handleResumeClick}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Resume</span>
          </button>

          <a
            href="https://www.linkedin.com/in/abhishek-karthik-567981291/"
            target="_blank"
            className="btn-outline button"
          >
            <span className="text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Abhishek18004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline button"
          >
            <span className="text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
