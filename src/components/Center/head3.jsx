import React, { useContext } from "react";
import { context } from "../../contextapi/Context";

const Head3 = () => {
  const { setshowHighlight } = useContext(context);

  const todaysdata = () => {
    setshowHighlight("Today's Highlight");
  };

  const statics = () => {
    setshowHighlight("Statics");
  };

  return (
    <div
      className="
        w-full h-fit 
        flex 
        justify-between 
        px-6
        max-md:flex
        max-md:mb-3
        max-md:gap-3
        max-md:px-2
      "
    >
      <button
        onClick={todaysdata}
        className="
          w-[30%] 
          px-6 py-2 
          bg-[#7d878c] 
          text-[#dadada] 
          rounded-full 
          mb-5 
          cursor-pointer
          max-md:w-full 
          max-md:py-2
          max-md:px-4
          max-md:text-sm
          max-md:mb-0
        "
      >
        Today's Highlights
      </button>

      <button
        onClick={statics}
        className="
          w-[30%] 
          px-6 py-2 
          bg-[#7d878c] 
          text-[#dadada] 
          rounded-full 
          mb-5 
          cursor-pointer

          max-md:px-4
          max-md:w-full 
          max-md:py-3
          max-md:text-sm
          max-md:mb-0
        "
      >
        Hourly Forecast
      </button>
    </div>
  );
};

export default Head3;
