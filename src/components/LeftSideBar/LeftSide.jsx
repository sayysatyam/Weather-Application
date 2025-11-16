import { CloudSun, MapPinned, Settings, UtilityPole } from "lucide-react";
import React, { useContext } from "react";
import { context } from "../../contextapi/Context";

const Side = () => {
  const {
    Theme,
    setTheme,
    isOpen,
    setisOpen,
    city,
    setCity,
    data,
    getWeather,
    loading,
    error,
  } = useContext(context);
  return (
    <div
      className={` ${
        isOpen ? "w-[100px]  px-1" : "w-[78px] px-1"
      }  py-8 bg-[#111] ${Theme === "Light" ? "bg-[#707D7D]" : "bg-gray-950"} `}
    >
      <ul className="flex  flex-wrap gap-15 text-[25px]">
        <li
          className={`flex items-center justify-start flex-col gap-2 ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : " hover:bg-[#272727] rounded-2xl p-2"
          } `}
        >
          <CloudSun className={isOpen ? "relative right-1" : ""} size={35} strokeWidth={1.5} />
          {isOpen && <span className="text-[15px]">Weather</span>}
        </li>
        <li
          className={`flex items-center justify-start  gap-2 flex-col  ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          } `}
        >
          <UtilityPole size={35} strokeWidth={1.5} />
          {isOpen && <span className="text-[15px]">Cities</span>}
        </li>
        <li
          className={`flex items-center justify-start gap-2 flex-col ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          } `}
        >
          <MapPinned size={35} strokeWidth={1.5} />
          {isOpen && <span className="text-[15px]">Map</span>}
        </li>
        <li
          className={`flex items-center justify-start gap-2 flex-col  ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-2 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          }  `}
        >
          <Settings size={35} strokeWidth={1.5} />
          {isOpen && <span className="text-[15px]">Setting</span>}
        </li>
      </ul>
    </div>
  );
};

export default Side;
