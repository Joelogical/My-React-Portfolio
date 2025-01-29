// filepath: src/pages/About.jsx
import React from 'react';
// import avatar from '../assets/images/avatar.jpg';

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={avatar} alt="Developer's Avatar" className="avatar" />
      <p>Hello! I'm [Developer's Name], a passionate developer with experience in building single-page applications using React. I love creating interactive and dynamic web applications that provide a great user experience. In my free time, I enjoy learning new technologies and contributing to open-source projects.</p>
    </div>
  );
};

export default About;