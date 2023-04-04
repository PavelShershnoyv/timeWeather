import { useSelector } from "react-redux";
import { IWeatherAPI } from "../../interfaces/IWeatherAPI";
import classes from "./Data.module.scss";

const Data = () => {
  const weatherData: IWeatherAPI = useSelector((state: any) => state.city);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div>
            <p>Температура</p>
            <p>{weatherData.current.temp_c}°C</p>
          </div>
          <div>
            <p>Давление</p>
            <p>
              {(weatherData.current.pressure_mb * 0.750063755419211).toFixed()}{" "}
              мм рт. ст.
            </p>
          </div>
          <div>
            <p>Ощущается как</p>
            <p>{weatherData.current.feelslike_c}°C</p>
          </div>
          <div>
            <p>Влажность</p>
            <p>{weatherData.current.humidity}%</p>
          </div>
          <div>
            <p>УФ-индекс</p>
            <p>{weatherData.current.uv}</p>
          </div>
          <div>
            <p>Скорость ветра</p>
            <p>{((weatherData.current.wind_kph * 5) / 18).toFixed(1)} м/с</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
