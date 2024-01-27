import React, { useContext } from 'react';
import IconContext from '../IconContext';

function ContactSection(){
    const icons = useContext(IconContext);

    return(
        <section id="contact">
            <h1 className="title section-header">Contact</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={icons.email} className="icon contact-icon email-icon" alt="Email icon"/>
                    <p><a href="mailto:ahsanmahfuz04@gmail.com">ahsanmahfuz04@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={icons.linkedIn} className="icon contact-icon" alt="LinkedIn icon"/>
                    <p><a href="https://www.linkedin.com/in/muhammadahsanmahfuz/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;