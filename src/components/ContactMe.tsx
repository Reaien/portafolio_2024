import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { ReactIcon } from "./icons/ReactIcon";
import { TsIcon } from "./icons/TsIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { GitHubIcon } from "./icons/GitHubIcon";

export const ContactMe = () => {
  // useState para el captcha y pasar el estado a true si se realizó el captcha
  //configurar y seguir doc de emailJS para configurar la key en el dashboard de emailJS
  const [capValue, setCapValue] = useState(null);

  //formulario de emailJS
  const form = useRef();
  //funcion para el formulario de emailJS con las keys
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0zegwqp", "template_7am55pq", form.current, {
        publicKey: "-yYviovuhGc-yfknj",
      })
      .then(
        () => {
          Swal.fire({
            title: "¡Muchas Gracias por contactarteme !",
            text: "Te escribiré al email de contacto que ingresaste !",
            icon: "success",
            timer: 8000,
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Ups! Ha ocurrido un problema",
            text: "Error capa 8",
            icon: "error",
            timer: 8000,
          });
          console.log(error);
        }
      );
  };

  return (
    <>
      <section className="grid grid-cols-1 mt-40">
        <p className="text-7xl bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text font-bold mx-auto">
          Contacto
        </p>
      </section>
      <section className=" items-center grid grid-rows-1 lg:grid-cols-2  shadow-md  mb-10 ">
        <div className="flex flex-col justify-end items-center md:ml-20">
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text text-5xl font-bold ">
            Esta web fue construída con
          </p>
          <div className="flex text-white m-10 gap-3">
            <ReactIcon className="w-20 h-20 " />
            <TsIcon className="w-20 h-20" />
            <TailwindIcon className="w-20 h-20" />
          </div>
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text text-3xl font-bold">
            Repositorio
          </p>
          <a
            href="https://github.com/Reaien/portafolio_2024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <GitHubIcon className="w-20 h-20 text-white mt-5 hover:text-orange-600 transition-all duration-300" />
          </a>
        </div>

        <div className=" xl:mr-32 mb-10 mt-10">
          <div className=" shadow-lg rounded-2xl bg-slate-400 backdrop-blur-lg bg-opacity-30  ">
            <form
              className="px-3 md:px-28 pb-5 "
              ref={form}
              onSubmit={sendEmail}
            >
              <p className="py-10 font-overpass text-white italic text-center">
                "Trabajemos juntos para convertir grandes visiones en realidad."
              </p>
              <div className="mb-5">
                <label className="block text-sm  text-white">Nombre</label>
                <input
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-orange-600 focus:border-orange-600 block duration-500 w-full p-2.5 outline-none"
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm  text-white">Tu Email</label>
                <input
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-orange-600 focus:border-orange-600 duration-500 block w-full p-2.5 outline-none"
                  type="email"
                  name="user_email"
                  placeholder="Ingresa tu correo electronico"
                  required
                />
              </div>
              <div>
                <label className="block text-sm  text-white">Mensaje</label>
                <textarea
                  className="h-44 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-orange-600 focus:border-orange-600 duration-500 block w-full p-2.5 outline-none"
                  name="message"
                  placeholder="Ingresa tu mensaje"
                  required
                />
              </div>
              <div className="max-md:flex justify-center items-center">
                <ReCAPTCHA
                  sitekey="6LcUiskpAAAAAIyHsnoqnpAa1lrVbXV_AHyxplDY"
                  onChange={(val) => setCapValue(val)}
                  className="mt-5"
                />
              </div>
              <div className="max-md:flex justify-center items-center">
                <button
                  type="submit"
                  value="Envíar contacto"
                  className="mt-4 rounded bg-orange-600  py-2 px-3 font-bold text-white font-custom cursor-pointer hover:underline "
                  //boton disabled hasta que se pase el captcha//
                  disabled={!capValue}
                >
                  Enviar contacto
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
