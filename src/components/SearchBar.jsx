import React, { useState } from "react";
import cities from '../utils/cities';

export default function SearchBar({ onCityClick }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filteredCities = cities.filter((city) =>
                city.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredCities.slice(0, 5)); // Limit to 5 suggestions
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
        onCityClick(suggestion); // Call the parent function to fetch weather data
    };

    return (
        <div className="pb-5 relative">
        
            <input
                type="text"
                value={query}
                onChange={handleChange}
                className="bg-gray-800 p-3 border border-gray-600 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-500 w-full"
                placeholder="Search Cities"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-gray-700 border border-gray-600 rounded-lg mt-1 w-full max-h-40 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="p-2 cursor-pointer hover:bg-gray-600"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
