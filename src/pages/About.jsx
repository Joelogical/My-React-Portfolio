import React from 'react';
import avatar from '../assets/images/avatar.jpg';

const About = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <img src={avatar} alt="Developer's Avatar" className="avatar" />
      <p>
        Hello! My name is Joel, a passionate student developer with experience in building single-page applications using React. 
        I love creating interactive and dynamic web applications that provide a great user experience. 
        In my free time, I enjoy dancing, hiking, and spending time with my friends and family.
      </p>
    </div>
  );
};

export default About;