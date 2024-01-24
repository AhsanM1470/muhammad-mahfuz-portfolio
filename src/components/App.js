import React from 'react';
import IconContext from '../IconContext';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
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
      </div>
    </IconContext.Provider>
  );
}

export default App;
