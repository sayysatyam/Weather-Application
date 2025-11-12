import { useContext } from "react";
import NavLeft from "./NavLeft";
import Navright from "./Navright";
import { context } from "../contextapi/Context";
import Navmiddle from "./Navmiddle";


const Navbar = () => {
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
      error
    } = useContext(context);

  return (
    <div
      className={`flex flex-wrap justify-between items-center px-4 py-2 w-full ${
        Theme === "Light" ? "bg-[#707D7D] text-black" : "bg-gray-900 text-white"
      } `}
    >
      <NavLeft/>
      <Navright/>
      <Navmiddle/>
       
      
    </div>
  );
};

export default Navbar;
