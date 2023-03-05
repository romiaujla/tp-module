import React from "react";
import ReactDOM from "react-dom/client";
import { AppComponent } from "./AppComponent";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
);
