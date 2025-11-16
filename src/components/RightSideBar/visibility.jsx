import React, { useContext } from 'react'
import { context } from '../../contextapi/Context'
const Visibility = () => {
     const {data,autoData} = useContext(context);
        const real = data && data.length>0 ? data : autoData;
  return (
    <div className={`h-50 w-60 bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 text-[#111] flex flex-col flex-wrap justify-between`}>
                <img className='h-[30px] w-[30px]' src="https://cdn-icons-png.freepik.com/512/5533/5533557.png?uid=R221851525&ga=GA1.1.1419069458.1762777228" alt="" />
                <h1 id="text" className='text-[50px] text-pink-600'>{real?.[0]?.visibility ?? <p className='text-[#dadada]'>N/A</p>}</h1>
      <h2 className='text-[20px] text-[#dadada]'>Visibility</h2>
      
    </div>
  )
}

export default Visibility
