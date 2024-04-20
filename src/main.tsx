import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative  ">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="dotTop" />
        <div className="dot" style={{ top: "500px", right: "50px" }} />
        <div className="dot" style={{ top: "1200px", left: "50px" }} />
      </div>
      <Home />
    </div>
  </React.StrictMode>
);
