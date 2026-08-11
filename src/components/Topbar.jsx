import React from 'react';
import './Topbar.css';

function Topbar() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="topbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/Yellow_Logo.png`} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Me</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Experience</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
        <a href="#connect" onClick={(e) => handleNavClick(e, 'connect')}>Connect</a>
      </div>
    </div>
  );
}

export default Topbar;