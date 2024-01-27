import React, { useContext } from 'react';
import IconContext from '../IconContext';
import profilePic from '../assets/profile-pic.png';

function ProfileSection(){
    const icons = useContext(IconContext);

    return(
        <section id="profile">
            <div className="section-pic-container">
                <img src={profilePic} alt="Muhammad Ahsan Mahfuz" className='profile-pic' />
            </div>
            <div className="section-text">
                <p className="section-text-1">Hello, I'm</p>
                <h1 className="title">Muhammad Ahsan Mahfuz</h1>
                <p className="section-text-2">Computer Science Student @ KCL</p>
                <div className="btn-container">
                </div>
                <div id="socials-container">
                    <img src={icons.email} className="icon" alt="My Email" onClick={() => window.location.href='mailto:ahsanmahfuz04@gmail.com'} />
                    <img src={icons.linkedIn} className="icon" alt="My LinkedIn profile" onClick={() => window.location.href='https://www.linkedin.com/in/muhammad-ahsan-mahfuz-294128253/'} />
                    <img src={icons.github} className="icon" alt="My Github profile" onClick={() => window.location.href='https://github.com/AhsanM1470'} />
                </div>
            </div>
        </section>
    );
}

export default ProfileSection;