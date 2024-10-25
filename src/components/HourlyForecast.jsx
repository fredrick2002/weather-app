import React from 'react';
import Sunny from '../assets/weather_icon/sunny.svg'; // Replace with your actual path to the icon
import Cloudy from '../assets/weather_icon/cloudy.svg';
import Rainy from '../assets/weather_icon/rainy.svg';
import Thunder from '../assets/weather_icon/thunder.svg';

// Function to return the correct icon based on the weather condition
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

const ForecastComponent = ({ forecastData, units }) => {
    const unitSymbol = units === 'imperial' ? '°F' : units === 'standard' ? 'K' : '°C';
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-light">Today's Forecast</h3>
            <div className="grid grid-cols-6 gap-4">
                {forecastData.list.slice(0, 6).map((forecast, index) => (
                    <div key={forecast.dt} className="forecast-item text-center relative">
                        <div>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        <img
                            src={getIcon(forecast.weather[0].main)} // Use the getIcon function to determine the correct icon
                            alt={forecast.weather[0].description}
                            className="mx-auto w-20 h-20"
                        />
                        <div>{forecast.weather[0].main}</div>
                        <div>{Math.round(forecast.main.temp)}{unitSymbol}</div>
                        {index < 5 && ( // Vertical line between items
                            <div className="absolute right-0 top-0 h-full w-0.5 bg-gray-600" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastComponent;
