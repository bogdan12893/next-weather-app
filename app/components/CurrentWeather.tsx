"use client";
import Image from "next/image";
import { OpenWeatherCurrent } from "../interfaces/OpenWeatherCurrent.interface";

export default function CurrentWeather({
  name,
  sys,
  weather,
  main,
  wind,
}: OpenWeatherCurrent) {
  return (
    <div className="current-weather bg-lh-pink-1 dark:bg-dk-purple rounded-lg p-4 shadow-lg my-10">
      <div>
        <h2 className="text-2xl font-semibold">
          {name}, {sys.country}
        </h2>
        <p className="text-lg capitalize">{weather[0].description}</p>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="flex gap-4">
          <Image
            className="w-24 h-24 object-cover dark:invert opacity-60"
            src={`/icons/svg/${weather[0].icon}.svg`}
            alt="icon"
            width={100}
            height={100}
          />
          <div className="temperature">
            <h3 className="text-5xl font-semibold">
              {Math.round(main.temp)}°C
            </h3>
            <p>Feels like {Math.round(main.feels_like)}°C</p>
          </div>
        </div>

        <div className="text-sm text-dk-maroon dark:text-dk-peach">
          <p>
            Humidity: <strong>{main.humidity} %</strong>
          </p>
          <p>
            Wind speed: <strong>{wind.speed} m/s</strong>
          </p>
          <p>
            Pressure: <strong>{main.pressure} hPa</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
