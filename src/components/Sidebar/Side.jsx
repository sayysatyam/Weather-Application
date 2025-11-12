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
     error
   } = useContext(context);
  return (
    <div
      className={` ${
        isOpen ? "w-[200px]  px-4" : "w-[78px] px-4"
      }  py-8 bg-[#111] ${Theme === "Light" ? "bg-[#707D7D]" : "bg-gray-950"} `}
    >
      <ul className="flex  flex-wrap gap-15 text-[25px]">
        <li
          className={`flex items-center justify-center gap-4 ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : " hover:bg-[#272727] rounded-2xl p-2"
          }  ${Theme === "Light" ? "text-gray-700" : ""}  `}
        >
          <CloudSun size={35} strokeWidth={1.5} />
          {isOpen && <span>Weather</span>}
        </li>
        <li
          className={`flex items-center gap-4  ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          } `}
        >
          <UtilityPole size={35} strokeWidth={1.5} />
          {isOpen && <span>Cities</span>}
        </li>
        <li
          className={`flex items-center gap-4  ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          } `}
        >
          <MapPinned size={35} strokeWidth={1.5} />
          {isOpen && <span>Map</span>}
        </li>
        <li
          className={`flex items-center gap-4  ${
            isOpen
              ? " hover:bg-[#272727] rounded-2xl px-4 py-2"
              : "hover:bg-[#272727] rounded-2xl p-2"
          }  `}
        >
          <Settings size={35} strokeWidth={1.5} />
          {isOpen && <span>Setting</span>}
        </li>
      </ul>
    </div>
  );
};

export default Side;
