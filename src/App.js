import React from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero'; 
import About from './components/About'; 
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Connect from './components/Connect';

function App() {
  return (
    <div>
      <Topbar />
      <Hero /> {/* ✅ Add Hero below Topbar */}
      <About />
      <Projects />
      <WorkExperience />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
