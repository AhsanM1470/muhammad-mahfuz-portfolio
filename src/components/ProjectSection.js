import React from 'react';
import { Link } from 'react-router-dom';
import projectIcon1 from '../assets/kangaroo-taskaroo/task-icon.png';
import projectIcon2 from '../assets/weather/weather-icon.png';
import projectIcon3 from '../assets/data-viewer/covid-icon.png';

function ProjectSection(){
    return(
        <section id="projects">
            <h1 className="title section-header">My Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {/* Project 1 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={projectIcon1} className="project-img" alt="Project 1"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Kangaroo Taskaroo</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/AhsanM1470/kangaroo-taskaroo'}>
                                Source Code
                            </button>
                            <Link to="/muhammad-mahfuz-portfolio/kangaroo-taskaroo" className="project-link btn btn-color-2 project-btn">
                                More Info
                            </Link>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={projectIcon2} className="project-img" alt="Project 2"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Forecasting Site</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/AhsanM1470/weather-app'}>
                                Source Code
                            </button>
                            <Link to="/muhammad-mahfuz-portfolio/weather" className="project-link btn btn-color-2 project-btn">
                                More Info
                            </Link>
                        </div>
                    </div>
                
                    {/* Project 3 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={projectIcon3} className="project-img" alt="Project 3"/>
                        </div>
                        <h2 className="experience-sub-title project-title">COVID Data Viewer</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/AhsanM1470/covid-data-viewer'}>
                                Source Code
                            </button>
                            <Link to="/muhammad-mahfuz-portfolio/covid-data-viewer" className="project-link btn btn-color-2 project-btn">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>

                <h2>And this very website you're using right now!</h2>
                <div className="fine-text">
                    Using <b id="key-bold">HTML, CSS, JavaScript, NodeJS</b> and <b id="key-bold">React</b> <br />
                    You can find the source code <a href="https://github.com/AhsanM1470/muhammad-mahfuz-portfolio/" id="sentence-link">here</a>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;