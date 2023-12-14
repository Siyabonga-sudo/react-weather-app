import React, { useState } from "react";
import axios from "axios";

import './weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e9tb1630o25a4f01cebc66c9ef1df31c";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
             <div className="col-9">
                <input
                  type="search"
                  placeholder="Search city..."
                  autoFocus="on"
                  className="form-control"
                  onChange={handleCity} />
              </div>
            <div className="col-3">
                <input
                  type="submit"
                  value="Search" 
                  className="btn btn-primary w-100" />
            </div>
            </div>
                  
          </form>
          
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Saturday 08:00</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>

          <div className="row mt-3">
          <div className="col-6">
            <div className="clear-fix">
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left" />
              
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">℃</span>
              
            </div>
          </div>
          <div className="col-6">
          <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
          </ul>
          </div>
          
          </div>
          </div>
          
      </div>
    )
  }

  else {
    search();
    return ("Loading...");
  }

 
    
    
}