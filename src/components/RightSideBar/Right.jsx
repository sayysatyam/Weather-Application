import React from 'react'
import Humidity from './humidity'
import Pressure from './pressure'
import Visibility from './visibility'

const Right = () => {
  return (
    <div className=' w-[20%] text-white flex  flex-wrap gap-12 p-5 max-md:flex max-md:flex-col max-md:gap-4'>
      <Humidity/>
       <Pressure/>
       <Visibility/>
    </div>
  )
}

export default Right
