import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppComponent } from "./components/App/AppComponent";
import { RouterPathEnum } from "./global/enum/router-path.enum";
import "./index.css";
import { DashboardComponent } from "./scenes/Dashboard/DashboardComponent";

const router = createBrowserRouter([
  { path: RouterPathEnum.APP_PATH, element: <AppComponent /> },
  { path: RouterPathEnum.DASHBOARD_PATH, element: <DashboardComponent /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
