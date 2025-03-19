import React from 'react';


const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="photo.jpg" // Use imported image
          alt="Aden Mohamed Abdi"
          className="profile-photo"
        />
        <h1>Welcome to My Portfolio</h1>
      </div>
      <p>
        Hi, I'm Aden Mohamed Abdi, a passionate developer with a focus on creating modern, user-friendly web applications.
        I specialize in React, JavaScript, and CSS, and I love turning ideas into functional and beautiful digital experiences.
      </p>
      <p>
        Feel free to explore my portfolio to learn more about my skills, projects, and how to get in touch with me!
      </p>
    </div>
  );
};

export default Home;