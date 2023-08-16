import React from "react";
import ReactDOM from "react-dom/client";
// import Paragraph from "./components/01-paragraph/Paragraph.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MainColorComponent from "./components/02-Colors/MainColorComponent";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      {/* <Paragraph /> */}
      <MainColorComponent />
    </main>
  </React.StrictMode>
);
