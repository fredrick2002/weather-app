import React from 'react';
import feelLike from "../assets/feel-like.png"
import Wind from "../assets/wind.png"
import Humidity from "../assets/humidity.png"
import Pressure from "../assets/pressure.png"

const Forecast = ({ weatherData, units }) => {
 
  const { name, main, weather } = weatherData;
  const Realfeel = Math.round(main.feels_like);
  const humidity_lvl = main.humidity;
  const pres = main.pressure;
  const windSpeed = Math.round(weatherData.wind.speed);

  const unitSymbol = units === 'imperial' ? '°F' : units === 'standard' ? 'K' : '°C';
  const windunitSymbol = units === 'imperial' ? 'mph' : units === 'standard' ? 'm/s' : 'm/s';
  // console.log(Realfeel);
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full">
      <h3 className="mb-4 text-lg font-light">Air Condition</h3>
      <div className="flex  items-center mb-4">

        <div className="text-center">
          <div className="flex items-center"> {/* Use flex to align items in a row */}
            <img src={feelLike} alt="Real Feel" className="w-7 mr-2" /> {/* Add margin-right for spacing */}
            <p className="text-lg">Real Feel</p>
          </div>
          <div className="flex justify-start">
            <p className="text-3xl font-medium ml-9">{Realfeel}{unitSymbol}</p> {/* Remove padding-left to align */}
          </div>
        </div>

        <div className="text-center ml-96">
          <div className="flex items-center"> {/* Use flex to align items in a row */}
            <img src={Wind} alt="wind" className="w-7 mr-2" /> {/* Add margin-right for spacing */}
            <p className="text-lg">Wind</p>
          </div>
          <div className="flex justify-start">
            <p className="text-3xl font-medium ml-9">{windSpeed} {windunitSymbol}</p> {/* Remove padding-left to align */}
          </div>
        </div>

      </div>


      <div className="flex items-center">

        <div className="text-center">
          <div className="flex items-center justify-start"> {/* Use flex to align items in a row */}
            <img src={Humidity} alt="Rain" className="w-7 mr-2" /> {/* Add margin-right for spacing */}
            <p className="text-lg">Humidity</p>
          </div >
          <div className="flex justify-start">
            <p className="text-3xl font-medium ml-9">{humidity_lvl}%</p> {/* Remove padding-left to align */}
          </div>
        </div>

        <div className="text-center ml-96">
          <div className="flex items-center"> {/* Use flex to align items in a row */}
            <img src={Pressure} alt="Pressure" className="w-7 mr-2" /> {/* Add margin-right for spacing */}
            <p className="text-lg">Pressure</p>
          </div>
          <div className="flex justify-start">
            <p className="text-3xl font-medium ml-9">{pres} hPa</p> {/* Remove padding-left to align */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Forecast;
