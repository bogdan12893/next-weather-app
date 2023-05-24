import WeatherCard from "./WeatherCard";
import { OpenWeatherForecast } from "../interfaces/OpenWeatherForecast.interface";
import { WEEK_DAYS } from "../utils/weekdays";

export default function Forecast({ list }: OpenWeatherForecast) {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div>
      {list.splice(0, 7).map((item: any, idx: any) => (
        <WeatherCard key={idx} dayCast={item} weekDay={forecastDays[idx]} />
      ))}
    </div>
  );
}
