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
        <div className="dot" style={{ top: "400px", right: "50px" }} />
        <div
          className="dotTitles"
          style={{ top: "1000px", left: "500px", width: "1000px" }}
        />
      </div>
    </div>
    <Home />
  </React.StrictMode>
);
