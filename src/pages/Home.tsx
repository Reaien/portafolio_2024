import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";

import { NavBar } from "../components/NavBar";
import { Presentation } from "../components/Presentation";
import { Proyectos } from "../components/Proyectos";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe />
      <Skills />
      <Proyectos />
      <ContactMe />
      <Footer />
    </>
  );
};
