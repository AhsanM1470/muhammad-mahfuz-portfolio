import React, { useContext } from 'react';
import IconContext from '../IconContext';

function ContactSection(){
    const icons = useContext(IconContext);

    return(
        <section id="contact">
            <h1 class="title section-header">Get in Touch</h1>
            <div class="contact-info-upper-container">
                <div class="contact-info-container">
                    <img src={icons.email} class="icon contact-icon email-icon" alt="Email icon"/>
                    <p><a href="mailto:ahsanmahfuz04@gmail.com">ahsanmahfuz04@gmail.com</a></p>
                </div>
                <div class="contact-info-container">
                    <img src={icons.linkedIn} class="icon contact-icon" alt="LinkedIn icon"/>
                    <p><a href="https://www.linkedin.com/in/muhammad-ahsan-mahfuz-294128253/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;