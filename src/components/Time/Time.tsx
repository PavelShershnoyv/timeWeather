import { useEffect, useRef, useState } from "react";
import classes from "./Time.module.scss";

const Time = () => {
  const [day, setDay] = useState<number>(Date.now());

  useEffect(() => {
    setTimeout(() => {
      setDay(day + 1000);
    }, 1000);
  }, [day]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.time}>
          <p>{new Date(day).toLocaleTimeString()}</p>
        </div>
      </div>
    </>
  );
};

export default Time;
