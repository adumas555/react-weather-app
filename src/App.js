import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <br />

        <footer>
          This project was coded by Angela Dumas and and is{" "}
          <a
            href="https://github.com/adumas555/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://heuristic-bardeen-082e9c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            is hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
