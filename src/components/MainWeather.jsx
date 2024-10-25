import React from 'react';
import Sunny from "../assets/weather_icon/sunny.svg";
import Cloudy from "../assets/weather_icon/cloudy.svg";
import Rainy from "../assets/weather_icon/rainy.svg";
import Thunder from "../assets/weather_icon/thunder.svg";

const MainWeather = ({ weatherData, units }) => {
  const { name, main, weather, dt } = weatherData; // Destructure dt
  const temperature = main.temp; // Current temperature
  const minTemp = main.temp_min; // Minimum temperature
  const maxTemp = main.temp_max; // Maximum temperature
  const description = weather[0].description; // Weather description (e.g., sunny, cloudy)

  // Convert the timestamp to a date object
  const date = new Date(dt * 1000); // dt is in seconds, convert to milliseconds
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); // Full day name
  const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`; // DD/MM

  const getIcon = (weather) => {
    switch (weather) {
      case 'Clear':
        return Sunny;
      case 'Clouds':
        return Cloudy;
      case 'Rain':
        return Rainy;
      case 'Thunderstorm':
        return Thunder;
      default:
        return Sunny; // Default icon
    }
  };

  const unitSymbol = units === 'imperial' ? '°F' : units === 'standard' ? 'K' : '°C';

  return (
    <div className="flex-1 p-4">
      <div className="flex-1 justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-400">{description} </p>
        <h3>{dayName} - {formattedDate}</h3> {/* Added day and date */}
      </div>
      <div className="flex justify-between h-30 items-center">
        <div>
          <div className="text-7xl font-bold">
            {Math.round(temperature)}{unitSymbol}
          </div>
          <div>Low: {Math.round(minTemp)}{unitSymbol} / High: {Math.round(maxTemp)}{unitSymbol}</div> {/* Fixed high temp variable */}
        </div>

        <div className="w-40">
          <img src={getIcon(weather[0].main)} alt="weather_icon" className="w-full h-auto transform scale-150" />
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
