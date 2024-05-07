import React from "react";
import { useState, useEffect } from "react";

interface CardProps {
  Titulo: string;
  Descripcion: string;
  Imagenes: string[];
  Icon1: React.ReactNode;
  Icon2: React.ReactNode;
  Icon3: React.ReactNode;
  Icon4: React.ReactNode;
  EnlaceWebIcon: React.ReactNode;
  Link: string;
}

export const CardProjects: React.FC<CardProps> = ({
  Titulo,
  Descripcion,
  Imagenes,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  EnlaceWebIcon,
  Link,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia 8000 por el tiempo en milisegundos que deseas entre cada cambio de imagen

    return () => clearInterval(timer);
  }, []); // Esto se ejecutará cada vez que cambie el currentIndex

  return (
    <>
      <section className="h-[480px] w-[320px] md:w-[550px] mx-auto rounded-2xl m-5 overflow-hidden relative animate-fade">
        <div className="z-30 absolute inset-0  bg-gradient-to-t from-orange-950/90 via-black/70 to-black/70 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="h-full grid grid-rows-4 justify-center pt-10">
            <div className="flex justify-center items-center h-full text-white mt-20 pb-2">
              {Icon1}
              {Icon2}
              {Icon3}
              {Icon4}
            </div>
            <p className="italic text-white text-sm text-center mx-auto mt-16">
              {Titulo}
            </p>
            <p className="italic text-white text-sm text-center px-1 mx-auto">
              {Descripcion}
            </p>
            <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col mx-auto justify-items-center mt-4 text-white cursor-pointer hover:text-orange-600 transition-all duration-200"
            >
              {EnlaceWebIcon}
              Enlace del proyecto
            </a>
          </div>
        </div>
        {Imagenes.map((imagen, index) => (
          <img
            loading="lazy"
            key={index}
            className={`w-full h-full object-cover absolute transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0" /* Control de opacidad */
            }`}
            src={imagen}
            alt="imagen_blog"
          />
        ))}
      </section>
    </>
  );
};
