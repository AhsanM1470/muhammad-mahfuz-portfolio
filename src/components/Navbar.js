import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Touched");
    };

    return(
    <header>
      <nav id="desktop-nav">
        <div className="logo">
          <Link to="/home">
            Muhammad Ahsan Mahfuz
          </Link>
        </div>
        <div>
            <ul className="nav-links">
            <li><Link to="/home#about">About</Link></li>
            <li><Link to="/home#experience">Experience</Link></li>
            <li><Link to="/home#projects">Projects</Link></li>
            <li><Link to="/home#contact">Contact</Link></li>
            </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">
          <Link to="/home">
            Muhammad Ahsan Mahfuz
          </Link>
        </div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/home#about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/home#experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/home#projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/home#contact" onClick={toggleMenu}>Contact</Link></li>
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;