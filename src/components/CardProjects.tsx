import React from "react";
import Imagen1 from "../images/carmona_1.png";

interface CardProps {
  cardInfo: string;
}

export const CardProjects: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden relative">
        <div className="absolute inset-0  hover:bg-gradient-to-t from-orange-800 via-orange-800/60 to-transparent " />
        <img
          className="w-full h-full object-cover"
          src={Imagen1}
          alt="imagen_blog"
        />
      </section>
    </>
  );
};
