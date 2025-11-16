import React, { useContext } from 'react'
import { context } from '../../contextapi/Context'

const Pressure = () => {
    const {data,autoData} = useContext(context);
    const real = data && data.length>0 ? data : autoData;
  return (
    <div className={`h-50 w-60 bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 flex flex-col justify-between flex-wrap `}>
        <img className='h-[30px] w-[30px]' src="https://cdn-icons-png.freepik.com/512/9290/9290566.png?uid=R221851525&ga=GA1.1.1419069458.1762777228" alt="" />
        <h1 id="text" className='text-[50px] text-pink-600'>{real?.[0]?.pressure ?? <p className='text-[#dadada]'>N/A</p>}{real ? <span className='text-[14px] px-1'>mb</span>: ''}</h1>
      <h2 className='text-[20px] text-[#dadada]'>Pressure </h2>
      
    </div>
  ) 
}

export default Pressure
