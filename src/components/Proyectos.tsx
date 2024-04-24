import { CardProyects } from "../components/CardProyects";

export const Proyectos = () => {
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
          <button className="px-[150px] transition-all duration-3000 py-5 border-2 rounded-l-2xl text-2xl font-semibold border-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 ">
            Proyectos
          </button>
          <button className="px-[150px] transition-all duration-3000 py-5 border-2 rounded-r-2xl text-2xl font-semibold border-orange-600 hover:bg-gradient-to-l hover:from-orange-600 hover:to-amber-600 ">
            Clases
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-10">
          <CardProyects cardInfo="" />
          <CardProyects cardInfo="" />
          <CardProyects cardInfo="" />
          <CardProyects cardInfo="" />
        </div>
      </section>
    </>
  );
};
