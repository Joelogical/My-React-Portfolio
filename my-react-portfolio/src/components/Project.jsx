// filepath: src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
        <a href={githubLink} target="_blank" rel="noopener noreferrer"> GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;