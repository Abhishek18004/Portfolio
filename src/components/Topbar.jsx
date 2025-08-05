import React from 'react';
import './Topbar.css'; // We'll create this next

function Topbar() {
  return (
    <div className="topbar">
      <div className="logo">
        <img src="/Yellow_logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#connect">Connect</a>
      </div>
      
    </div>
  );
}

export default Topbar;
