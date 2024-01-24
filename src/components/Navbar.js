import React, { useState } from 'react';
// Import your CSS file or any other assets

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isMenuOpen && (
            <div className="menu-links">
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;