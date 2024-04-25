import { useState } from "react";
import { CardProjects } from "./CardProjects";
import { CardCursos } from "../components/CardCursos";

export const Proyectos = () => {
  const [cardsProjects, setCardsProject] = useState(true);

  return (
    <>
      <section className="mt-60">
        <div className="flex flex-col justify-center items-center">
          <p className="text-7xl text-slate-300 font-bold ">
            Trabajos y proyectos
          </p>
          <p className="italic text-lg text-slate-400 w-[700px] mt-5 text-center">
            Aquí puedes explorar los proyectos que he realizado tanto como
            freelance así como también proyectos de cursos autodidactas y los
            cursos que he impartido en DuocUC.
          </p>
        </div>
        <div className="text-white flex justify-center mt-32">
          <button
            onClick={() => setCardsProject(true)}
            className={`px-[150px] transition-all duration-3000 py-5 border-2 rounded-l-2xl text-2xl font-semibold border-orange-600 ${
              cardsProjects
                ? "bg-gradient-to-r from-orange-600 to-amber-600"
                : "hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600"
            }  `}
          >
            Proyectos
          </button>
          <button
            onClick={() => {
              setCardsProject(false);
            }}
            className={`px-[150px] transition-all duration-3000 py-5 border-2 rounded-r-2xl text-2xl font-semibold border-orange-600 ${
              cardsProjects
                ? "hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600"
                : "bg-gradient-to-r from-orange-600 to-amber-600"
            }  `}
          >
            Cursos
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-10">
          {cardsProjects ? (
            <CardProjects cardInfo="" />
          ) : (
            <CardCursos cardInfo="" />
          )}
        </div>
      </section>
    </>
  );
};
