import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App/App";
import { RouterPathEnum } from "./global/enum/router-path.enum";

import "./index.css";
import BrokersComponent from "./pages/Brokers/BrokersComponent";
import CalendarComponent from "./pages/Calendar/CalendarComponent";
import CompanyProfileComponent from "./pages/CompanyProfile/CompanyProfileComponent";
import DashboardComponent from "./pages/Dashboard/DashboardComponent";
import EmployeesComponent from "./pages/Employees/EmployeesComponent";
import LoadBoardComponent from "./pages/LoadBoard/LoadBoardComponent";
import ProfileComponent from "./pages/Profile/ProfileComponent";
import TrailersComponent from "./pages/Trailers/TrailersComponent";
import TrucksComponent from "./pages/Trucks/TrucksComponent";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RouterPathEnum.APP_PATH} element={<App loggedIn={true} />}>
          <Route
            path={RouterPathEnum.DASHBOARD_PATH}
            element={<DashboardComponent />}
          />
          <Route
            path={RouterPathEnum.CALENDAR_PATH}
            element={<CalendarComponent />}
          />
          <Route
            path={RouterPathEnum.LOAD_BOARD_PATH}
            element={<LoadBoardComponent />}
          />
          <Route
            path={RouterPathEnum.BROKERS_PATH}
            element={<BrokersComponent />}
          />
          <Route
            path={RouterPathEnum.COMPANY_PROFILE_PATH}
            element={<CompanyProfileComponent />}
          />
          <Route
            path={RouterPathEnum.EMPLOYEES_PATH}
            element={<EmployeesComponent />}
          />
          <Route
            path={RouterPathEnum.EQUIPMENT_TRUCKS_PATH}
            element={<TrucksComponent />}
          />
          <Route
            path={RouterPathEnum.EQUIPMENT_TRAILERS_PATH}
            element={<TrailersComponent />}
          />
          <Route
            path={RouterPathEnum.PROFILE_PATH}
            element={<ProfileComponent />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
