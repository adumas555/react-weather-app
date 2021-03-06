import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      feels: Math.round(response.data.main.feels_like),
      city: response.data.name,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    citySearch();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function citySearch() {
    let apiKey = "57b463acac326f9d3b29b49c1092e284";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  function SearchLocation(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    let units = "imperial";
    let apiKey = "57b463acac326f9d3b29b49c1092e284";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(SearchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div class="card" style={{ width: 45 + "rem" }}>
          <div class="card-body">
            <form id="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                id="enter-city"
                autocomplete="off"
                autofocus="on"
                onChange={handleCityUpdate}
              />
            </form>
            <button id="current-city-button" onClick={getCurrentLocation}>
              <span role="img" aria-label="emoji">
                ????
              </span>
            </button>

            <WeatherInfo data={weatherData} />
            <hr />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    citySearch();
    return "Loading...";
  }
}
