import React, { useEffect } from 'react';
import '../App.css';
import '../MediaQueries.css';
import database from '../assets/data-viewer/database.png';
import graph from '../assets/data-viewer/graph.png';
import map from '../assets/data-viewer/map.png';
import mapWithHover from '../assets/data-viewer/map-with-hover.png';
import mapTable from '../assets/data-viewer/map-table.png';

function CovidDataViewerProject() {
  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return(
    <div>
      <section id="project-purpose">
        <h1 className="title">Project Purpose</h1>
        <div className="project-details-container">
          <div className="text-container">
            This application visualises COVID-19 data across different London boroughs. The data is retrieved from a locally stored Excel file with statistics dating back to the start of the pandemic.<br />
          </div>
          <div className="text-container">
          Developed in <b id="key-bold">Java</b> with <b id="key-bold">JavaFX</b> and <b id="key-bold">SceneBuilder</b>.
          </div>
        </div>
      </section>

      <section id="project-info">
        <h1 className="title section-header">Further Details</h1>
        <div className="project-details-container">
            <div className="text-container">
                The user is prompted to input a valid date range to start the application.<br />
                Upon doing so, a table is displayed with all the data stored within the range.
            </div>
            <img src={database} className="project-pic" alt="Database" />
            The arrow buttons at the bottom allows the user to navigate to different representations of the data.
            <img src={map} className="project-pic" alt="Map" />
            On this page is a map visualising the deaths across the boroughs.
            <div className="text-container">
              Hovering over sections of the map show a preview of the data which can be selected for further information.
            </div>
            <img src={mapWithHover} className="project-pic" alt="Map with mouse hover" />
            <img src={mapTable} id="data-viewer-map-table" alt="Map table when selected" />
            <div className="text-container">
              Additionally, there is a graph which shows the change in a specified field over time.
            </div>
            <img src={graph} className="project-pic" alt="Graph" />
            <div className="text-container">
              <b>Field options include:</b>
            </div>
            <ul className="bullet-point-list">
              <li>New cases</li>
              <li>Total cases</li>
              <li>New deaths</li>
              <li>Total deaths</li>
              <li>Retail and recreational mobility</li>
              <li>Grocery and pharmacy mobility</li>
              <li>Parks mobility</li>
              <li>Transit stations mobility</li>
              <li>Workplaces mobility</li>
            </ul>
        </div>
      </section>
    </div>
  );
}

export default CovidDataViewerProject;
