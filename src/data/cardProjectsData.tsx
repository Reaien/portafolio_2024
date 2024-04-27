import { ReactIcon } from "../components/icons/ReactIcon";
import { TailwindIcon } from "../components/icons/TailwindIcon";
import { WebPageIcon } from "../components/icons/WebPageIcon";
import { HtmlIcon } from "../components/icons/HtmlIcon";
import { BootstrapIcon } from "../components/icons/BootstrapIcon";
import { DjangoIcon } from "../components/icons/DjangoIcon";
import { AwsIcon } from "../components/icons/AwsIcon";
import { JavaIcon } from "../components/icons/JavaIcon";
import { SqliteIcon } from "../components/icons/SqliteIcon";
import proyecto_maxima_01 from "../images/proyectos/proyecto_maxima_01.webp";
import proyecto_maxima_02 from "../images/proyectos/proyecto_maxima_02.webp";
import proyecto_maxima_03 from "../images/proyectos/proyecto_maxima_03.webp";
import jdelb1 from "../images/proyectos/jdelb1.webp";
import jdelb2 from "../images/proyectos/jdelb2.webp";
import jdelb3 from "../images/proyectos/jdelb3.webp";
import web_store1 from "../images/proyectos/web_store1.webp";
import web_store2 from "../images/proyectos/web_store2.webp";
import web_store3 from "../images/proyectos/web_store3.webp";
import carmona_1 from "../images/proyectos/carmona_1.webp";
import carmona_2 from "../images/proyectos/carmona_2.webp";
import carmona_3 from "../images/proyectos/carmona_3.webp";

export const cardProjectsData = [
  {
    id: 1,
    Titulo: "Web Máxima Formación",
    Descripcion:
      "Desarrollé una plataforma web a medida para Máxima Formación durante mi período de práctica laboral, destacando su oferta de cursos de prevención de riesgos y optimizando la experiencia del usuario con un diseño intuitivo y funcional.",

    Imagen1: proyecto_maxima_01,
    Imagen2: proyecto_maxima_02,
    Imagen3: proyecto_maxima_03,
    Icon1: <ReactIcon className="w-[80px] h-[80px]" />,
    Icon2: <TailwindIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="w-[80px] h-[80px]" />,
  },
  {
    id: 2,
    Titulo: "Web Jóvenes del Bicentenario",
    Descripcion:
      "El sitio web de Jóvenes del Bicentenario es una plataforma interactiva que permite a los usuarios jóvenes votar, ver transmisiones en vivo de YouTube. La web puede gestionar una base de datos integral de cuequeros y competidores para el campeonato por sus administradores.",

    Imagen1: jdelb1,
    Imagen2: jdelb2,
    Imagen3: jdelb3,
    Icon1: <HtmlIcon className="w-[80px] h-[80px]" />,
    Icon2: <BootstrapIcon className="w-[60px] h-[60px]" />,
    Icon3: <DjangoIcon className="w-[80px] h-[80px]" />,
    Icon4: <AwsIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="w-[80px] h-[80px]" />,
  },
  {
    id: 3,
    Titulo: "Web Marketplace",
    Descripcion:
      "Web desarrollada como parte de mi formación de mi carrera de Ingeniería en informática en DuocUC.",

    Imagen1: web_store1,
    Imagen2: web_store2,
    Imagen3: web_store3,
    Icon1: <HtmlIcon className="w-[80px] h-[80px]" />,
    Icon2: <BootstrapIcon className="w-[60px] h-[60px]" />,
    Icon3: <DjangoIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="w-[80px] h-[80px]" />,
  },
  {
    id: 4,
    Titulo: "Software de escritorio administración ventas RentACar.",
    Descripcion:
      "Software de arriendo de automóviles para rent a car, este software permite arrendar, controlar y generar reportes de autos arrendados, este software fue creado bajo la formación de JAVA de mi carrera de Ingeniería en Informática en DuocUC",

    Imagen1: carmona_1,
    Imagen2: carmona_2,
    Imagen3: carmona_3,
    Icon1: <JavaIcon className="w-[80px] h-[80px]" />,
    Icon2: <SqliteIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="w-[80px] h-[80px]" />,
  },
  {
    id: 5,
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
  {
    id: 6,
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
