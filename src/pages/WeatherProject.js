import React from 'react';
import '../App.css';
import '../MediaQueries.css';
import weatherApp from '../assets/weather/weather-app.png';
import searchBar from '../assets/weather/searchbar.png';

function WeatherProject() {
  return(
    <div>
      <section id="project-purpose">
        <h1 className="title">Project Purpose</h1>
        <div className="project-details-container">
          <div className="text-container">
            This web application allows users to view the daily and hourly forecasting for a given location from the present day, up to the next week.<br />
            It utilises the <b>Open-Meteo Forecasting API</b> to retrieve data about the weather, and the <b>TomTom Search API</b> to find the location the user searches for.<br />
            Developed using <b>HTML, CSS, JavaScript,</b> and <b>Python</b>.
          </div>
        </div>
      </section>

      <section id="project-info">
        <h1 className="title section-header">Further Details</h1>
        <div className="project-details-container">
          <div>
            The search bar performs a fuzzy search and displays a list of locations matching the user's input.
          </div>
          <img src={searchBar} className="project-pic"/>

          <div className="text-container">
            Upon selecting a location, the user is presented with the forecast over the next week.
          </div>
          <img src={weatherApp} className="project-pic"/>
          <div className="text-container">
            Individual days and hours can be selected for further information.<br />
            <b>Data displayed includes:</b>
            <ul class="bullet-point-list">
              <li>The date and time</li>
              <li>The temperature</li>
              <li>The temperature it feels like</li>
              <li>Percentage of precipitation</li>
              <li>Humidity</li>
              <li>Visibility</li>
              <li>Wind speed</li>
              <li>Wind direction</li>
              <li>Air pressure</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherProject;
