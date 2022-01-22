import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card" style={{ width: 45 + "rem" }}>
          <div class="card-body">
            <form id="search-form">
              <input
                type="text"
                placeholder="Enter a city"
                id="enter-city"
                autocomplete="off"
                autofocus="on"
              />
            </form>
            <button id="current-city-button">
              <span role="img" aria-label="emoji">
                📍
              </span>
            </button>
            <p className="international">
              <span className="hub1"> Los Angeles </span>
              <span className="hub2"> London </span>
              <span className="hub3"> Seoul </span>
              <span className="hub4"> Sydney </span>
            </p>
            <h1 className="city" id="city">
              New York City
            </h1>
            <div className="day-time" id="day-time">
              SUNDAY 20:01
            </div>
            <p className="big-emoji">
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt="weather-icon"
                id="day-weather-icon"
              />
            </p>
            <div className="condition">SUNNY</div>
            <div className="weather-now">
              <span className="current-temp">72 </span>
              <span className="far" id="fahrenheit">
                {" "}
                °F{" "}
              </span>

              <div className="hi-lo">
                H: <span className="high">76°</span>
                <span>
                  L: <span className="low">69°</span>
                </span>
              </div>
            </div>
            <hr />
            <p className="info">
              Humidity:<span className="humidity"></span> <br />
              Wind: <span className="wind-speed"></span>
              <br />
              Feels like:<span className="feels-like"></span>
            </p>
            <hr />
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <br />
      <p className="about-me">
        This project was coded by Angela Dumas and
        <a href="https://github.com/adumas555/weather-app">
          is open sourced on GitHub
        </a>
        and
        <a href="https://serene-pike-6e3b77.netlify.app/">
          is hosted on Netlify
        </a>
      </p>
    </div>
  );
}
