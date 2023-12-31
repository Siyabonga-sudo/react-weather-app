import React, { useState,useEffect } from "react";
import axios from "axios"
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);


    useEffect(() => {
      setLoaded(false)
    }, [props.city])
    

  function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay forecastData={dailyForecast} />
                                </div>
                            );
                        } else {
                          return null;
                        }
                 })}    
                </div>
            </div>
        ); 
    } else {
        let apiKey = "e9tb1630o25a4f01cebc66c9ef1df31c";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;
        
    }
    

    
   
}