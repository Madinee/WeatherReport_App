import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <h1 className="title">
        <span style={{ color: "#0288d1" }}>W</span>
        <span style={{ color: "#039be5" }}>e</span>
        <span style={{ color: "#03a9f4" }}>a</span>
        <span style={{ color: "#29b6f6" }}>t</span>
        <span style={{ color: "#4fc3f7" }}>h</span>
        <span style={{ color: "#81d4fa" }}>e</span>
        <span style={{ color: "#b3e5fc" }}>r</span>
        <img src="./images/icon.svg" alt="" width="60" height="60" />
        <span style={{ color: "#e1f5fe" }}>R</span>
        <span style={{ color: "#00e5ff" }}>e</span>
        <span style={{ color: "#18ffff" }}>p</span>
        <span style={{ color: "#84ffff" }}>o</span>
        <span style={{ color: "#baffff" }}>r</span>
        <span style={{ color: "#eeffff" }}>t</span>
      </h1>
      <input
        type="text"
        className="search"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city_icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
