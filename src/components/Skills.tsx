import { HtmlColorIcon } from "./icons/ColorIcons/HtmlColorIcon";
import { CssColorIcon } from "./icons/ColorIcons/CssColorIcon";
import { JavascriptColorIcon } from "./icons/ColorIcons/JavascriptColorIcon";
import { ReactColorIcon } from "./icons/ColorIcons/ReactColorIcon";
import { TailwindColoIcon } from "./icons/ColorIcons/TailwindColoIcon";
import { BootstrapColorIcon } from "./icons/ColorIcons/BootstrapColorIcon";
import { DjangoColorIcon } from "./icons/ColorIcons/DjangoColorIcon";
import { AwsColorIcon } from "./icons/ColorIcons/AwsColorIcon";
import { SqliteColorIcon } from "./icons/ColorIcons/SqliteColorIcon";
import { MySqlColorIcon } from "./icons/ColorIcons/MySqlColorIcon";

export const Skills = () => {
  return (
    <>
      <section className="grid md:grid-cols-1 justify-items-center mt-32">
        <div className="text-slate-200 text-center px-5 xl:w-[1100px] ">
          Poseo habilidades sólidas en el desarrollo web, incluyendo el dominio
          de HTML, CSS y JavaScript para crear interfaces de usuario dinámicas y
          atractivas. Además, tengo experiencia en el uso de bibliotecas y
          frameworks populares como React.js para construir aplicaciones web
          escalables y eficientes. También estoy familiarizado con el uso de
          herramientas para realizar despliegues en entornos controlados
          utilizadando AWS EC2. Mi enfoque en el desarrollo web se centra en
          crear experiencias de usuario intuitivas y receptivas, aplicando las
          mejores prácticas de diseño y desarrollo para ofrecer soluciones de
          alta calidad.
        </div>

        <div className=" mt-5">
          <div className="flex gap-2 justify-center mb-5">
            <HtmlColorIcon />
            <CssColorIcon />
            <JavascriptColorIcon />
            <TailwindColoIcon />
            <BootstrapColorIcon />
            <ReactColorIcon />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <DjangoColorIcon className="bg-white py-1 rounded px-1" />

            <AwsColorIcon className="bg-white py-1 rounded" />

            <SqliteColorIcon className="bg-white py-1 rounded" />
            <MySqlColorIcon className="bg-white  rounded" />
          </div>
        </div>
      </section>
    </>
  );
};
