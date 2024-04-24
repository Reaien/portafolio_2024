import { AboutMe } from "../components/AboutMe";

import { NavBar } from "../components/NavBar";
import { Presentation } from "../components/Presentation";
import { Proyectos } from "../components/Proyectos";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe />
      <Proyectos />
    </>
  );
};
