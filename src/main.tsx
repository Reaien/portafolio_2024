import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/ubuntu";
import "./index.css";

import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative  -z-10">
      <div className=" inset-0 flex justify-center items-center ">
        <div className="dotTop" />
        <div
          className="dot"
          style={{
            top: "400px",
            right: "200px",
            width: "250px",
            height: "250px",
          }}
        />
      </div>
      <div
        className="dot"
        style={{
          top: "1600px",
          left: "400px",
          width: "250px",
          height: "250px",
        }}
      />
      <div
        className="dot"
        style={{
          top: "2300px",
          left: "600px",
          width: "650px",
          height: "650px",
          opacity: "0.6",
        }}
      />
      <div
        className="dot"
        style={{
          top: "3300px",
          left: "600px",
          width: "650px",
          height: "650px",
          opacity: "0.6",
        }}
      />
    </div>
    <Home />
  </React.StrictMode>
);
