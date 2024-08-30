import React from 'react';
import { useLocation } from 'react-router-dom';

function CityDetails() {
  const location = useLocation();
  const { weatherData } = location.state || {};

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
}

export default CityDetails;