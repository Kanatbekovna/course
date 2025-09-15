import type { FC } from "react";
import scss from "./Rocket.module.scss";
import rocketImg from "../../../../assets/images/rocket.svg";

const Rocket: FC = () => {
  return (
    <section className={scss.Rocket}>
      <div className="container">
        <div className={scss.rocket}>
          <h1>
            Мы являемся топливом для вашего <br /> бизнеса, готовы дать вам
            образование <br /> и поднять ваш бренд до небес.
          </h1>
          <img src={rocketImg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Rocket;
