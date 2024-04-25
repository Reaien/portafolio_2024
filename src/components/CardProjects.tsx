import React from "react";
import Imagen1 from "../images/proyectos/carmona_1.png";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

interface CardProps {
  cardInfo: string;
}

export const CardProjects: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden relative animate-fade">
        <div className=" absolute inset-0  bg-gradient-to-t from-orange-900 via-orange-800/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="h-full">
            <div className="flex justify-center items-center h-full text-white">
              <ReactIcon className="w-[80px] h-[80px] " />
              <TailwindIcon className="w-[80px] h-[80px] " />
            </div>
            <p className="italic text-white text-sm">
              "Web creada para la empresa Máxima Formación en mi periodo de
              práctica laboral."
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
