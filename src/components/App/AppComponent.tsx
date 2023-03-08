import { ThemeProvider } from "@emotion/react";
import { Component, ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../scenes/Login/LoginComponent";
import { AppComponentStateModel } from "./model/app-component.state.model";
import theme from "../../theme";

export default class AppComponent extends Component<AppComponentStateModel> {
  constructor(props: AppComponentStateModel) {
    super(props);
    this.state = {
      navigate: props.navigate,
    };
  }

  render(): ReactNode {
    const { navigate } = this.state as AppComponentStateModel;
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
  }
}

export function AppComponentWithRouter(): ReactElement {
  const navigate = useNavigate();
  return <AppComponent navigate={navigate} />;
}
