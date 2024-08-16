// src/Components/About.js
import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        This URL Shortener app allows you to take a long and complex URL and
        shorten it into a manageable, compact link. Great for sharing on
        social media or anywhere else!
      </p>
      <p>
        Once a link is shortened, you can share it, and users will be
        redirected to the original URL when they click on it.
      </p>
    </div>
  );
};

export default About;
