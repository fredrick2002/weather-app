import React, { useState } from 'react';

const WeatherAlert = ({ city }) => {
    const [email, setEmail] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [tempThreshold, setTempThreshold] = useState('');
    // const [city, setCity] = useState(''); // Adding city as it's required for the API call
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formattedStartTime = startTime; 
      const formattedEndTime = endTime;
  
      // Data to be sent to the API
      const alertData = {
        email,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        tempThreshold,
        city,
      };
      try {
        // Make the API call using fetch
        const response = await fetch('http://localhost:3000/set-alert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(alertData),
        });
  
        if (response.ok) {
          // Handle success (e.g., show success message)
          alert('Weather alert set successfully!');
        } else {
          // Handle errors (e.g., show error message)
          alert('Failed to set weather alert.');
        }
      } catch (error) {
        console.error('Error setting alert:', error);
        alert('An error occurred while setting the alert.');
      }
    };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="mb-4 text-lg font-light">Set Weather Alert</h3>
      <form onSubmit={handleSubmit}>
        {/* Wrapping all input fields in a flex container */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Email Address Field */}
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-1.5 border border-gray-700 rounded-xl bg-gray-900"
                required
              />
            </div>

            {/* Time Range Fields */}
            <div className="w-1/5">
              <label className="block mb-2 text-sm font-medium">Time Range</label>
              <div className="flex items-center gap-2">
                {/* Start Time Input */}
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-24 p-1.5 border border-gray-700 rounded-xl bg-gray-900"
                  required
                />
    


                <span className="text-sm">to</span>

                {/* End Time Input */}
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-24 p-1.5 border border-gray-700 rounded-xl bg-gray-900"
                  required
                />
                {/* End Time AM/PM Toggle */}
              </div>
            </div>

            {/* Temperature Threshold Field */}
            <div className="w-15">
              <label className="block mb-2 text-sm font-medium">Temperature Threshold (°C)</label>
              <input
                type="number"
                value={tempThreshold}
                onChange={(e) => setTempThreshold(e.target.value)}
                className="w-full p-1.5 border border-gray-700 rounded-xl bg-gray-900"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-15 p-2 mt-3 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-600"
        >
          Set Alert
        </button>
      </form>
    </div>
  );
};

export default WeatherAlert;
