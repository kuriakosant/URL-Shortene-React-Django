// src/Components/Home.js
import React, { useState } from 'react';
import '../Styles/Home.css';

const Home = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (to backend)
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
    </div>
  );
};

export default Home;
