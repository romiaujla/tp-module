import { ThemeProvider } from "@emotion/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../scenes/Login/LoginComponent";
import theme from "../../theme";

export const AppComponent = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <LoginComponent
          isValidForm={true}
          errorMessage=""
          navigate={navigate}
        />
      </div>
    </ThemeProvider>
  );
};
