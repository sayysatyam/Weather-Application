import React, { useContext } from 'react'
import { context } from '../../contextapi/Context'
import AQIGauge from '../Chart/AQIchart';
import TodayHighlight from '../Data/TodayHighlight';
import HourlyForecast from '../Data/HourlyForecast';
const Head4 = () => {
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
      locality,
      setlocality,
      setAqi,
      Aqi,
      fetchAQI,
      showHighlight,
        setshowHighlight
    } = useContext(context);
  return (
    <div className={`bg-white/5 backdrop-blur-3xl border border-white/10 w-full h-80 rounded-2xl py-2 px-4 overflow-x-auto`}>
        {showHighlight === "Today's Highlight" ? <TodayHighlight/> : <HourlyForecast/>}
    </div>
    
  )
}

export default Head4;
