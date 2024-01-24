import React from 'react';
import projectIcon1 from '../assets/kangaroo-taskaroo/task-icon.png';
import projectIcon2 from '../assets/weather/weather-icon.png';
import projectIcon3 from '../assets/data-viewer/covid-icon.png';

function ProjectSection(){
    return(
        <section id="projects">
            <h1 class="title section-header">My Projects</h1>
            <div class="experience-details-container">
                <div class="about-containers">
                    {/* Project 1 */}
                    <div class="details-container color-container">
                        <div class="article-container">
                            <img src={projectIcon1} class="project-img" alt="Project 1"/>
                        </div>
                        <h2 class="experience-sub-title project-title">Kangaroo Taskaroo</h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/AhsanM1470/kangaroo-taskaroo'">
                                Github
                            </button>
                            <button class="btn btn-color-2 project-btn" onclick="location.href='project-1.html'">
                                More Info
                            </button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div class="details-container color-container">
                        <div class="article-container">
                            <img src={projectIcon2} class="project-img" alt="Project 2"/>
                        </div>
                        <h2 class="experience-sub-title project-title">Forecasting Site</h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                Github
                            </button>
                            <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                More Info
                            </button>
                        </div>
                    </div>
                
                    {/* Project 3 */}
                    <div class="details-container color-container">
                        <div class="article-container">
                            <img src={projectIcon3} class="project-img" alt="Project 3"/>
                        </div>
                        <h2 class="experience-sub-title project-title">COVID Data Viewer</h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                Github
                            </button>
                            <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
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