import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileSection from '../components/ProfileSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import '../App.css';
import '../MediaQueries.css';

function Home() {
    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            // Get the hash (or query parameter) from the URL
            const section = location.hash;
            if(section){
                const element = document.getElementById(section.replace('#', ''));
                if(element){
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('load', scrollToSection);
        scrollToSection();

        return () => {
            window.removeEventListener('load', scrollToSection);
        };
    }, [location]);

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
