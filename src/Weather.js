import React from "react";

import './weather.css';

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
            
            <h1>Vereeniging</h1>
            <ul>
        
            <li>Saturday 08:00</li>
            <li>Sunny</li>
            </ul>
            <div className="row">
            <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
            <h2>24C</h2>
            </div>
            <div className="col-6">
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 35%</li>
                <li>Wind: 13 km/h</li>
            </ul>
            </div>
            
            </div>
            </div>
            
        </div>
    )
}