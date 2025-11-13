import React  from 'react'
import ShowAqi from './ShowAqi';
import ShowSunsetSunrise from './ShowSunsetSunrise';
const TodayHighlight = () => {
  return (
    <div>
      <p>Today's Highlight</p>
              <div className='flex justify-evenly gap-5 p-2 flex-wrap w-auto'>
                <div className={` bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 w-[300px] h-[250px]`}>Wind Status</div>
             <ShowSunsetSunrise/>
             <ShowAqi/>
              </div>
    </div>
  )
}

export default TodayHighlight
