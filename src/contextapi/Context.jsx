import axios from "axios";
import React, { useState, createContext } from "react";

export const context = createContext();

const Context = (props) => {
  const [Theme, setTheme] = useState("Dark");
  const [isOpen, setisOpen] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [autoCity, setAutoCity] = useState("");
  const [autoCountry, setAutoCountry] = useState("");
  const [autoData, setAutoData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "XGHPJVA4GQ35TTK2UBJFFSZVZ";
  const getWeather = async () => {
    if (!city) return;
    setError(null);
    setLoading(true);
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
      const res = await axios.get(url);
      console.log("🔍 Manual Data:", res.data);
      setData(res.data.days.slice(0, 7));
    } catch (err) {
      setError("City not found or API issue");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const getAutoWeather = async (detectedCity) => {
    if (!detectedCity) return;
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${detectedCity}?unitGroup=metric&key=${apiKey}&contentType=json`;
      const res = await axios.get(url);
      console.log("📍 Auto Data:", res.data);
      setAutoData(res.data.days.slice(0, 7));
    } catch (err) {
      console.error("Auto weather fetch failed:", err);
    }
  };

  return (
    <context.Provider
      value={{
        Theme,
        setTheme,
        isOpen,
        setisOpen,
        city,
        setCity,
        data,
        setData,
        getWeather,
        autoCity,
        setAutoCity,
        autoCountry,
        setAutoCountry,
        autoData,
        setAutoData,
        getAutoWeather,
        loading,
        error,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Context;
