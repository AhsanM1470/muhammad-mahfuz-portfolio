import React from 'react';
import IconContext from '../IconContext';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import '../App.css';
import '../MediaQueries.css';

function App() {
  const icons = {
    email: IconContext._currentValue.email,
    linkedIn: IconContext._currentValue.linkedIn,
    github: IconContext._currentValue.github,
  }

  return (
    <IconContext.Provider value={icons}>
      <div>
        <Navbar />
        <ProfileSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}

export default App;
