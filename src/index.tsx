import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App/App";
import { RouterPathEnum } from "./global/enum/router-path.enum";

import "./index.css";
import BrokersComponent from "./pages/Brokers/BrokersComponent";
import CalendarComponent from "./pages/Calendar/CalendarComponent";
import DashboardComponent from "./pages/Dashboard/DashboardComponent";
import LoadBoardComponent from "./pages/LoadBoard/LoadBoardComponent";

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
