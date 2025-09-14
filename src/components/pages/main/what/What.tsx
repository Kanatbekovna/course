import scss from "./What.module.scss";
import whatIcon1 from "../../../../assets/images/whatIcon1.svg";
import whatIcon2 from "../../../../assets/images/whatIcon2.svg";
import whatIcon3 from "../../../../assets/images/whatIcon3.svg";
const What = () => {
  return (
    <section className={scss.What}>
      <div className="container">
        <div className={scss.what}>
          <div className={scss.titles}>
            <h1>Почему (название кур.)</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете <br />
              использовать. Постепенное накопление информация
            </p>
          </div>
          <div className={scss.actions}>
            <h1>100+</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете <br />
              использовать. Постепенное накопление информация
            </p>
            <h1>80+</h1>
            <p>
              Мы предоставляем множество функций, которые вы можете <br />
              использовать. Постепенное накопление информация
            </p>
          </div>
          <div className={scss.info}>
            <div className={scss.icons}>
              <img src={whatIcon1} alt="img" />
              <div className={scss.text}>
                <h3>Личное обучение</h3>
                <p>
                  Постепенное накопление информация об <br /> атомном и
                  мелкомасштабное поведение...
                </p>
              </div>
            </div>
            <div className={scss.icons}>
              <img src={whatIcon2} alt="img" />
              <div className={scss.text}>
                <h3>Интерактивные уроки</h3>
                <p>
                  Постепенное накопление информация об <br /> атомном и
                  мелкомасштабное поведение...
                </p>
              </div>
            </div>
            <div className={scss.icons}>
              <img src={whatIcon3} alt="img" />
              <div className={scss.text}>
                <h3>24/7 Поддержка учеников</h3>
                <p>
                  Постепенное накопление информация об <br /> атомном и
                  мелкомасштабное поведение...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
