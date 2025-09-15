import type { FC } from "react";
import Rocket from "./rocket/Rocket";
import Images from "./images/Images";
import Founder from "./founder/Founder";

const Landing: FC = () => {
  return (
    <div>
      <Rocket />
      <Images />
      <Founder />
    </div>
  );
};

export default Landing;
