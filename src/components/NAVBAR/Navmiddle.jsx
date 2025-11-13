import React from 'react'
import { Moon, Sun} from "lucide-react";
import { useContext } from 'react';
import { context } from '../../contextapi/Context';
const Navmiddle = () => {
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
   const themeChangeDark = () => setTheme("Dark");
  const themeChangeLight = () => setTheme("Light");
  return (
    <div className="flex items-center gap-4 sm:gap-6 ">
        <div className="flex rounded-full bg-gray-800 p-1">
          <button
            onClick={themeChangeLight}
            className={`p-2 rounded-full ${
              Theme === "Light" ? "bg-[#c9e1ec] text-black" : "text-white"
            }`}
          >
            <Sun size={24} strokeWidth={1.75} />
          </button>
          <button
            onClick={themeChangeDark}
            className={`p-2 rounded-full ${
              Theme === "Dark" ? "bg-[#c9e1ec] text-black" : "text-white"
            }`}
          >
            <Moon size={24} strokeWidth={1.75} />
          </button>
        </div>

        <div className="border-2 border-gray-500 rounded-full p-0.5">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987"
            alt="Profile"
          />
        </div>
      </div>
  )
}

export default Navmiddle
