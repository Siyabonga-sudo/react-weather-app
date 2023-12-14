import React from "react";

import './weather.css';

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Search city..." autoFocus="on" className="form-control" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                    
            </form>
            
            <h1>Vereeniging</h1>
            <ul>
        
            <li>Saturday 08:00</li>
            <li>Sunny</li>
            </ul>
            <div className="row mt-3">
            <div className="col-6">
              <div className="clear-fix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left" />
                
                  <span className="temperature">24</span>
                  <span className="unit">℃</span>
                
              </div>
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