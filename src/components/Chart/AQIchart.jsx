import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from "recharts";
const AQIGauge = ({ value }) => {

  const data = [
    {
      name: "AQI",
      value: value,
      fill:
        value <= 50 ? "#4CAF50" :         
        value <= 100 ? "#6227E0" : 
        value<=150 ? "#27E087" :       
        value <= 200 ? "#27B4E0" :       
        value <= 300 ? "#D03F3F" :       
        "#9C27B0"                         
    }
  ];
  
  const category =
    value <= 50 ? "Good" :
    value <= 100 ? "Moderate" :
    value <= 150 ? "Satisfactory" :
    value <= 200 ? "Unhealthy" :
    value <= 300 ? "Very Unhealthy" :
    "Hazardous";

  return (
    <div className="flex flex-col items-center relative top-5">
      <RadialBarChart
        width={300}
        height={150}
        cx={150}
        cy={140}
        innerRadius="170%"
        outerRadius="190%"
        startAngle={180}
        endAngle={0}
        data={data}
      >
         <defs>
    <filter id="glow" x="-70%" y="-70%" width="240%" height="240%">
  <feGaussianBlur stdDeviation="10" result="blur" />
  <feMerge>
    <feMergeNode in="blur" />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>
  </defs>
        <PolarAngleAxis
          type="number"
          domain={[0, 400]}
          angleAxisId={0}
          tickSize={1}
        tick={{ fontSize: 7 }} 
        />

        <RadialBar
          background
          dataKey="value"
          cornerRadius={5}
          filter="url(#glow)"
        />
      </RadialBarChart>

      {!value ? <p className="text-[25px] flex justify-center items-center relative bottom-15 text-[#aaaa] tracking-widest ">Loading....</p>: <p className="text-2xl font-bold relative bottom-15 flex items-center justify-center flex-col flex-wrap tracking-widest ">{value}
        <span className="text-[10px] font-medium text-[#dadada] tracking-normal">AQI</span>
         </p>}
         {!value ?'':<p className="text-xs text-[#bfbfbf] relative bottom-12 tracking-wider">{category}</p>}
    </div>
  );
};

export default AQIGauge;
