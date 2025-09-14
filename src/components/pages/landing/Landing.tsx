import type { FC } from "react";
import scss from "./Landing.module.scss";

const Landing: FC = () => {
  return (
    <section className={scss.Landing}>
      <div className="container">
        <div className={scss.landing}></div>
      </div>
    </section>
  );
};

export default Landing;
