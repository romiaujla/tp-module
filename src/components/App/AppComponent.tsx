import { ThemeProvider } from "@emotion/react";
import { ReactElement } from "react";
import { LoginComponent } from "../../scenes/Login/LoginComponent";
import theme from "../../theme";

export const AppComponent = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <LoginComponent isValidForm={true} errorMessage="" />
      </div>
    </ThemeProvider>
  );
};
