// src/Components/Home.js
import React, { useState } from 'react';
import '../Styles/Home.css';

const Home = () => {
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(100); // Simulating progress bar fill
    // Add actual form submission logic here.
    setTimeout(() => setProgress(0), 3000);  // Reset the progress bar after 3 seconds
    alert(`Shortening URL: ${url}`);
  };

  return (
    <div className="home-container">
      <h1>Shorten Your Links</h1>
      <p>Enter a long URL to make it short and easy to remember!</p>

      <form onSubmit={handleSubmit} className="shorten-form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long URL here"
          className="url-input"
        />
        <button type="submit" className="submit-btn">Shorten URL</button>
      </form>

      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Home;
