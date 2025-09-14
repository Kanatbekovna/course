import type { ReactElement } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/pages/landing/Landing";

interface IRouter {
  id: number;
  path: string;
  element: ReactElement;
}
const App = () => {
  const router: IRouter[] = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/about",
      element: <Landing />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
