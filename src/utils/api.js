// api.js
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Function to fetch weather data from OpenWeather API
/*
export const fetchWeatherData = async (lat, lon,units) => {
  try {
    // console.log(OPENWEATHER_API_KEY);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error for handling in the component
  }
};
*/
// Function to fetch geolocation data
export const fetchGeolocationData = async () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

// utils/api.js
// export const fetchFiveDayForecast = async (lat, lon,units) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}`
//   );
//   const data = await response.json();
//   return data;
// };

export const fetchFiveDayForecast = async (city,units) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`
  );
  const data = await response.json();
  return data;
};

export const fetchWeatherCityData = async (city,units) => {
  try {
    // console.log(OPENWEATHER_API_KEY);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error for handling in the component
  }
};


export const fetchCityName = async (lat, lon,units) => {
  try {
    // console.log(OPENWEATHER_API_KEY);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error for handling in the component
  }
};


export const fetchWeatherCondition = async (lon, lat) => {
  try {
    // console.log(OPENWEATHER_API_KEY);
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall/overview?lon=${lon}&lat=${lat}&appid=${OPENWEATHER_API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data.weather_overview;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error for handling in the component
  }
};

