import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Employee Tracker CMS',
    image: 'src/assets/images/github.jpg',
    deployedLink: 'https://deployed-link1.com',
    githubLink: 'https://github.com/Joelogical/Employee_Tracker_CMS.git'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div className="container">
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