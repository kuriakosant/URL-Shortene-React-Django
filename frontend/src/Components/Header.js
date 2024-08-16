// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">URL Shortener</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
