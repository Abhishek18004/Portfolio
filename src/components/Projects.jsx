import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: 1,
    title: 'ParaScope',
    tools_language: 'Python, Git',
    frameworks: 'Streamlit, Gemini API, PyMuPDF, pdfplumber, Tesseract OCR, PIL, scikit-learn',
    githubLink: 'https://github.com/Abhishek18004/ParaScope',
    showLiveDemo: false,
    liveDemoLink: '',
    imageSrc: 'Project_Parascope.png',
    imageTitle: 'Academic Paper Summarizer & Analyzer',
    description: 'ParaScope is a multi-modal academic assistant that simplifies dense research papers, scanned notes, and technical PDFs using AI. It supports academic comprehension by generating summaries, glossaries, and question-answer pairs.',
  },
  {
    id: 2,
    title: 'WeatherSnap',
    tools_language: 'JavaScript, Git, REST API',
    frameworks: 'ServiceNow, GlideAjax, Script Includes, UI Action',
    githubLink: 'https://github.com/Abhishek18004/WeatherSnap',
    showLiveDemo: false,
    liveDemoLink: '',
    imageSrc: 'Project_WeatherSnap.png',
    imageTitle: 'ServiceNow-based weather information fetcher',
    description: 'Fishers is a web application that assists in confirming whether a specified URL is secure or dangerous. The system utilizes a trained ML model to analyze structural and behavioral features of the URLs and display results.',
  },
  {
    id: 3,
    title: 'CineMatch',
    tools_language: 'Python, JavaScript, Firebase Firestore, REST API, Git',
    frameworks: 'React.js, Flask, scikit-learn, Axios, TMDB API',
    githubLink: 'https://github.com/Abhishek18004/CineMatch',
    showLiveDemo: false,
    liveDemoLink: 'https://yourprojectthree.live',
    imageSrc: 'Project_CineMatch.png',
    imageTitle: 'Swipe Based Movie Recommendation System',
    description: 'Swipe-based movie recommendation web app that analyzes user likes, fetches live movie data, and delivers AI-driven personalized suggestions.',
  },
  {
    id: 4,
    title: 'Fishers',
    tools_language: 'Python, HTML, CSS, JavaScript, Git, Flask',
    frameworks: 'scikit-learn, Flask',
    githubLink: 'https://github.com/Abhishek18004/Fishers',
    showLiveDemo: false,
    liveDemoLink: '',
    imageSrc: 'Project_Fisher.png',
    imageTitle: 'Phishing Detection Flask App',
    description: 'Fishers is a web application that assists in confirming whether a specified URL is secure or dangerous. The system utilizes a trained ML model to analyze structural and behavioral features of the URLs and display results.',
  },
  {
    id: 5,
    title: 'DigitAI',
    tools_language: 'JavaScript, HTML, CSS, Python, Git',
    frameworks: 'TensorFlow.js, Tailwind CSS, Convolutional Neural Networks (CNN), MNIST dataset',
    githubLink: 'https://github.com/Abhishek18004/Handwritten-Digit-Recognition',
    showLiveDemo: false,
    liveDemoLink: 'https://yourprojectthree.live',
    imageSrc: 'Project_DigitAI.png',
    imageTitle: 'Streamlit-based User Segmentation Dashboard',
    description: 'DigitAI is an application that uses a trained Convolutional Neural Network (CNN) model for recognition of handwritten digits from uploaded pictures. It provides an interactive frontend to upload digit pictures and get predictions in real-time via TensorFlow.',
  },
  {
    id: 6,
    title: 'Cluster Chutney',
    tools_language: 'Python, pandas, NumPy, Git, scikit-learn, matplotlib, seaborn',
    frameworks: 'Streamlit, joblib, PCA, KMeans Clustering',
    githubLink: 'https://github.com/Cluster-Chutney/Cluster-Chutney',
    showLiveDemo: true,
    liveDemoLink: 'https://yourprojectthree.live',
    imageSrc: 'Project_Cluster_chutney.png',
    imageTitle: 'Streamlit-based User Segmentation Dashboard',
    description: 'A Streamlit-based user profiling & segmentation dashboard that helps businesses explore, cluster, and understand user behavior for targeted advertising and personalization.',
  },
  {
    id: 7,
    title: 'DoraDora',
    tools_language: 'Python, Socket Programming, Git',
    frameworks: 'TCP/IP Networking, Custom Protocol Design',
    githubLink: 'https://github.com/Abhishek18004/DoraDora',
    showLiveDemo: false,
    liveDemoLink: '',
    imageSrc: 'Project_DoraDora.png',
    imageTitle: 'Socket-based Character Guessing Game',
    description: "DoraDora is a client-server game developed using Python's socket programming. The user responds to a set of Yes/No questions about a mystery Doraemon character, and the server tries to guess the character. After guessing correctly, the server sends an image of the character to the client.",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-list">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;