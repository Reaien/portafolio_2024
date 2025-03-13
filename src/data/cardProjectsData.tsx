import { ReactIcon } from "../components/icons/ReactIcon";
import { TailwindIcon } from "../components/icons/TailwindIcon";
import { WebPageIcon } from "../components/icons/WebPageIcon";
import { HtmlIcon } from "../components/icons/HtmlIcon";
import { BootstrapIcon } from "../components/icons/BootstrapIcon";
import { DjangoIcon } from "../components/icons/DjangoIcon";
import { AwsIcon } from "../components/icons/AwsIcon";
import { JavaIcon } from "../components/icons/JavaIcon";
import { CssIcon } from "../components/icons/CssIcon";
import { MySqlIcon } from "../components/icons/MySqlIcon";
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
import muebles_1 from "../images/proyectos/muebles_1.webp";
import muebles_2 from "../images/proyectos/muebles_2.webp";
import muebles_3 from "../images/proyectos/muebles_3.webp";
import festival_1 from "../images/proyectos/festival_web_01.webp";
import festival_2 from "../images/proyectos/festival_web_02.webp";
import festival_3 from "../images/proyectos/festival_web_03.webp";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { JavascriptIcon } from "../components/icons/JavascriptIcon";

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
    EnlaceWebIcon: <WebPageIcon className="mx-auto" />,
    Link: "https://www.maxima-formacion.com",
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
    EnlaceWebIcon: <WebPageIcon className="mx-auto" />,
    Link: "https://jdelb.onrender.com/",
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
    EnlaceWebIcon: <WebPageIcon className="mx-auto" />,
    Link: "https://ecommerce-l3vc.onrender.com/",
  },
  {
    id: 4,
    Titulo: "Software de escritorio administración ventas RentACar.",
    Descripcion:
      "Software de escritorio de arriendo de automóviles para rent a car, este software permite arrendar, controlar y generar reportes de autos arrendados, este software fue creado bajo la formación de JAVA de mi carrera de Ingeniería en Informática en DuocUC",

    Imagen1: carmona_1,
    Imagen2: carmona_2,
    Imagen3: carmona_3,
    Icon1: <JavaIcon className="w-[80px] h-[80px]" />,
    Icon2: <MySqlIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <GitHubIcon className="mx-auto" />,
    Link: "https://github.com/Reaien/Software-Sistema-Administrativo-Rent-a-car",
  },
  {
    id: 5,
    Titulo: "Web festival de rock",
    Descripcion:
      "Web desarrollada de forma autodidacta con curso de programación web en Udemy con Juan de la torre incorporando manipulación de DOM con JS.",

    Imagen1: festival_1,
    Imagen2: festival_2,
    Imagen3: festival_3,
    Icon1: <HtmlIcon className="w-[80px] h-[80px]" />,
    Icon2: <CssIcon className="w-[80px] h-[80px]" />,
    Icon3: <JavascriptIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="mx-auto" />,
    Link: "https://reaien.github.io/Web-Festival-Rock/",
  },
  {
    id: 6,
    Titulo: "Web tienda de muebles",
    Descripcion:
      "Web desarrollada de forma autodidacta con curso de programación web en Udemy con Juan de la torre.",

    Imagen1: muebles_1,
    Imagen2: muebles_2,
    Imagen3: muebles_3,
    Icon1: <HtmlIcon className="w-[80px] h-[80px]" />,
    Icon2: <CssIcon className="w-[80px] h-[80px]" />,
    EnlaceWebIcon: <WebPageIcon className="mx-auto" />,
    Link: "https://reaien.github.io/Decoration-Web-Project/",
  },
];
