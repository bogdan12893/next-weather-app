"use client";
import Image from "next/image";

export default function CurrentWeather({ data }) {
  return (
    <div className="current-weather bg-slate-400 rounded-lg p-4 shadow-lg my-10">
      <div>
        <h2 className="text-2xl font-semibold">{data.city}</h2>
        <p className="text-lg capitalize">{data.weather[0].description}</p>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="flex gap-4">
          <Image
            className="w-24 h-24 object-cover"
            src={`/icons/${data?.weather[0].icon}.png`}
            alt="icon"
            width={100}
            height={100}
          />
          <div className="temperature">
            <h3 className="text-5xl font-semibold">
              {Math.round(data.main.temp)}°C
            </h3>
            <p>Feels like {Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>

        <div className="text-sm text-slate-700">
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
