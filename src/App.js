import React, { useEffect } from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero'; 
import About from './components/About'; 
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Connect from './components/Connect';

function App() {
  useEffect(() => {
    // 1. Set the browser tab title
    document.title = "Abhishek Karthik";

    // 2. Set the favicon to Yellow_Logo.png from the public folder
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(favicon);
    }
    favicon.href = `${process.env.PUBLIC_URL}/Logo_favicon.png`;
  }, []);

  return (
    <div>
      <Topbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;