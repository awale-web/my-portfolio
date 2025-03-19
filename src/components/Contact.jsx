import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach out to me via:</p>
      <ul>
        <li>Email: <strong>adensomane@gmail.com</strong></li>
        <li>Phone: <strong>+254723744411</strong></li>
        <li>
          WhatsApp: 
          <a 
            href="https://wa.me/254723744411" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </li>
        <li>TikTok: <a href="https://www.tiktok.com/@webtrust1" target="_blank" rel="noopener noreferrer">@webtrust1</a></li>
        <li>Instagram: <a href="https://www.instagram.com/webtrust1" target="_blank" rel="noopener noreferrer">webtrust1</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/aden-abdi-b1a738301/" target="_blank" rel="noopener noreferrer">Aden Abdi</a></li>
      </ul>
    </div>
  );
};

export default Contact;