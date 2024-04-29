import React from "react";

interface CardProps {
  Link: string;
}

export const CardCursos: React.FC<CardProps> = ({ Link }) => {
  return (
    <>
      <section className="grid grid-cols-2 mx-auto rounded-2xl m-5 overflow-hidden  animate-fade">
        <iframe className="w-full aspect-video " src={Link}></iframe>
      </section>
    </>
  );
};
