import React, { useContext } from 'react'
import { context } from '../../contextapi/Context';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const WindChart = () => {
  const { WindSpeed } = useContext(context);

  if (!WindSpeed || WindSpeed.length === 0) return (
    <p className="text-[25px] flex justify-center items-center relative top-25 text-[#aaaa] tracking-widest ">Loading....</p>
  )

  const windData = WindSpeed.map((elem) => ({
    time: elem.datetime.slice(0, 5),
    speed: elem.windspeed,
  }));
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/20 backdrop-blur-md border border-white/20 p-2 rounded-lg shadow-md text-white text-sm">
        <p className="font-semibold">Time: {label}</p>
        <p>Wind: {payload[0].value} km/h</p>
      </div>
    );
  }
  return null;
};

  return (
    <div id="windscroll" className="w-full overflow-x-auto ">
      <div className="min-w-[1250px] w-[300px] h-[200px] relative right-10">
        <ResponsiveContainer width="100%" height="100%">
  <LineChart data={windData}>
    
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <CartesianGrid strokeDasharray="2 2" />
    <XAxis dataKey="time" interval={0} tick={{ fontSize: 10 }} />
    <YAxis tick={{ fontSize: 10 }} />
    <Tooltip content={<CustomTooltip />} />

    <Line
      type="monotone"
      dataKey="speed"
      stroke="#4f46e5"
      strokeWidth={2.5}
      dot={false}
      filter="url(#glow)"
    />

  </LineChart>
</ResponsiveContainer>
      </div>
    </div>
  );
}

export default WindChart;
