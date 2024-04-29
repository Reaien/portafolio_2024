export const AboutMe = () => {
  return (
    <>
      <section className="mt-36">
        <div className="flex justify-center">
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text font-bold text-7xl">
            Sobre mí
          </p>
        </div>
        <div className="grid grid-cols-2 text-white mt-20">
          <div className="flex flex-col w-[200px] mx-auto">
            <div className=" text-9xl bg-gradient-to-r from-orange-600 to-orange-950 bg-clip-text text-transparent font-extrabold">
              1+
            </div>
            <div className="text-slate-300 mt-4">
              Más de 1 año impartiendo clases de ayudantía en DuocUC gracias a
              mi desempeño académico.
            </div>
          </div>

          <div className="md:-ml-60 w-[980px] text-left text-lg my-auto">
            Apasionado de la programación la resolución de problemas y el
            trabajo en equipo, gracias a mi desempeño en mi carrera de
            ingeniería en informática en DuocUC, también he podido impartir
            clases de reforzamiento de desarrollo web front-end utilizando las
            tecnologías de HTML CSS JS Y BOOTSTRAP5 y back-end con Django y
            SQLite las cuales fueron solicitadas y posteriormente aprobadas por
            mi docente <span className="font-semibold">Nancy Bernal</span>{" "}
            <span className="text-orange-500 italic">
              "nan.bernal@profesor.duoc.cl"
            </span>{" "}
            y el director de mi carrera{" "}
            <span className="font-semibold">Robinson Gomez</span>{" "}
            <span className="text-orange-500 italic">"r.gomez@duoc.cl"</span> de
            la sede de DuocUC Viña del Mar.
          </div>
        </div>
      </section>
    </>
  );
};
