import React, { useEffect, useState, useContext } from "react";
import { context } from "../../contextapi/Context";

const reverseGeocode = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await res.json();

    return {
      city:
        data.city ||
        data.locality ||
        data.principalSubdivision ||
        "Unknown City",
      country: data.countryName || "Unknown Country",
    };
  } catch {
    return { city: "Unknown City", country: "Unknown Country" };
  }
};

const AutoLocationPopup = () => {
  const { setAutoCity, setAutoCountry, getAutoWeather } = useContext(context);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            setMessage("📍 Location Granted");
            setTimeout(() => setMessage(null), 1500);
            const { city, country } = await reverseGeocode(latitude, longitude);
            setAutoCity(city);
            setAutoCountry(country);
            localStorage.setItem("user_autoCity", city);
            localStorage.setItem("user_country", country);

            console.log(`🏙️ City detected: ${city}`);
            console.log(`🌍 Country detected: ${country}`);
            getAutoWeather(city);
          },
          (error) => {
            setMessage("🚫 Location Denied");
            setTimeout(() => setMessage(null), 2500);
            console.warn("Location error:", error.message);
          }
        );
      } else {
        setMessage("⚠️ Geolocation not supported");
        setTimeout(() => setMessage(null), 1500);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return message ? (
    <div className="fixed top-[50%] left-[40%] bg-[#272727] text-[#d6d4d4] rounded px-4 py-2 shadow-lg text-sm z-50 animate-fade">
      {message}
    </div>
  ) : null;
};

export default AutoLocationPopup;
