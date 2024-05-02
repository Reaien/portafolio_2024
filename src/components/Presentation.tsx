import foto from "../images/foto_me.png";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GitHubIcon } from "./icons/GitHubIcon";

export const Presentation = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 items-center h-[800px]">
        <div className="text-white ml-80">
          <p className="text-2xl">Bienvenido a mi Portafolio</p>
          <p className="h1_type text-5xl pb-4">Soy Iván Duarte Herrera</p>
          <p className="text-5xl text-orange-700">Ingeniero Informático</p>
          <div className="flex space-x-10 justify-center mr-20 my-5">
            <button className="w-[200px] h-[50px] p-[3px]  bg-orange-600 rounded-lg text-xl ">
              <div className="bg-black h-full w-full flex justify-center rounded-lg items-center hover:bg-transparent hover:transition-all hover:duration-300">
                Contáctame
              </div>
            </button>
            <button className="w-[200px] h-[50px] p-[3px]  bg-orange-600 rounded-lg text-xl ">
              <div className="bg-black h-full w-full flex justify-center rounded-lg items-center hover:bg-transparent hover:transition-all hover:duration-300">
                Descarga mi CV
              </div>
            </button>
          </div>
          <div className="flex space-x-10 justify-end mr-40">
            <a
              href="https://www.linkedin.com/in/ivanduarteh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-12 h-12  hover:text-orange-600 transition-all duration-500 cursor-pointer" />
            </a>
            <a
              href="https://github.com/Reaien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-12 h-12  hover:text-orange-600 transition-all duration-500 cursor-pointer" />
            </a>
          </div>
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
