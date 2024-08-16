// src/Components/Contact.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Name: Kyriakos Antoniadis</p>
      <p>Email: kuriakosant2003@gmail.com</p>
      <div className="social-links">
        <a href="https://github.com/kuriakosant" target="_blank" rel="noreferrer">
          <FaGithub size={40} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
