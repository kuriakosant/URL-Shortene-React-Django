// src/Components/Contact.js
import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importing Github icon from react-icons
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Name: Kyriakos Antoniadis</p>
            <p>Email: kuriakosant2003@gmail.com</p>
            <a href="https://github.com/kuriakosant" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} /> {/* Github icon */}
            </a>
        </div>
    );
};

export default Contact;
