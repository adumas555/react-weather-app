import React from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <br />
        <p className="about-me">
          This project was coded by Angela Dumas and
          <a href="https://github.com/adumas555/react-weather-app">
            is open sourced on GitHub
          </a>
          and
          <a href="https://heuristic-bardeen-082e9c.netlify.app/">
            is hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
