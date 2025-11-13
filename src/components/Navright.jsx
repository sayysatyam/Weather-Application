import React from 'react'
import { Search } from "lucide-react";
import { useContext } from 'react';
import { context } from '../contextapi/Context';
import Fetchsuggetion from './Sidebar/suggestion/fetchsuggetion';

const Navright = () => {
  const {
    Theme,
    city,
    setCity,
    getWeather,
    fetchSuggestions,
    setSuggestions,
  } = useContext(context);

  return (
    <div className="relative flex items-center w-full sm:w-[400px] md:w-[500px] lg:w-[550px] mb-3 sm:mb-0">
      <Search
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-opacity duration-200 ${
          city ? "opacity-0" : "opacity-100"
        }`}
        size={22}
        strokeWidth={1.5}
      />

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          fetchSuggestions(e.target.value);  
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getWeather();
            setSuggestions([]); 
          }
        }}
        className={`border-2 border-r-0 rounded-l-full pl-10 pr-4 py-2 w-full outline-none placeholder:text-gray-500 ${
          Theme === "Light"
            ? "text-black bg-white border-gray-300"
            : "text-gray-200 bg-gray-800 border-gray-700"
        }`}
      />
      <button
        onClick={() => {
          getWeather();
          setSuggestions([]);
        }}
        className={`relative pl-10 pr-4 py-2 border-l-0 border-2 rounded-r-full cursor-pointer ${
          Theme === "Light"
            ? "text-black bg-white border-gray-300"
            : "text-gray-200 bg-gray-800 border-gray-700"
        }`}
      >
        <Search size={24} strokeWidth={1.5} />
      </button>

      <div className="absolute left-0 top-[110%] w-full z-50">
        <Fetchsuggetion />
      </div>

    </div>
  );
};

export default Navright;
