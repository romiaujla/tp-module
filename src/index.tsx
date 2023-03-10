import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App/App";
import { RouterPathEnum } from "./global/enum/router-path.enum";

import "./index.css";
import CalendarComponent from "./scenes/Calendar/CalendarComponent";
import DashboardComponent from "./scenes/Dashboard/DashboardComponent";
import LoadBoardComponent from "./scenes/LoadBoard/LoadBoardComponent";

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
