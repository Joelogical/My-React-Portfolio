// filepath: src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: 'path/to/image1.jpg',
    deployedLink: 'https://deployed-link1.com',
    githubLink: 'https://github.com/user/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;