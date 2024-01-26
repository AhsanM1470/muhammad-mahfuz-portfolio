import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <nav>
                <div className="nav-links-container">
                <ul className="nav-links">
                    <li><Link to="/home#about">About</Link></li>
                    <li><Link to="/home#experience">Experience</Link></li>
                    <li><Link to="/home#projects">Projects</Link></li>
                    <li><Link to="/home#contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;