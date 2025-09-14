import React from "react";
import "./Landing.scss";
import rocket from "../../../assets/images/rocket.png";
import page1 from "../../../assets/images/page1.png";
import page2 from "../../../assets/images/page2.png";
import page3 from "../../../assets/images/page3.png";
import page4 from "../../../assets/images/page4.png";
import founder from "../../../assets/images/ founder.png";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <div className="container">
        <section className="hero">
          <h1>
            Мы являемся топливом для вашего бизнеса, готовы дать вам образование
            и поднять ваш бренд до небес.
          </h1>
          <div className="hero--image">
            <img src={rocket} alt="Rocket" />
          </div>
        </section>

        <section className="cards">
          <img src={page1} alt="Math" className="page1" />
          <img src={page2} alt="Finance" className="page2" />
          <img src={page3} alt="Laptop" className="page3" />
          <img src={page4} alt="Business Woman" className="page4" />
        </section>

        <section className="founder">
          <h2>Наш основатель</h2>
          <div className="founder--text">
            <div className="founder--text__image">
              <img src={founder} alt="Founder" />
              <p>
                Большая история — новое исследовательское направление, в рамках
                которого изучается единый преемственный процесс развития
                Вселенной — с момента Большого взрыва до настоящего времени.
                Междисциплинарный проект The Big History Project был основан
                Биллом Гейтсом и Дэвидом Кристианом с целью разработки
                целостного курса истории космоса, Земли, жизни и человечества и
                преподавания его во всем мире.Эта книга, написанная на стыке
                естественных и гуманитарных наук — физики, геологии, астрономии,
                истории, .социологии и других, — насыщенное обобщение социологии
                и других, — насыщенное обобщение новейших научных представлений
              </p>
            </div>
            <div className="founder--text__block">
              <p>
                социологии и других, — насыщенное обобщение новейших научных
                представлений Большая история — новое исследовательское
                направление, в рамках которого изучается единый преемственный
                процесс развития Вселенной — с момента Большого взрыва до
                настоящего времени. Междисциплинарный проект The Big History
                Project был основан Биллом Гейтсом и Дэвидом Кристианом с целью
                разработки целостного курса истории космоса, Земли, жизни и
                человечества и преподавания его во всем мире.Эта книга,
                написанная на стыке естественных и гуманитарных наук — физики,
                геологии, астрономии, истории, .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
