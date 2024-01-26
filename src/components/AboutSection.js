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
                            <p>Currently in my second year</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-container">
                            My journey began at the tender age of 12 when I created my first-ever Python application.
                            Ever since then, I have prided myself on my problem-solving skills, adaptability, and quick learning abilities.
                            My experience primarily lies in full-stack development and data analysis, but you'll find that I am always eager to embrace new and unfamiliar challenges.
                        </div>
                        <div className="text-container">
                            I've found immense satisfaction in collaborating and leading within diverse teams.
                            These experiences have taught me how significantly teamwork amplifies our collective ability to innovate and solve complex problems.
                            As a result of these projects, I particularly prioritize the readability and maintainability of my code.
                        </div>
                        <div className="text-container">
                            Outside of coding, my hobbies include video editing, playing the piano, and engaging in a good game of chess!
                            These activities are not just pastimes; they are extensions of my love for creativity and strategic thinking.
                        </div>
                        <div className="text-container">
                            I am grateful for the opportunity to pursue this career and would be delighted to connect with you!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;