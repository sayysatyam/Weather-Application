import React, { useContext } from 'react';
import { context } from '../../contextapi/Context';
import SunriseSunset from '../Chart/Sunset&rise';

const ShowSunsetSunrise = () => {

  const { data, autoData } = useContext(context);

  const today = data?.[0] || autoData?.[0];


  return (
    <div className=" bg-white/5 
  border border-white/5 rounded-2xl 
  py-2 px-6 w-[300px] h-[250px] shadow-lg">
  
  <h2 className="text-[22px] tracking-widest">SUNRISE & SUNSET</h2>

  {!today ? <p className="text-[25px] flex justify-center items-center relative top-28 text-[#aaaa] tracking-widest ">Loading....</p>:<SunriseSunset sunrise={today.sunrise} sunset={today.sunset} />}
</div>
  );
};

export default ShowSunsetSunrise;
