import { ThemeProvider } from "@emotion/react";
import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginComponent } from "../../scenes/Login/LoginComponent";
import theme from "../../theme";
import { Navbar } from "../Navbar/Navbar";

export const App = (props: AppPropsModel): ReactElement => {
  // @ts-ignore
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: props.loggedIn,
  });

  console.log("loggedIn", loggedIn);
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {!loggedIn ? (
          <LoginComponent isValidForm={true} errorMessage="" />
        ) : (
          <>
            <Navbar />
            <Outlet />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

interface AppPropsModel {
  loggedIn: boolean;
}
