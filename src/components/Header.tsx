export const Header = () => {
  return (
    <>
      <section className="flex bg-slate-400 h-[100px] mt-8 xl:w-[1200px] mx-auto px-10 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="flex text-white justify-start items-center max-w-[200px]">
          <a href="">Ivan.</a>
        </div>
        <div className="flex text-white justify-end items-center ml-auto space-x-16">
          <a href="">Proyectos</a>
          <a href="">Carrera</a>
          <a href="">Contacto</a>
        </div>
      </section>
    </>
  );
};
