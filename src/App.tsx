import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPageLazy } from "./pages/About/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Counter } from "./components/Counter";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
