import { useState } from "react";
import { CardProjects } from "./CardProjects";
import { CardCursos } from "../components/CardCursos";
import { cardProjectsData } from "../data/cardProjectsData";
import { cardCursosData } from "../data/cardCursosData";

export const Proyectos = () => {
  const [cardsProjects, setCardsProject] = useState(true);

  const renderCards = () => {
    if (cardsProjects) {
      return cardProjectsData.map((data) => (
        <CardProjects
          key={data.id}
          Titulo={data.Titulo}
          Descripcion={data.Descripcion}
          Imagenes={[data.Imagen1, data.Imagen2, data.Imagen3]}
          Icon1={data.Icon1}
          Icon2={data.Icon2}
          Icon3={data.Icon3}
          Icon4={data.Icon4}
          EnlaceWebIcon={data.EnlaceWebIcon}
          Link={data.Link}
        />
      ));
    } else {
      return cardCursosData.map((data) => (
        <CardCursos key={data.id} Link={data.Link} />
      ));
    }
  };

  return (
    <>
      <section className="mt-60 ">
        <div className="flex flex-col justify-center items-center">
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent pb-5 bg-clip-text font-bold text-4xl md:text-7xl">
            Proyectos y cursos
          </p>
          <p className="italic text-lg text-slate-400 md:w-[700px] mt-5 text-center">
            Con más de 1 año de experiencia como desarrollador web he
            participado de proyectos reales otorgando soluciones tecnológicas a
            mis clientes, aquí puedes explorar los proyectos.
          </p>
        </div>
        <div className="text-white flex justify-center mt-32">
          <button
            onClick={() => setCardsProject(true)}
            className={`px-[40px] md:px-[150px]  py-5 border-2 rounded-l-2xl md:text-2xl font-semibold border-orange-600 ${
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
            className={`px-[40px] md:px-[150px]  py-5 border-2 rounded-r-2xl md:text-2xl font-semibold border-orange-600 ${
              cardsProjects
                ? "hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600"
                : "bg-gradient-to-r from-orange-600 to-amber-600"
            }  `}
          >
            Cursos
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-10 gap-20">
          {renderCards()}
        </div>
      </section>
    </>
  );
};
