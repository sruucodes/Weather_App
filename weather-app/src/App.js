import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '8a5e1559f8287ecb4a9b9a7edd9cf6d5';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch current weather data
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Fetch forecast data for the next few days
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Process forecast to get one data point per day (e.g., the forecast at 12:00 PM)
      const dailyForecast = forecastResponse.data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );

      setWeather(weatherResponse.data);
      setForecast(dailyForecast); // Set forecast data
    } catch (err) {
      setError('City not found. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p className="error">{error}</p> : null}
      
      {/* Current Weather */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}

      {/* Forecast for the next few days */}
      {forecast.length > 0 && (
        <div className="forecast">
          <h3>Upcoming Days Forecast</h3>
          <div className="forecast-container">
            {forecast.map((day) => (
              <div key={day.dt} className="forecast-day">
                <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                <p>Temp: {day.main.temp}°C</p>
                <p>{day.weather[0].description}</p>
                <img
                  className="weather-icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
