import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import scss from "./Header.module.scss";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const nav = useNavigate();

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <h3 onClick={() => nav("/")}>Logo</h3>
          <div className={scss.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${scss.link} ${scss.active}` : scss.link
              }
            >
              Главная
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${scss.link} ${scss.active}` : scss.link
              }
            >
              About
            </NavLink>

            <NavLink
              to="/О нас"
              className={({ isActive }) =>
                isActive ? `${scss.link} ${scss.active}` : scss.link
              }
            >
              О нас
            </NavLink>

            <NavLink
              to="/курсы"
              className={({ isActive }) =>
                isActive ? `${scss.link} ${scss.active}` : scss.link
              }
            >
              Курсы
            </NavLink>

            <NavLink
              to="/контакты"
              className={({ isActive }) =>
                isActive ? `${scss.link} ${scss.active}` : scss.link
              }
            >
              Контакты
            </NavLink>
          </div>

          <div className={scss.sign}>
            <Link to="/">Войти</Link>
            <button>
              Присоединяйся <FaArrowRight />
            </button>
          </div>
          <div onClick={() => setOpen(!isOpen)} className={scss.burger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(300px)",
          }}
          className={scss.menu}
        >
          <NavLink
            onClick={() => setOpen(!isOpen)}
            to="/"
            className={({ isActive }) =>
              isActive ? `${scss.link} ${scss.active}` : scss.link
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={() => setOpen(!isOpen)}
            to="/about"
            className={({ isActive }) =>
              isActive ? `${scss.link} ${scss.active}` : scss.link
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(!isOpen)}
            to="/О нас"
            className={({ isActive }) =>
              isActive ? `${scss.link} ${scss.active}` : scss.link
            }
          >
            О нас
          </NavLink>
          <NavLink
            onClick={() => setOpen(!isOpen)}
            to="/курсы"
            className={({ isActive }) =>
              isActive ? `${scss.link} ${scss.active}` : scss.link
            }
          >
            Курсы
          </NavLink>
          <NavLink
            onClick={() => setOpen(!isOpen)}
            to="/контакты"
            className={({ isActive }) =>
              isActive ? `${scss.link} ${scss.active}` : scss.link
            }
          >
            Контакты
          </NavLink>
          <Link to="/">Войти</Link>
          <button>
            Присоединяйся <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
