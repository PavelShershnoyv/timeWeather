import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Error from "../Error/Error";
import { cityAction } from "../../redux/city.slice";
import Data from "../Data/Data";
import classes from "./Weather.module.scss";
import { keyboardKey } from "@testing-library/user-event";

const Weather = () => {
  const value = useRef<string>("");
  const city = useRef<string>("");
  const [error, setError] = useState<boolean>(false);
  const weatherData = useDispatch();
  let displayData: JSX.Element = <></>;

  const translateAPI = async (text: string) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=ru&tl=en&q=${text}`;

    let response: Response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      let answer = await response.json();
      city.current = answer[0][0][0];
    }
  };

  const handler = async () => {
    if (value.current === "" && !error) {
      setError(true);
    } else {
      await translateAPI(value.current);
      const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city.current}&aqi=no`;
      let response: Response = await fetch(url);
      if (response.status >= 200 && response.status < 300) {
        let answer = await response.json();
        weatherData(cityAction.addItem(answer));
        if (error) {
          setError(false);
        }
      } else if (!error) {
        setError(true);
      }
    }
  };

  if (error) {
    displayData = <Error />;
  } else {
    displayData = <Data />;
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Введите название города..."
              onChange={(event) => (value.current = event.target.value)}
              onKeyDown={(e: keyboardKey) => {
                if (e.keyCode === 13) {
                  handler();
                }
              }}
            />
            <button onClick={handler}>Показать погоду</button>
          </div>
          <div>{displayData}</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
