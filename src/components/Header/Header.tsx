import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <Link to="/" className={classes.Link}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1616/1616535.png"
                alt=""
              />
            </Link>
            <Link to="/" className={classes.Link}>
              <p>TimeWeather</p>
            </Link>
          </div>
          <div className={classes.nav}>
            <Link to="time" className={classes.Link}>
              <p>Time</p>
            </Link>
            <Link to="weather" className={classes.Link}>
              <p>Weather</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
