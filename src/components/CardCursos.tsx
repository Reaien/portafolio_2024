import React from "react";
import Imagen1 from "../images/cursos/curso_01.png";

interface CardProps {
  cardInfo: string;
}

export const CardCursos: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden  animate-fade">
        <div className="" />
        <img
          className="w-full h-full object-cover"
          src={Imagen1}
          alt="imagen_blog"
        />
      </section>
    </>
  );
};
