import React from "react";
import "./styles.css";

export default function Temperature() {
  let weatherData = {
    city: "Johannesburg",
    temperature: 27,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl:
      "https://i.pinimg.com/564x/c6/b7/0e/c6b70e73f2fa76de0801501575bed06d.jpg",
    wind: 15,
    humidity: 80,
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city here!"
          className="search"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      <br />
      <div className="weather-app-data">
        <h1>{weatherData.city}</h1>
        <p className="details">
          <span>{weatherData.date}</span> |{" "}
          <span>{weatherData.description}</span>
          <br />
          Humidity: {weatherData.humidity}% | Wind: {weatherData.wind} km/h
        </p>
      </div>
      <div className="temperature-container">
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="icon"
        />
        <div className="temperature">{weatherData.temperature}</div>
        <div className="celsius">°C</div>
      </div>
    </div>
  );
}
