import { useState, useEffect } from "react";
import Logo from "../images/logo/Logo_project-transformed.webp";

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

  const scrollToContact = () => {
    setTimeout(() => {
      const ContactComponent = document.getElementById("contacto");
      if (ContactComponent) {
        ContactComponent.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        console.error("No se encontró ningún elemento con el ID 'contacto'");
      }
    }, 100);
  };

  const scrollToCarrera = () => {
    setTimeout(() => {
      const ContactComponent = document.getElementById("carrera");
      if (ContactComponent) {
        ContactComponent.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        console.error("No se encontró ningún elemento con el ID 'carrera'");
      }
    }, 100);
  };

  const scrollToProyectos = () => {
    setTimeout(() => {
      const ContactComponent = document.getElementById("proyectos");
      if (ContactComponent) {
        ContactComponent.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        console.error("No se encontró ningún elemento con el ID 'proyectos'");
      }
    }, 100);
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
          <img loading="lazy" className="w-12 h-12" src={Logo} alt="logo" />
          <a className="text-4xl font-bold">Iván.</a>
        </div>
        <div
          onClick={toggleNavBar}
          className="flex xl:hidden text-white items-center ml-auto mr-10 font-bold text-2xl"
        >
          {isOpen ? "X" : "="}
        </div>
        <div className="max-xl:hidden flex text-white justify-end items-center ml-auto space-x-16">
          <button
            onClick={scrollToCarrera}
            className="hover:text-orange-600 transition-all duration-500 cursor-pointer"
          >
            Carrera
          </button>
          <button
            onClick={scrollToProyectos}
            className="hover:text-orange-600 transition-all duration-500 cursor-pointer"
          >
            Proyectos y cursos
          </button>
          <button
            onClick={scrollToContact}
            className="hover:text-orange-600 transition-all duration-500 cursor-pointer"
          >
            Contacto
          </button>
        </div>
      </section>
      {isOpen && (
        <div className="animate-fade-down animate-duration-200 xl:hidden flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all duration-1000 bg-slate-400 rounded rounded-b-md text-white absolute w-full text-xl gap-10 space-y-5">
          <a
            className="mt-5 hover:text-orange-600 transition-all ml-2 duration-500 cursor-pointer"
            onClick={scrollToCarrera}
          >
            Carrera
          </a>
          <a
            className="hover:text-orange-600 transition-all ml-2 duration-500 cursor-pointer"
            onClick={scrollToProyectos}
          >
            Proyectos y cursos
          </a>
          <a
            className="pb-5 hover:text-orange-600 transition-all ml-2 duration-500 cursor-pointer"
            onClick={scrollToContact}
          >
            Contacto
          </a>
        </div>
      )}
    </>
  );
};
