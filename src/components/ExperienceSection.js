import React from 'react';
import checkmarkIcon from '../assets/icons/checkmark.png';

function ExperienceSection(){
    return(
        <section id="experience">
            <h1 className="title section-header">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Languages</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>HTML</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>CSS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                <h3>JavaScript</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                <h3>Java</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                <h3>Python</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                <h3>C++</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="details-container">
                        <h2 className="experience-sub-title">Frameworks</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>NodeJS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>Django</h3>
                                </div>
                            </article>

                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>JavaFX</h3>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Other Tools */}
                    <div className="details-container">
                        <h2 className="experience-sub-title">Libraries</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>React</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} className="icon" alt="Experience icon"/>
                                <div>
                                    <h3>JUnit</h3>
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