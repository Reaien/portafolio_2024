import { AboutMe } from "../components/AboutMe";
import { NavBar } from "../components/NavBar";
import { Presentation } from "../components/Presentation";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe />
    </>
  );
};
