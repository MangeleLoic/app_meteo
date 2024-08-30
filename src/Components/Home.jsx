import React, { useEffect, useState } from 'react';

const cities = ['Rome', 'Beijing', 'Yaounde', 'Sydney', 'New York'];
const apiKey = '5ed65535c7dde3c9591abce0c90ec36d'; 

function Home() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
              throw new Error('Errore nella fetch');
            }
            return response.json();
          })
        );
        setWeatherData(data);
      } catch (error) {
        console.error('Errore nella fetch:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div id="weatherCarousel" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        {weatherData.map((weather, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={weather.id}>
            <div className="d-block w-100 text-center">
              <h3>{weather.name}</h3>
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
