import React, { useContext, useState } from "react";
import { context } from "../../contextapi/Context";

import rainIcon from "/src/assets/Icons/rain1.png";
import sunIcon from "/src/assets/Icons/sunIcon.png";
import cloudyIcon from "/src/assets/Icons/cloud.png";
import stormIcon from "/src/assets/Icons/storm.png";
import LiveClock from "../LiveClock/liveclock";

const Head2 = () => {
  const iconMap = {
    "clear-day": sunIcon,
    "clear-night": sunIcon,
    "partly-cloudy-day": cloudyIcon,
    "partly-cloudy-night": cloudyIcon,
    cloudy: cloudyIcon,
    overcast: cloudyIcon,
    rain: rainIcon,
    "rain-showers-day": rainIcon,
    "rain-showers-night": rainIcon,
    thunderstorm: stormIcon,
  };

  const {
    Theme,
    setTheme,
    isOpen,
    setisOpen,
    city,
    data,
    autoData, 
    autoCity,
    autoCountry,
    loading,
    error,
  } = useContext(context);

  const [hoveridx, setHoveridx] = useState(null);
  const idxtoday = 0;

  const displayData = data && data.length > 0 ? data : autoData;
  const displayCountry = data && data.length > 0 ? "" : autoCountry;

  if (!displayData || displayData.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Search for a city or allow location 🌦️
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-around flex-wrap overflow-auto p-5 gap-4">
        {displayData.map((day, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveridx(idx)}
            onMouseLeave={() => setHoveridx(null)}
            className={`relative text-white rounded-3xl shadow-lg transition-all duration-500 ease-in-out overflow-hidden
            ${
              hoveridx === idx || (hoveridx === null && idx === idxtoday)
                ? "w-[280px] h-[250px] px-4 py-2 bg-[#7d878c]"
                : "w-[100px] h-[220px] px-4 py-2 bg-[#272727]"
            }
            flex flex-col justify-between items-center font-[Poppins]`}
          >
            {hoveridx === idx || (hoveridx === null && idx === idxtoday) ? (
              <>
                <div className="w-full flex gap-2 flex-col">
                  <div className="flex justify-evenly items-center border-b border-[#8b8b8b] gap-4">
                    <h1 id="day" className="text-[18px] text-[#111] font-semibold">
                      {new Date(day.datetime).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </h1>
                    <div id="digital">
                      <LiveClock/>
                    </div>
                    <p id="date" className="text-[14px] text-[#111] font-bold">
                      {day.datetime}
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-10">
                    <h2 id="temp" className="text-[35px] text-[#111]">{day.temp}°C</h2>
                    <img
                      className="h-[60px] w-[60px] rounded transition-opacity duration-300"
                      src={iconMap[day.icon] || sunIcon}
                      alt={day.conditions}
                    />
                  </div>

                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col">
                      <p  className="text-[12px] text-[#dadada] gap-1 flex items-center">
                        Feels Like:
                        <span id="data" className="font-bold text-[#111] text-[16px] ">
                          {day.feelslike}°C
                        </span>
                      </p>
                      <p className="text-[12px] text-[#dadada] gap-1 flex items-center">
                        Humidity:
                        <span id="data" className="font-bold text-[#111] text-[16px]">
                          {day.humidity}%
                        </span>
                      </p>
                      <p className="text-[12px] text-[#dadada] gap-1 flex items-center">
                        Visibility:
                        <span id="data" className="font-bold text-[#111] text-[16px]">
                          {day.visibility} km
                        </span>
                      </p>
                      <p className="text-[10px] text-[#dadada] gap-1 flex items-center">
                        Sunrise:
                        <span id="data" className="font-bold text-[#111] text-[16px]">
                          {day.sunrise}
                        </span>
                      </p>
                      <p className="text-[10px] text-[#dadada] gap-1 flex items-center">
                        Sunset:
                        <span id="data" className="font-bold text-[#111] text-[16px]">
                          {day.sunset}
                        </span>
                      </p>
                    </div>

                    <div>
                      <ul>
                        <li className="font-bold text-[#dadada] flex items-center flex-col flex-wrap ">
                          Wind :
                          <ul>
                            <li className="text-[10px] text-[#dadada] gap-1 flex items-center">
                              Speed:
                              <span id="data" className="font-bold text-[#111] text-[14px]">
                                {day.windspeed} km/h
                              </span>
                            </li>
                            <li className="text-[10px] text-[#dadada] gap-1 flex items-center">
                              Direction:
                              <span id="data" className="font-bold text-[#111] text-[14px]">
                                {day.winddir}°
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-b border-[#8b8b8b] py-2 px-5">
                  <h2 id="day" className="text-2xl font-bold">
                    {new Date(day.datetime).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </h2>
                </div>
                <div>
                  <img
                    src={iconMap[day.icon] || sunIcon}
                    alt={day.conditions}
                    className="h-[60px] w-[60px] transition-transform duration-300"
                  />
                </div>
                <div>
                  <h1 id="temp" className="text-[30px] font-bold">{day.tempmax}°</h1>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Head2;
