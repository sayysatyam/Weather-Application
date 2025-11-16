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
  const [locality, setlocality] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [Aqi, setAqi] = useState(null);
  const [showHighlight, setshowHighlight] = useState("Today's Highlight");
  const [WindSpeed, setWindSpeed] = useState([]);
  const apiKey = "XGHPJVA4GQ35TTK2UBJFFSZVZ";

 const fetchSuggestions = async (value) => {
  if (!value) {
    setSuggestions([]);
    return;
  }

  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=8`;
    const res = await axios.get(url);

   if (res.data && res.data.results) {
      setSuggestions(res.data.results);
    } else {
      setSuggestions([]);
    }
  } catch (error) {
    console.log("Suggestion error:", error);
  }
};
  
const fetchAQI = async (lat, lon) => {
  try {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=us_aqi`;

    console.log("AQI URL:", url);

    const res = await axios.get(url);

    const now = new Date();
    const currentUTC = now.toISOString().slice(0, 13) + ":00";
    const index = res.data.hourly.time.indexOf(currentUTC);

    let currentAQI = null;
    if (index !== -1) {
      currentAQI = res.data.hourly.us_aqi[index];
    } else {
      currentAQI = res.data.hourly.us_aqi[0]; 
    }
    setAqi(currentAQI);
  } catch (err) {
    console.error("AQI Fetch Error:", err);
    setAqi(null);
  }
};

  const getWeather = async () => {
    if (!city) return;
    setError(null);
    setLoading(true);
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
      const res = await axios.get(url);
        setlocality(res.data.resolvedAddress);
        setData(res.data.days.slice(0, 7));
        const currdata = res.data?.days[0];
        const hrdata = currdata?.hours;
        setWindSpeed(hrdata);
       const lat = res.data.latitude;
        const lon = res.data.longitude;
      fetchAQI(lat, lon);
    } catch (err) {
      setError("City not found or API issue");
      setData(null);
      setAutoData(null)
      setAqi(null);
      setWindSpeed([])
    } finally {
      setLoading(false);
    }
  };

  const getAutoWeather = async (detectedCity) => {
    if (!detectedCity) return;
    setError(null);
    setLoading(true);
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${detectedCity}?unitGroup=metric&key=${apiKey}&contentType=json`;
      const res = await axios.get(url);
       setlocality(res.data.resolvedAddress);
      setAutoData(res.data.days.slice(0, 7));
      console.log(res.data)
             const lat = res.data.latitude;
    const lon = res.data.longitude;
      fetchAQI(lat, lon);
      const currdata = res.data?.days[0];
        const hrdata = currdata?.hours;
        setWindSpeed(hrdata);

    } catch (err) {
      setError("City not found or API issue");
      setAutoData(null);
      setData(null);
      setWindSpeed([])
      console.error("Auto weather fetch failed:", err);
    } finally {
      setLoading(false);
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
        locality,
        setlocality,
        suggestions, 
        setSuggestions,
        fetchSuggestions,
        setAqi,
        Aqi,
        showHighlight,
        setshowHighlight,
        WindSpeed,
        setWindSpeed
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Context;
