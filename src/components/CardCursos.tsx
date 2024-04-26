import React from "react";

interface CardProps {
  Titulo: string;
  Observacion: string;
  Imagen: string;
}

export const CardCursos: React.FC<CardProps> = ({
  Titulo,
  Observacion,
  Imagen,
}) => {
  return (
    <>
      <section className="h-[450px] w-[550px] mx-auto rounded-2xl m-5 overflow-hidden  animate-fade">
        <p className="text-white italic">{Titulo}</p>
        <img
          className="w-full h-full object-cover"
          src={Imagen}
          alt="imagen_blog"
        />
        <p className="text-white italic">{Observacion}</p>
      </section>
    </>
  );
};
