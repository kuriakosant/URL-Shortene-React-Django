import React, { useState } from 'react';
import '../Styles/Home.css'; 

const Home = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ original_url: originalUrl }),
        });
        const data = await response.json();
        setShortUrl(data.short_url);
    };

    return (
        <div className="home-container">
            <h2>Shorten Your URL</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter URL to shorten"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div className="result">
                    <h3>Your Shortened URL:</h3>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default Home;
