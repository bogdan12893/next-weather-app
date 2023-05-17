import CurrentWeather from "./CurrentWeather";
import WeatherCard from "./WeatherCard";

export default function Forecast({ data }) {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  console.log(data);
  return (
    <div>
      {data?.list.splice(0, 7).map((item: any, idx: any) => (
        <WeatherCard key={idx} data={item} day={forecastDays[idx]} />
      ))}
    </div>
  );
}
