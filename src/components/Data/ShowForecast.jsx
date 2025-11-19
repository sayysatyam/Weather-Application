import React, { useContext } from 'react'
import { context } from '../../contextapi/Context'
  import rainIcon from "/src/assets/Icons/rain1.png";
import sunIcon from "/src/assets/Icons/sunIcon.png";
import cloudyIcon from "/src/assets/Icons/cloud.png";
import stormIcon from "/src/assets/Icons/storm.png";
import clearNight from "/src/assets/Icons/clearnight.png";
const ShowForecast = () => {
    const {TempHourly} = useContext(context);
     const iconMap = {
        "clear-day": sunIcon,
        "clear-night": clearNight,
        "partly-cloudy-day": cloudyIcon,
        "partly-cloudy-night": cloudyIcon,
        cloudy: cloudyIcon,
        overcast: cloudyIcon,
        rain: cloudyIcon,
        night:clearNight,
        "rain-showers-day": rainIcon,
        "rain-showers-night": rainIcon,
        thunderstorm: stormIcon,
    
      };

  return (
   <>{TempHourly.map((elem, idx) => {
        return (
          <div className='h-50 w-30 flex flex-col items-center justify-between  gap-10 flex-wrap border-r border-[#444444]  'key={idx}>
            <p className='text-[15px] tracking-widest'>{elem.datetime.slice(0, 5)}</p>
            <img
                      className="h-[50px] w-[50px] rounded transition-opacity duration-300"
                      src={iconMap[elem.icon]}
                      alt={elem.conditions}
                    />
            <p id="text" className='text-[25px] tracking-wider font-bold'>{elem.temp}°</p>
            
          </div>
        );
      })}</>
   
  )
}

export default ShowForecast
