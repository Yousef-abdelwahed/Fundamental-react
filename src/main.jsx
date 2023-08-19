import React from "react";
import ReactDOM from "react-dom/client";
// import Paragraph from "./components/01-paragraph/Paragraph.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="text-white">
      <h1 className="my-3 text-center">React Fundamental Projects</h1>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </main>
  </React.StrictMode>
);
