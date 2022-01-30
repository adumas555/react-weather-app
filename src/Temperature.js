import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">°F | <a href="/">°C</a> </span>
    );
  } else{

  }
}
