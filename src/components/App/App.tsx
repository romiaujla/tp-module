import { ThemeProvider } from "@emotion/react";
import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginComponent } from "../../pages/Login/LoginComponent";
import theme from "../../theme";
import { Navbar } from "../../global/component/Navbar/Navbar";
import { TopBar } from "../../global/component/TopBar/TopBar";
import { Box } from "@mui/material";

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
            <Box>
              <Navbar />
              <TopBar />
              <Outlet />
            </Box>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

interface AppPropsModel {
  loggedIn: boolean;
}
