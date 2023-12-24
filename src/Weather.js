import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

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
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url
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
          
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city} />
          </div>
          
      </div>
    )
  }

  else {
    search();
    return ("Loading...");
  }

 
    
    
}