import React from 'react';
import checkmarkIcon from '../assets/icons/checkmark.png';

function ExperienceSection(){
    return(
        <section id="experience">
            <h1 class="title section-header">Experience</h1>
            <div class="experience-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <h2 class="experience-sub-title">Languages</h2>
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

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                <h3>Java</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                <h3>Python</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                <h3>C++</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="details-container">
                        <h2 class="experience-sub-title">Frameworks</h2>
                        <div class="article-container">
                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>NodeJS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Django</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>JavaFX</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Other Tools */}
                    <div class="details-container">
                        <h2 class="experience-sub-title">Libraries</h2>
                        <div class="article-container">
                            <article>
                                <img src={checkmarkIcon} class="icon" alt="Experience icon"/>
                                <div>
                                    <h3>React</h3>
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