import React  from 'react'
import ShowAqi from './ShowAqi';
import ShowSunsetSunrise from './ShowSunsetSunrise';
import ShowWindData from './ShowWindData';
const TodayHighlight = () => {
  return (
    <div>
      <p>Today's Highlight</p>
              <div className='flex justify-evenly gap-5 p-2 flex-wrap w-auto'>
                <ShowWindData/>
             <ShowSunsetSunrise/>
             <ShowAqi/>
              </div>
    </div>
  )
}

export default TodayHighlight
