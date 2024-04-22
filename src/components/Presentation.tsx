import foto from "../images/foto_me.png";

export const Presentation = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 items-center mt-44 ">
        <div className="text-white ml-80">
          <p className="text-2xl">Bienvenido a mi Portafolio</p>
          <p className="h1_type text-5xl pb-4">Soy Iván Duarte Herrera</p>
          <p className="text-5xl text-orange-700">Ingeniero Informático</p>
        </div>

        <div className="text-white relative ml-32">
          <div className="rounded-t-full ml-20 h-[450px]  w-[350px] bg-gradient-to-b from-orange-600 p-1">
            <div className="h-full w-full bg-black rounded-t-full"></div>
          </div>
          <img
            className="rounded-t-full absolute md:top-14 md:left-32"
            src={foto}
            alt="foto_me"
          />
        </div>
      </section>
    </>
  );
};
