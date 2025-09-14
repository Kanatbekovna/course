import scss from "./Hero.module.scss";
import heroImg from "../../../../assets/images/heroImg.svg";
import heroCardIcon1 from "../../../../assets/images/heroCardIcon1.svg";
import heroCardIcon2 from "../../../../assets/images/heroCardIcon2.svg";
import heroCardIcon3 from "../../../../assets/images/heroCardIcon3.svg";
const Hero = () => {
  return (
    <section className={scss.Hero}>
      <div className="container">
        <div className={scss.hero}>
          <div className={scss.texts}>
            <h1>
              Надо много учиться, <br /> чтобы знать хоть немного.
            </h1>
            <p>
              Обеспечьте сеть для всех ваших потребностей легко и весело, <br />
              используя наши курсы.Откройте для себя интересные функции от нас.
            </p>
            <button>Начать</button>
          </div>
          <div className={scss.img}>
            <img src={heroImg} alt="img" />
          </div>
        </div>
        <div className={scss.cards}>
          <div className={scss.card}>
            <img src={heroCardIcon1} alt="img" />
            <h3>Пожизненный доступ</h3>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
          <div className={scss.card}>
            <img src={heroCardIcon2} alt="img" />
            <h3>
              Сертифицированный <br /> преподаватель
            </h3>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
          <div className={scss.card}>
            <img src={heroCardIcon3} alt="img" />
            <h3>Пожизненный доступ</h3>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
