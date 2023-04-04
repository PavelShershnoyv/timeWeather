import classes from "./Error.module.scss";

const Error = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <p>
            Погода в данном городе не найдена. Проверьте название города,
            введенного вами
          </p>
          <div>
            <p>Либо выберите другой источник в шапке страницы</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
