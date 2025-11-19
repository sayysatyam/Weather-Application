import React from 'react'
import ShowForecast from './ShowForecast'

const HourlyForecast = () => {
  return (
    <div id="forecastscroll" className='flex flex-wrap flex-col  gap-5 justify-around w-full h-full overflow-x-auto '>
      <ShowForecast/>
    </div>
  )
}

export default HourlyForecast
