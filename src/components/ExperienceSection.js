import React from 'react';
import checkmarkIcon from '../assets/icons/checkmark.png';

function ExperienceSection(){
    return(
        <section id="experience">
            <h1 class="title section-header">Experience</h1>
            <div class="experience-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>HTML</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>CSS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                <h3>JavaScript</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="details-container">
                        <h2 class="experience-sub-title">Backend Development</h2>
                        <div class="article-container">
                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Node JS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>React</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Git</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Django</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* other skills */}
                    <div class="details-container">
                        <h2 class="experience-sub-title">Other Skills</h2>
                        <div class="article-container">
                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Python</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Java</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    {/* Not aligned */}
                                    <h3>C++</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;