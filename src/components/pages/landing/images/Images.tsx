import type { FC } from "react";
import scss from "./Images.module.scss";
import page1 from "../../../../assets/images/page1.png";
import page2 from "../../../../assets/images/page2.png";
import page3 from "../../../../assets/images/page3.png";
import page4 from "../../../../assets/images/page4.png";

const Images: FC = () => {
  return (
    <section className={scss.Images}>
      <div className="container">
        <div className={scss.images}>
          <img src={page1} alt="img" />
          <img className={scss.img1} src={page2} alt="img" />
          <img src={page3} alt="img" />
          <img className={scss.img2} src={page4} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Images;
