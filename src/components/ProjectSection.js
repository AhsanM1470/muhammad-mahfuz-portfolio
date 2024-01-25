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
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                                Github
                            </button>
                            <Link to="/kangaroo-taskaroo" className="project-link btn btn-color-2 project-btn">
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
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                                Github
                            </button>
                            <Link to="/weather" className="project-link btn btn-color-2 project-btn">
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
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                More Info
                            </button>
                        </div>
                    </div>
                </div>

                <h2>And this very website you're using right now!</h2>
            </div>
        </section>
    );
}

export default ProjectSection;