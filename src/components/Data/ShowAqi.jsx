import React, { useContext } from "react";
import { context } from "../../contextapi/Context";
import AQIGauge from "../Chart/AQIchart";

const ShowAqi = () => {
  const { Aqi } = useContext(context);
  return (
    <div
      className={` bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 w-[300px] h-[250px] flex flex-col`}
    >
      <h2 className="text-[30px] tracking-widest">AQI INDEX</h2>
      <div className="">
        {" "}
        <AQIGauge value={Aqi} />
      </div>
    </div>
  );
};

export default ShowAqi;
