import React, { useContext } from 'react'
import { context } from '../../contextapi/Context';

const Head3 = () => {
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
      const todaysdata = ()=>{
          setshowHighlight("Today's Highlight")
        }
        const statics = ()=>{
          setshowHighlight("Statics")
        }
  return (
    <div className={`w-full h-fit flex justify-between px-6 `}>
      <button onClick={todaysdata} className='w-fit px-6 py-2 bg-[#7d878c] text-[#dadada] rounded-full mb-5 cursor-pointer'>Today's Highlights</button>
      <button onClick={statics} className='w-fit px-6 py-2 bg-[#7d878c] text-[#dadada] rounded-full mb-5 cursor-pointer'>Hourly Forecast</button>
    </div>
  )
}

export default Head3
