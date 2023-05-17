"use client";
import { useState } from "react";
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

  const handleOnSearchChange = async (searchData: SearchDataType) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const currentWeatherFetch = await fetch(
        `${process.env.OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
      );
      const forecastFetch = await fetch(
        `${process.env.OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
      );

      const weatherResponse = await currentWeatherFetch.json();
      const forcastResponse = await forecastFetch.json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast(forcastResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container min-h-screen">
      <h1 className="text-center text-3xl font-bold py-10">NEXT Weather App</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <Forecast />
    </main>
  );
}
