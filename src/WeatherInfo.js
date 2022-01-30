import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="day-time text-center">
        <FormatDate date={props.data.date} />
      </div>
      <div className="text-center mb-4 mt-3">
        <WeatherIcon code={props.data.icon} size={64} />
      </div>
      <div className="text-uppercase text-center ">
        {props.data.description}
      </div>
      <div className="text-center current-temp mt-1">
        <Temperature fahrenheit={props.data.temperature} />
      </div>
      <div className="text-center hi-lo mt-1">
        {" "}
        H: {props.data.high}° L: {props.data.low}°
      </div>
      <hr />
      <div className="text-center mt-3">
        <div>Humidity: {props.data.humidity}%</div>
        <div>Wind: {props.data.wind} km/h</div>
        <div>Feels like: {props.data.feels} °F</div>
      </div>
    </div>
  );
}
