import React, { useContext } from 'react'
import { context } from '../../contextapi/Context'

const Humidity = () => {
    const {data,autoData} = useContext(context);
    const humid = data && data.length>0 ? data :autoData;
    console.log(humid);
  return (
    <div className={`h-50 w-60  text-[#111] bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 flex flex-col flex-wrap justify-between`}>
                <img className='h-[30px] w-[30px]' src="https://cdn-icons-png.freepik.com/512/9290/9290540.png" alt="" />
                <h1 id="text" className='text-[50px] text-pink-600'>{humid?.[0]?.humidity ?? <p className='text-[#dadada]'>N/A</p>}{humid ? "%" : " "}</h1>
       <h2 className='text-[20px] text-[#dadada]'>
                Humidity
            </h2>
            
    </div>
  )
}

export default Humidity
