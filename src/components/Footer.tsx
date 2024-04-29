import React from "react";
import Logo from "../images/logo/Logo_project-transformed.png";

export const Footer = () => {
  return (
    <>
      <section className="bg-slate-600 bg-opacity-30 h-[60px] flex justify-center items-center text-white font-bold gap-2">
        <p>Iván Duarte Herrera 2024 </p>
        <img src={Logo} alt="logo" className="w-8 h-8" />
      </section>
    </>
  );
};
