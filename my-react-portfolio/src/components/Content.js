import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg'; // Make sure to add an image in the specified path
import resume from '../assets/files/resume.pdf'; // Make sure to add a resume file in the specified path

const Content = () => {
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://deployed-link1.com',
      githubLink: 'https://github.com/user/project1'
    },
    {
      title: 'Project 2',
      image: 'path/to/image2.jpg',
      deployedLink: 'https://deployed-link2.com',
      githubLink: 'https://github.com/user/project2'
    },
    {
      title: 'Project 3',
      image: 'path/to/image3.jpg',
      deployedLink: 'https://deployed-link3.com',
      githubLink: 'https://github.com/user/project3'
    },
    {
      title: 'Project 4',
      image: 'path/to/image4.jpg',
      deployedLink: 'https://deployed-link4.com',
      githubLink: 'https://github.com/user/project4'
    },
    {
      title: 'Project 5',
      image: 'path/to/image5.jpg',
      deployedLink: 'https://deployed-link5.com',
      githubLink: 'https://github.com/user/project5'
    },
    {
      title: 'Project 6',
      image: 'path/to/image6.jpg',
      deployedLink: 'https://deployed-link6.com',
      githubLink: 'https://github.com/user/project6'
    }
  ];

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

  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <img src={avatar} alt="Developer's Avatar" className="avatar" />
        <p>Hello! I'm [Developer's Name], a passionate developer with experience in building single-page applications using React. I love creating interactive and dynamic web applications that provide a great user experience. In my free time, I enjoy learning new technologies and contributing to open-source projects.</p>
      </section>
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"> GitHub Repository</a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onBlur={handleBlur} required />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onBlur={handleBlur} onChange={handleEmailChange} required />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onBlur={handleBlur} required></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section id="resume">
        <h2>Resume</h2>
        <a href={resume} download>Download Resume</a>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Content;