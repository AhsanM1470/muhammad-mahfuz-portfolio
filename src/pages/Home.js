import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileSection from '../components/ProfileSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import KangarooTaskarooProject from '../pages/KangarooTaskarooProject'
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
            {/* <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/kangaroo-taskaroo" element={<KangarooTaskarooProject />} />
            </Routes> */}
        </div>
    );
}

export default Home;
