import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const cities = ['Rome', 'Beijing', 'Yaounde', 'Sydney', 'New York'];
const apiKey = '5ed65535c7dde3c9591abce0c90ec36d'; 

function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
              throw new Error(`Failed to fetch weather data for ${city}`);
            }
            return response.json();
          })
        );
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (weatherData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div id="weatherCarousel" className="carousel slide">
      <div className="carousel-inner py-5 my-5 text-dark">
        {weatherData.map((weather, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={weather.id || index}>
            <div className="d-block w-100 text-center">
              <h2>{weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#weatherCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#weatherCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
