import React from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <h1>Vereeniging</h1>
            
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
            <h2>24C</h2>
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 35%</li>
                <li>Wind: 13 km/h</li>
            </ul>
            <ul>
                <li>Weather</li>
                <li>Saturday 08:00</li>
                <li>Sunny</li>
            </ul>
            
        </div>
    )
}