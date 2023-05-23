"use client";

import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import Forecast from "./components/Forecast";

type SearchDataType = {
  value: string;
  label: string;
};

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [locationError, setLocatioNError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = async (searchData: SearchDataType) => {
    const [lat, lon] = searchData.value.split(" ");
    setLoading(true);
    try {
      const currentWeatherFetch = await fetch(
        `${process.env.OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
      );
      const forecastFetch = await fetch(
        `${process.env.OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
      );

      const weatherResponse = await currentWeatherFetch.json();
      const forcastResponse = await forecastFetch.json();

      setCurrentWeather(weatherResponse);
      setForecast(forcastResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const success = async (position: any) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setLoading(true);

      try {
        const currentWeatherFetch = await fetch(
          `${process.env.OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
        );
        const forecastFetch = await fetch(
          `${process.env.OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
        );

        const weatherResponse = await currentWeatherFetch.json();
        const forcastResponse = await forecastFetch.json();

        setCurrentWeather(weatherResponse);
        setForecast(forcastResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const error = () => {
      setLocatioNError("Unable to retrieve your location");
    };

    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        setLocatioNError("Geolocation not supported");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <main className="container min-h-screen">
        <Search onSearchChange={handleOnSearchChange} />
        {!currentWeather && locationError && (
          <p className="text-center p-3">{locationError}</p>
        )}

        {loading ? (
          <p className="text-center p-3">Loading...</p>
        ) : (
          <div>
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
          </div>
        )}
      </main>
    </div>
  );
}
