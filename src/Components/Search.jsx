import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  const fetchWeather = async (city) => {
    const apiKey = '5ed65535c7dde3c9591abce0c90ec36d';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
      navigate(`/previsioni/`, { state: { weatherData: data } }); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeather(city);
    } else {
      alert('Inserisci una città valida');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Inserisci qui la tua località"
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
}

export default Search;
