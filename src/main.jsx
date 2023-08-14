import React from "react";
import ReactDOM from "react-dom/client";
import Paragraph from "./components/01-paragraph/Paragraph.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Paragraph />
  </React.StrictMode>
);
