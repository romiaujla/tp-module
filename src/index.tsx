import { Dashboard } from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppComponent } from "./components/App/AppComponent";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <AppComponent /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
