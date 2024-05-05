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

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className={`transition-all duration-1000  flex z-50 bg-slate-400 h-[90px] xl:mt-8 xl:w-[1200px] mx-auto xl:px-11 max-xl:rounded-none rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 ${
          isScrolled
            ? "xl:animate-fade-down xl:animate-ease-in xl:animate-duration-300  xl:fixed xl:-top-8 px-0 min-w-full rounded-none  shadow-lg"
            : ""
        }`}
      >
        <div className="flex text-white justify-start items-center max-w-[200px] space-x-3">
          <img className="w-12 h-12" src={Logo} alt="logo" />
          <a href="" className="text-4xl font-bold">
            Iván.
          </a>
        </div>
        <div
          onClick={toggleNavBar}
          className="flex xl:hidden text-white items-center ml-auto mr-10 font-bold text-2xl"
        >
          {isOpen ? "X" : "="}
        </div>
        <div className="max-xl:hidden flex text-white justify-end items-center ml-auto space-x-16">
          <a href="">Carrera</a>
          <a href="">Proyectos y cursos</a>
          <a href="">Contacto</a>
        </div>
      </section>
      {isOpen && (
        <div className="xl:hidden flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all duration-1000 bg-slate-400 rounded rounded-b-md text-white absolute w-full text-xl gap-10 space-y-5">
          <a
            className="mt-5 hover:text-orange-600 transition-all duration-500"
            href=""
          >
            Carrera
          </a>
          <a
            className="hover:text-orange-600 transition-all duration-500"
            href=""
          >
            Proyectos y cursos
          </a>
          <a
            className="pb-5 hover:text-orange-600 transition-all duration-500"
            href=""
          >
            Contacto
          </a>
        </div>
      )}
    </>
  );
};
