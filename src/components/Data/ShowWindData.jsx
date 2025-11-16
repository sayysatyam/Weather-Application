import React, { useContext } from 'react'
import { context } from '../../contextapi/Context';
import WindChart from '../Chart/Windchart';
const ShowWindData = () => {
  return (
    <div>
       <div className={` bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl  
            shadow-lg 
            shadow-black/20 w-[300px] h-[250px] relative
            after:content-['']
after:absolute
after:top-0 after:left-0
after:w-full after:h-full
after:rounded-2xl
after:bg-linear-to-bl after:from-green-400/25 after:via-green-700/10
after:pointer-events-none
after:border-none
after:z-0`}>
                  <h2 className="text-[25px] tracking-widest px-6 py-2">WIND SPEED</h2>
                  <WindChart/>
            </div>
    </div>
  )
}

export default ShowWindData

