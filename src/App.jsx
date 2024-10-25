import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MainWeather from './components/MainWeather';
import Forecast from './components/Forecast';
import WeeklyForecast from './components/WeeklyForecast';
import Summary from './components/Summary';
import SearchBar from './components/SearchBar';
import Loading from './assets/loading.svg';
import WeatherAlert from './components/WeatherAlert';
import weatherLogo from './assets/weather-icon.png'; // import your logo here
import {
  fetchGeolocationData,
  fetchFiveDayForecast,
  fetchWeatherCityData,
  fetchCityName,
} from './utils/api';
import TemperatureSwitch from './components/TemperatureSwitch';
import HourlyForecast from './components/HourlyForecast';

function App() {
  const [weatherData, setWeatherData] = useState({ metric: null, imperial: null, standard: null });
  const [forecastData, setForecastData] = useState({ metric: null, imperial: null, standard: null });
  const [units, setUnits] = useState('metric');
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState(null); // City selected by the user
  const [geolocationCity, setGeolocationCity] = useState(null); // City based on geolocation
  const [isCitySelected, setIsCitySelected] = useState(false); // Flag for manual city selection

  const handleUnitChange = (newUnit) => {
    setUnits(newUnit);
    if (!weatherData[newUnit]) {
      fetchWeatherForCity(currentCity);
    }
  };

  const handleCityClick = async (city) => {
    setCurrentCity(city);
    setIsCitySelected(true);
    await fetchWeatherForCity(city);
  };

  const fetchWeatherForCity = async (city) => {
    try {
      setInitialLoading(true);

      const weatherPromises = [
        fetchWeatherCityData(city, 'metric'),
        fetchWeatherCityData(city, 'imperial'),
        fetchWeatherCityData(city, 'standard'),
      ];

      const forecastPromises = [
        fetchFiveDayForecast(city, 'metric'),
        fetchFiveDayForecast(city, 'imperial'),
        fetchFiveDayForecast(city, 'standard'),
      ];

      const [weatherMetric, weatherImperial, weatherStandard] = await Promise.all(weatherPromises);
      const [forecastMetric, forecastImperial, forecastStandard] = await Promise.all(forecastPromises);

      setWeatherData({
        metric: weatherMetric,
        imperial: weatherImperial,
        standard: weatherStandard,
      });

      setForecastData({
        metric: forecastMetric,
        imperial: forecastImperial,
        standard: forecastStandard,
      });

      setInitialLoading(false);
    } catch (err) {
      setError(err.message);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const location = await fetchGeolocationData();
        const city = await fetchCityName(location.latitude, location.longitude, units);
        setGeolocationCity(city);
        if (!isCitySelected) {
          setCurrentCity(city);
          await fetchWeatherForCity(city);
        }
      } catch (err) {
        setError(err.message);
        setInitialLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const currentWeather = weatherData ? weatherData[units] : null;
  const currentForecast = forecastData ? forecastData[units] : null;

  if (initialLoading && !weatherData[units]) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <img src={Loading} alt="Loading" className='w-96' />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div
      className="flex min-h-screen bg-gray-900 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="ml-20 md:ml-1 flex-1 p-4">

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            
            {/* Wrapper for logo and search bar */}
            <div className="flex  mb-1">
              <img src={weatherLogo} alt="Weather Logo" className="w-10 h-10 mr-4 object-fill" />
              <SearchBar onCityClick={handleCityClick} />
            </div>

            <div className="flex-grow">
              {currentWeather && (
                <>
                  <MainWeather weatherData={currentWeather} units={units} />
                  <HourlyForecast forecastData={currentForecast} units={units} />
                  <div className="air-condition mt-4">
                    <Forecast weatherData={currentWeather} units={units} />
                  </div>
                  <div className="air-condition mt-4">
                  <WeatherAlert city={currentCity}/>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <TemperatureSwitch onUnitChange={handleUnitChange} />
            <Summary coord={currentWeather.coord} />
            {currentForecast && <WeeklyForecast forecast={currentForecast} units={units} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
