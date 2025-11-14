import React from "react";
import { useContext } from "react";
import Navbar from "./components/NAVBAR/Navbar";
import { context } from "./contextapi/Context";
import Center from "./components/Center/Center";
import Right from "./components/RightSideBar/Right";
import AutoLocation from "./components/location/location";
import Side from "./components/LeftSideBar/LeftSide";
import ShowWindData from "./components/Data/ShowWindData";

const App = () => {
  const {
    Theme,
    setTheme,
    isOpen,
    setisOpen,
    city,
    setCity,
    data,
    getWeather,
    loading,
    error,
  } = useContext(context);
  return (
    <div
      className={`h-screen w-screen ${Theme} ${
        Theme === "Light" ? "bg-[#DFE4E8]" : "bg-gray-950 "
      } overflow-auto`}
    >
      <AutoLocation />
      <Navbar />
      <div className="flex w-screen h-full ">
        <Side/>
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default App;
