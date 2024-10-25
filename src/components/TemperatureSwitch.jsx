import React, { useState } from 'react';

const TemperatureSwitch = ({ onUnitChange }) => {
  const [selectedUnit, setSelectedUnit] = useState('metric'); // Default to Celsius

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    onUnitChange(unit); // Notify parent component of the change
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="relative inline-flex items-center">
        <button
          onClick={() => handleUnitChange('metric')}
          className={`w-16 h-10 rounded-l-full transition-all duration-300 ${selectedUnit === 'metric' ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          °C
        </button>
        <button
          onClick={() => handleUnitChange('imperial')}
          className={`w-16 h-10 transition-all duration-300 ${selectedUnit === 'imperial' ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          °F
        </button>
        <button
          onClick={() => handleUnitChange('standard')}
          className={`w-16 h-10 rounded-r-full transition-all duration-300 ${selectedUnit === 'standard' ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          K
        </button>
        <div
          // className={`absolute w-1/3 h-full bg-blue-200 rounded-full transition-transform duration-300 ${selectedUnit === 'imperial' ? 'translate-x-1/3' : selectedUnit === 'standard' ? 'translate-x-2/3' : ''}`}
        />
      </div>
    </div>
  );
};

export default TemperatureSwitch;
