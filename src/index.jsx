import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Temeprature from "./Temperature";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="WeatherApp">
      <Temeprature />
    </div>
  </StrictMode>
);
