// src/Components/About.js
import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h1>About This App</h1>
            <p>
                This URL Shortener app allows users to shorten long URLs and easily share them. 
                You can paste any URL, and the app will generate a unique short URL for you.
            </p>
            <p>
                The application works by generating a random string of characters for each URL 
                and storing it in a database, mapping the short URL to the original URL. 
                Users can then click on the short URL to be redirected to the original link.
            </p>
        </div>
    );
};

export default About;
