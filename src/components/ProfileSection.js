import React, { useContext } from 'react';
import IconContext from '../IconContext';

function ProfileSection(){
    const icons = useContext(IconContext);

    return(
        <section id="profile">
            <div className="section-pic-container">
                <img src="" alt="Muhammad Ahsan Mahfuz profile picture" />
            </div>
            <div className="section-text">
                <p className="section-text-1">Hello, I'm</p>
                <h1 className="title">Muhammad Ahsan Mahfuz</h1>
                <p className="section-text-2">Computer Science Student @ KCL</p>
                <div className="btn-container">
                <button className="btn btn-color-2" onclick="window.open('')">
                    Download CV
                </button>
                <button className="btn btn-color-1" onclick="location.href='./#contact'">
                    Contact Info
                </button>
                </div>
                <div id="socials-container">
                    <img src={icons.email} className="icon" alt="My Email" onclick="location.href='mailto:ahsanmahfuz04@gmail.com'"/>
                    <img src={icons.linkedIn} className="icon" alt="My LinkedIn profile" onclick="location.href='https://www.linkedin.com/in/muhammad-ahsan-mahfuz-294128253/'"/>
                    <img src={icons.github} className="icon" alt="My Github profile" onclick="location.href='https://github.com/AhsanM1470'"/>
                </div>
            </div>
        </section>
    );
}

export default ProfileSection;