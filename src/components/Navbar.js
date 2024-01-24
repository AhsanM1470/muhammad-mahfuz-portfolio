import React, { useState } from 'react';

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Touched");
    };

    return(
    <header>
      <nav id="desktop-nav">
        <div className="logo">Muhammad Ahsan Mahfuz</div>
        <div>
            <ul className="nav-links">
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#experience">Experience</a></li>
            <li><a href="index.html#projects">Projects</a></li>
            <li><a href="index.html#contact">Contact</a></li>
            </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Muhammad Ahsan Mahfuz</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="index.html#about" onClick={toggleMenu}>About</a></li>
            <li><a href="index.html#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="index.html#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="index.html#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;