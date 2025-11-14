import React from "react";

export default function SunriseSunset({ sunrise, sunset }) {
  const sunX = 50;
  const sunY = 10;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bottom-3">
      
      <svg 
        viewBox="0 0 100 60" 
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-[250px]"
      >
      

        <path
          d="M10 50 A 40 40 0 0 1 90 50"
          stroke="#facc15"
          strokeWidth="2.5"
          strokeDasharray="3 3"
          fill="none"
        />

        <circle 
          cx={sunX} 
          cy={sunY} 
          r="5" 
          fill="#facc15"
        />
      </svg>

      <div className="flex justify-between w-full px-4">
        <div className="text-center relative bottom-5 right-5">
          <p className="text-yellow-400 text-sm">Sunrise</p>
          <p className="text-gray-300 text-sm">{sunrise}</p>
        </div>

        <div className="text-center relative bottom-6 left-5">
          <p className="text-yellow-400 text-sm">Sunset</p>
          <p className="text-gray-300 text-sm">{sunset}</p>
        </div>
      </div>
    </div>
  );
}
