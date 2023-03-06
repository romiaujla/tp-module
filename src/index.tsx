import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppComponentWithRouter } from "./components/App/AppComponent";
import "./index.css";
import { DashboardComponent } from "./scenes/Dashboard/DashboardComponent";

const router = createBrowserRouter([
  { path: "/", element: <AppComponentWithRouter /> },
  { path: "/dashboard", element: <DashboardComponent /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
