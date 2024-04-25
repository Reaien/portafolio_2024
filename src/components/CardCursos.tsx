import React from "react";
import Imagen1 from "../images/curso_01.png";

interface CardProps {
  cardInfo: string;
}

export const CardCursos: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden hover:relative">
        <div className="absolute  bg-gradient-to-t from-orange-800 via-orange-800/60 to-transparent opacity-95" />
        <img
          className="w-full h-full object-cover"
          src={Imagen1}
          alt="imagen_blog"
        />
      </section>
    </>
  );
};
