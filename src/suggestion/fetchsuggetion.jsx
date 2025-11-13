import React, { useContext } from "react";
import { context } from "../contextapi/Context";

const Fetchsuggetion = () => {
  const { city, setCity, suggestions, setSuggestions, getWeather } =
    useContext(context);
  return (
    <div>
      {suggestions.length > 0 && (
        <ul
          id="suggestion"
          className="bg-[rgba(125,135,140,0.7)]
 shadow-md rounded-2xl w-full max-h-60 overflow-auto mt-1 absolute z-50 text-[#dadada]"
        >
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setCity(item.name);
                getWeather();
                setSuggestions([]);
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              {item.name}, {item.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetchsuggetion;
