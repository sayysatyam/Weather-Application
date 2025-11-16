import React, { useContext } from "react";
import { context } from "../../contextapi/Context";
import AQIGauge from "../Chart/AQIchart";

const ShowAqi = () => {
  const { Aqi } = useContext(context);
  return (
    <div id="aqi"
      className={` bg-white/5 
            backdrop-blur-0 
            border border-white/5 
            rounded-2xl 
            py-2 px-6
            shadow-lg 
            shadow-black/20 w-[300px] h-[250px] flex flex-col relative
            after:content-['']
after:absolute
after:top-0 after:left-0
after:w-full after:h-full
after:rounded-2xl
after:bg-linear-to-bl after:from-blue-600/10 after:via-blue-500/40
after:pointer-events-none
after:border-none
after:z-0

            `}
    >
      <h2 className="text-[25px] tracking-widest">AQI INDEX</h2>
      <div className="">
        {" "}
        <AQIGauge value={Aqi} />
      </div>
    </div>
  );
};

export default ShowAqi;
