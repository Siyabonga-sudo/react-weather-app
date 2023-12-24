import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
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
        <WeatherIcon src={props.forecastData.condition.icon_url} alt={props.forecastData.condition.description} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
            <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        </div>
        </div>
    )
}