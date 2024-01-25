import React from 'react';
import ProfileSection from '../components/ProfileSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import '../App.css';
import '../MediaQueries.css';

function Home() {
    return(
        <div>
            <ProfileSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}

export default Home;
