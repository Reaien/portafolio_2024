import React from "react";

interface CardProps {
  Titulo: string;
  Descripcion: string;
  Imagen1: string;
  Icon1: React.ReactNode;
  Icon2: React.ReactNode;
  EnlaceWebIcon: React.ReactNode;
}

export const CardProjects: React.FC<CardProps> = ({
  Titulo,
  Descripcion,
  Imagen1,
  Icon1,
  Icon2,
  EnlaceWebIcon,
}) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden relative animate-fade">
        <div className=" absolute inset-0  bg-gradient-to-t from-orange-950 via-orange-950/55 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="h-full grid grid-rows-4 justify-center pt-36">
            <div className="flex justify-center items-center h-full text-white">
              {Icon1}
              {Icon2}
            </div>
            <p className="italic text-white text-sm mx-auto">{Titulo}</p>
            <p className="italic text-white text-sm ">{Descripcion}</p>
            <p className="flex flex-col mx-auto mb-10 text-white">
              {EnlaceWebIcon} Enlace web
            </p>
          </div>
        </div>

        <img
          className="w-full h-full object-cover"
          src={Imagen1}
          alt="imagen_blog"
        />
      </section>
    </>
  );
};
