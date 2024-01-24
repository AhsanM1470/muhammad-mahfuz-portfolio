import React from 'react';
import educationIcon from '../assets/icons/education.png';

function AboutSection(){
    return(
        <section id="about">
            <h1 class="title">About Me</h1>
            <div class="section-container">
                <div class="about-details-container">
                    <div class="about-containers">
                        {/* is about-containers necessary */}
                        <div class="details-container">
                            <img src={educationIcon} class="icon" alt="Education icon"/>
                            <h3>Education</h3>
                            <p>Bachelors of Science BSc</p>
                            <p>Computer Science</p>
                            <p>King's College London</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Hello!<br/>
                            My name is Muhammad Ahsan Mahfuz. I am a Computer Science undergraduate currently in my second year at King's College London.<br/>
                        </p>
                        <p>I developed my first program when I was 12 and ever since then have prided myself on my problem-solving skills, adaptability, and quick learning. Although I would say my expertise lie in web development and data management, you'll find that I always welcome new challenges and regularly strive for greater heights.</p>
                        <p>Outside of programming my hobbies include video editing, playing the piano, and a good game of chess. Anything that can hone my creative skills or just make me really work up my mind.</p>
                        <p>I'm so grateful to be able to work towards this as a career and would love to get in touch with you!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;