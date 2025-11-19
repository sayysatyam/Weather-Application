import { CloudSun, MapPinned, Settings, UtilityPole } from "lucide-react";
import React, { useContext } from "react";
import { context } from "../../contextapi/Context";

const Side = () => {
  const { Theme, isOpen } = useContext(context);

  return (
    <>
      <div
        className={`
          hidden md:block
          ${isOpen ? "w-[110px]" : "w-[70px]"}
          py-8 px-1 h-full
          ${Theme === "Light" ? "bg-[#707D7D]" : "bg-gray-950"}
          transition-all duration-300
        `}
      >
        <ul className="flex flex-col gap-6 text-[25px]">
          <li
            className={`flex items-center flex-col gap-2 hover:bg-[#272727] rounded-2xl ${
              isOpen ? "px-4 py-2" : "p-2"
            }`}
          >
            <CloudSun size={35} strokeWidth={1.5} />
            {isOpen && (
              <span className="text-[13px] md:text-[15px]">Weather</span>
            )}
          </li>

          <li
            className={`flex items-center flex-col gap-2 hover:bg-[#272727] rounded-2xl ${
              isOpen ? "px-4 py-2" : "p-2"
            }`}
          >
            <UtilityPole size={35} strokeWidth={1.5} />
            {isOpen && (
              <span className="text-[13px] md:text-[15px]">Cities</span>
            )}
          </li>

          <li
            className={`flex items-center flex-col gap-2 hover:bg-[#272727] rounded-2xl ${
              isOpen ? "px-4 py-2" : "p-2"
            }`}
          >
            <MapPinned size={35} strokeWidth={1.5} />
            {isOpen && <span className="text-[13px] md:text-[15px]">Map</span>}
          </li>

          <li
            className={`flex items-center flex-col gap-2 hover:bg-[#272727] rounded-2xl ${
              isOpen ? "px-4 py-2" : "p-2"
            }`}
          >
            <Settings size={35} strokeWidth={1.5} />
            {isOpen && (
              <span className="text-[13px] md:text-[15px]">Setting</span>
            )}
          </li>
        </ul>
      </div>

      <div
        className={`
          md:hidden fixed bottom-0 left-0 w-full z-50
          backdrop-blur-xl bg-white/10 
          ${Theme === "Light" ? "bg-white/20" : "bg-black/20"}
          border-t border-white/10
          py-3 flex justify-around items-center rounded-t-3xl
           shadow-[0_-4px_20px_rgba(0,0,0,0.4)]
        `}
      >
        <button className="active:scale-75 transition-transform duration-150">
          <CloudSun size={28} strokeWidth={1.5} />
        </button>

        <button className="active:scale-75 transition-transform duration-150">
          <UtilityPole size={28} strokeWidth={1.5} />
        </button>

        <button className="active:scale-75 transition-transform duration-150">
          <MapPinned size={28} strokeWidth={1.5} />
        </button>

        <button className="active:scale-75 transition-transform duration-150">
          <Settings size={28} strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
};

export default Side;
