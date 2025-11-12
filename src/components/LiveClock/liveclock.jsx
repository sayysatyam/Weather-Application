import React, { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
      <h2 id="digital"
        key={time} 
        className="text-[30px] font-semibold text-[#111]  "
      >
         {time}
      </h2>
  );
};

export default LiveClock;
