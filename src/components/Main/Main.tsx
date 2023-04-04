import { Link } from "react-router-dom";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.bts}>
          <Link to="time" className={classes.Link}>
            <button>Time</button>
          </Link>
          <Link to="weather" className={classes.Link}>
            <button>Wheather</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
