import React, { useState } from "react";

const Head = () => {
  const [Forecast, setForecast] = useState("Forecast");
  const changeForecast = () => {
    setForecast("Forecast");
  };
  const changeAir = () => {
    setForecast("Air");
  };
  return (
    <div
      className={`flex justify-between items-center px-10  w-full h-fit py-6 flex-wrap `}
    >
      <div className={` flex gap-5`}>
        <button
          className={`text-[#8b8b8b] cursor-pointer hover:bg-[#272727] px-5 py-1 rounded-full`}
        >
          Today
        </button>
        <button
          className={`text-[#8b8b8b] cursor-pointer hover:bg-[#272727] px-3 py-2 rounded-full`}
        >
          Tommorow
        </button>
        <button className="text-[16px] hover:bg-[#272727] px-5 py-2 rounded-full cursor-pointer">
          Next 7 days
        </button>
      </div>
      <div className="flex gap-2 font-medium">
        <button
          className={`px-6 py-2 rounded-full cursor-pointer ${
            Forecast === "Forecast"
              ? "bg-[#8ECAE6] text-[#111]"
              : "bg-[#272727] text-[#8b8b8b]"
          }`}
          onClick={changeForecast}
        >
          Forecast
        </button>
        <button
          className={`px-6 py-2 rounded-full cursor-pointer bg-[#8ECAE6] ${
            Forecast === "Air"
              ? "bg-[#8ECAE6] text-[#111]"
              : "bg-[#272727] text-[#8b8b8b]"
          }`}
          onClick={changeAir}
        >
          Air quality
        </button>
      </div>
    </div>
  );
};

export default Head;
