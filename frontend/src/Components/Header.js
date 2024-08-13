import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

const Header = () => {
    return (
        <header className="app-header">
            <h1>URL Shortener</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
};

export default Header;
