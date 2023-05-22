"use client";
import Image from "next/image";

export default function WeatherCard({ data, day }) {
  return (
    <div className="current-weather bg-lh-pink dark:bg-dk-maroon rounded-lg p-4 shadow-lg my-5">
      <div className="flex gap-4 justify-between flex-wrap items-center">
        <Image
          className="w-20 h-20 object-cover dark:invert opacity-60"
          src={`/icons/svg/${data.weather[0].icon}.svg`}
          alt="icon"
          width={100}
          height={100}
        />
        <div className="temperature">
          <h3 className="text-3xl font-semibold">
            {Math.round(data.main.temp)}°C
          </h3>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{day}</h2>
          <p className="text-lg capitalize">{data.weather[0].description}</p>
        </div>

        <div className="text-sm text-dk-maroon dark:text-lh-cream">
          <p>
            Humidity: <strong>{data.main.humidity} %</strong>
          </p>
          <p>
            Wind speed: <strong>{data.wind.speed} m/s</strong>
          </p>
          <p>
            Pressure: <strong>{data.main.pressure} hPa</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
