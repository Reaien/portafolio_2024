import { useState, useEffect } from "react";
import Logo from "../images/logo/Logo_project-transformed.png";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`flex z-10 bg-slate-400 h-[90px] mt-8  transition-all duration-[2000ms] xl:w-[1200px] mx-auto px-11 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 ${
          isScrolled
            ? "transition-all duration-[2000ms]  fixed -top-8 px-0 min-w-full rounded-none  shadow-lg"
            : ""
        }`}
      >
        <div className="flex text-white justify-start items-center max-w-[200px] space-x-3">
          <img className="w-12 h-12" src={Logo} alt="logo" />
          <a href="" className="text-4xl font-bold">
            Iván.
          </a>
        </div>
        <div className="flex text-white justify-end items-center ml-auto space-x-16">
          <a href="">Proyectos</a>
          <a href="">Carrera</a>
          <a href="">Contacto</a>
        </div>
      </section>
    </>
  );
};
