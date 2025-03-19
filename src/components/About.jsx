import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a self-taught developer with a strong passion for web development. Over the years, I've honed my skills in:
      </p>
      <ul>
        <li>Frontend Development (React, JavaScript, HTML, CSS)</li>
        <li>Responsive Web Design</li>
        <li>UI/UX Design Principles</li>
        <li>Version Control (Git)</li>
      </ul>
      <p>
        I enjoy solving complex problems and building applications that make a difference.
      </p>
      {/* Fixed Download CV button */}
      <a
        href="/Aden_Mohamed_Abdi_CV.docx" // Ensure the file is inside the public folder
        download="Aden_Mohamed_Abdi_CV.docx" // Ensures proper downloading
        className="cv-button"
      >
        Download CV
      </a>
    </div>
  );
};

export default About;