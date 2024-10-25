import React, { useEffect, useState } from 'react';
import { fetchWeatherCondition } from '../utils/api';

const Summary = ({ coord }) => {
    const { lon, lat } = coord;
    const [weatherOverview, setWeatherOverview] = useState(''); // State to hold the weather overview
    const [error, setError] = useState(null); // State to hold any error messages

    useEffect(() => {
        const getWeatherOverview = async () => {
            try {
                const overview = await fetchWeatherCondition(lon, lat); // Await the async function
                setWeatherOverview(overview); // Set the state with the overview
            } catch (err) {
                setError(err.message); // Handle any errors
            }
        };

        getWeatherOverview(); // Call the async function
    }, [lon, lat]); // Run this effect when lon or lat changes

    return (
        <div className="bg-gray-800 mt-4 p-4 rounded-lg top-4 bottom-4 flex flex-col w-80">
            <h3 className="mb-4 text-lg font-semibold">Weather Condition</h3>
            <div className="grid grid-cols-1 gap-4">
                {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
                {weatherOverview && <p>{weatherOverview}</p>} {/* Display the weather overview */}
            </div>
        </div>
    );
};

export default Summary;
