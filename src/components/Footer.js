import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <nav>
                <div className="nav-links-container">
                <ul className="nav-links">
                    <li><Link to="/muhammad-mahfuz-portfolio#about">About</Link></li>
                    <li><Link to="/muhammad-mahfuz-portfolio#experience">Experience</Link></li>
                    <li><Link to="/muhammad-mahfuz-portfolio#projects">Projects</Link></li>
                    <li><Link to="/muhammad-mahfuz-portfolio#contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;