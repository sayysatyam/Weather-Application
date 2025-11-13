import React, { useContext, useEffect } from 'react'
import { SquareMenu, Bell, MapPin } from "lucide-react";
import { context } from '../contextapi/Context';
const NavLeft = () => {
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
     autoCity,
     autoCountry
   } = useContext(context);
  return (
    <div className="flex items-center flex-wrap gap-3 sm:gap-5 mb-3 sm:mb-0">
        <div className="bg-gray-700 rounded-full p-2 text-white flex ">
         <button className='cursor-pointer' onClick={()=>{
          setisOpen(!isOpen)
         }}><SquareMenu size={25} strokeWidth={1.75} /></button>
        </div>
        <div className="bg-gray-700 rounded-full p-2 text-white">
          <Bell size={25} strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={22} strokeWidth={1.75} />
          <h4 className="text-sm sm:text-base flex flex-wrap gap-1 items-center ">
            {autoCity} {autoCountry && (<span>,</span>)}
            <span className="text-gray-400 text-xs sm:text-sm relative top-px">{autoCountry}</span>
          </h4>
        </div>
      </div>
  )
}

export default NavLeft
