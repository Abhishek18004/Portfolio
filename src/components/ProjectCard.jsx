import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <h4 className="image-title">{project.imageTitle}</h4>

        <div className="project-image card">
          <img src={`${process.env.PUBLIC_URL}/${project.imageSrc}`} alt={project.title} className="card-image" />
          <div className="card__content">
            <p className="card__description">{project.description}</p>
          </div>
        </div>

        <p className="tech-stack tools"><strong>Languages:</strong> {project.tools_language}</p>
        <p className="tech-stack frameworks"><strong>Frameworks:</strong> {project.frameworks}</p>

        <div className={`project-buttons ${project.showLiveDemo ? 'dual-buttons' : 'single-button'}`}>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`filled-button ${project.showLiveDemo ? 'half-width' : ''}`}
          >
            Github
            <span className="icon">
              <svg viewBox="0 0 20 20" fill="currentColor" className="arrow-right">
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>

          {project.showLiveDemo && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cssbuttons-io live-demo-btn half-width"
            >
              <span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="play-icon">
                  <path d="M4.5 3.5l11 6.5-11 6.5v-13z" />
                </svg>
                Live Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
