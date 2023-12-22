import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.Round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.Round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

    return (
        <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon src={props.forecastData.icon} alt={props.data.description} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
            <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        </div>
        </div>
    )
}