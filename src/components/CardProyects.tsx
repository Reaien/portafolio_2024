import React from "react";
import Imagen1 from "../images/carmona_1.png";
import { url } from "inspector";

interface CardProps {
  cardInfo: string;
}

export const CardProyects: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl overflow-hidden p-5">
        <div
          className="rounded-2xl bg-cover bg-left h-full"
          style={{ backgroundImage: `url(${Imagen1})` }}
        />
      </section>
    </>
  );
};
