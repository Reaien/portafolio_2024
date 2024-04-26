import { ReactIcon } from "../components/icons/ReactIcon";
import { TailwindIcon } from "../components/icons/TailwindIcon";
import { WebPageIcon } from "../components/icons/WebPageIcon";
import proyecto_maxima_01 from "../images/proyectos/proyecto_maxima_01.png";
import proyecto_maxima_02 from "../images/proyectos/proyecto_maxima_02.png";
import proyecto_maxima_03 from "../images/proyectos/proyecto_maxima_03.png";

export const cardProjectsData = [
  {
    id: 1,
    Titulo: "Web Máxima Formación",
    Descripcion:
      "Web creada para la empresa Máxima Formación en mi periodo de práctica laboral.",

    Imagen1: proyecto_maxima_01,
    Imagen2: proyecto_maxima_02,
    Imagen3: proyecto_maxima_03,
    Icon1: <ReactIcon className="w-[80px] h-[80px]" />,
    Icon2: <TailwindIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="w-[80px] h-[80px]" />,
  },
];
