import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Siyabonga Msipa and is {""} <a href='https://github.com/Siyabonga-sudo/react-weather-app' target="_blank" rel="noreferrer" >open-sourced on Github</a>
      </footer>
    </div>
  );
}


