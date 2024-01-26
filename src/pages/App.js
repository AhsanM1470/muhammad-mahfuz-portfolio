import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IconContext from '../IconContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import KangarooTaskarooProject from '../pages/KangarooTaskarooProject'
import WeatherProject from '../pages/WeatherProject';
import CovidDataViewerProject from '../pages/CovidDataViewerProject'
import '../App.css';
import '../MediaQueries.css';

function App() {
  const icons = {
    email: IconContext._currentValue.email,
    linkedIn: IconContext._currentValue.linkedIn,
    github: IconContext._currentValue.github,
  }

  return(
      <IconContext.Provider value={icons}>
        <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kangaroo-taskaroo" element={<KangarooTaskarooProject />} />
            <Route path="/weather" element={<WeatherProject />} />
            <Route path="/covid-data-viewer" element={<CovidDataViewerProject />} />
          </Routes>
          <Footer />
        </div>
        </Router>
      </IconContext.Provider>
  );
}

export default App;