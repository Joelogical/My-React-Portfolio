import React from 'react';
// import resume from '../assets/files/resume.pdf';

const proficiencies = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML',
  'CSS',
  'Git',
  'REST APIs',
  'GraphQL'
];

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <a href={resume} download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;