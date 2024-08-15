// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; // Updated path

const Header = () => {
    return (
        <header>
            <h1>URL Shortener</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
