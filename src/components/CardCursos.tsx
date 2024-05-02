import React from "react";

interface CardProps {
  Link: string;
}

export const CardCursos: React.FC<CardProps> = ({ Link }) => {
  return (
    <>
      <section className="flex justify-center mx-auto rounded-2xl m-5  overflow-hidden  animate-fade ">
        <iframe
          className=" aspect-video mx-auto h-[450px] w-[650px]"
          src={Link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </>
  );
};
