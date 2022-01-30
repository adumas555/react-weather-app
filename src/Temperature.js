import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function fToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function cToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" className="text-decoration-none" onClick={fToC}>
            °C
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature">{Math.round(celsius())} </span>
        <span className="unit">
          <a href="/" className="text-decoration-none" onClick={cToF}>
            °F
          </a>{" "}
          | °C{" "}
        </span>
      </div>
    );
  }
}
