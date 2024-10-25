import React, { useEffect, useState } from 'react';
import Sunny from "../assets/weather_icon/sunny.svg";
import Cloudy from "../assets/weather_icon/cloudy.svg";
import Rainy from "../assets/weather_icon/rainy.svg";
import Thunder from "../assets/weather_icon/thunder.svg"; 

const WeeklyForecast = ({ forecast, units }) => {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        if (forecast && forecast.list) {
          setForecastData(groupByDay(forecast.list)); // Grouping by day
        }
      } catch (err) {
        setError(err.message);
      }
    };

    getForecast();
  }, [forecast]);

  const groupByDay = (list) => {
    const grouped = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(' ')[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  };

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!forecastData || forecastData.length === 0) {
    return <div>Loading...</div>; // Handle loading state
  }

  const unitSymbol = units === 'imperial' ? '°F' : units === 'standard' ? 'K' : '°C';

  return (
    <div className="bg-gray-800 mt-4 p-4 rounded-lg top-4 bottom-4 flex flex-col w-80">
      <h3 className="mb-4 text-lg font-semibold">5-Day Forecast</h3>
      <div className="grid grid-cols-1 gap-4">
        {Object.keys(forecastData).slice(1, 6).map((day, index) => {
          const dayData = forecastData[day];
          const midDayData = dayData.find((entry) => entry.dt_txt.includes("12:00:00")) || dayData[0];
          const temp = `${Math.round(midDayData.main.temp_max)}${unitSymbol}/${Math.round(midDayData.main.temp_min)}${unitSymbol}`;

          // Format the date as DD/MM
          const dateParts = day.split('-'); // Get the parts of the date (YYYY-MM-DD)
          const formattedDate = `${dateParts[2]}/${dateParts[1]}`; // Get DD/MM

          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p>{new Date(day).toLocaleDateString('en-US', { weekday: 'short' })} - {formattedDate}</p> {/* Display day and formatted date */}
                <div className="flex items-center">
                  <img src={getIcon(midDayData.weather[0].main)} alt={midDayData.weather[0].main} className="w-16 transform scale-110" />
                  <p className="ml-2">{temp}</p>
                </div>
              </div>
              {index < 4 && <div className="border-b border-gray-600 my-2" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;
