import { Component, ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../scenes/Login/LoginComponent";
import { AppComponentStateModel } from "./model/app-component.state.model";

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
      <div className="app">
        <LoginComponent
          isValidForm={true}
          errorMessage=""
          navigate={navigate}
        />
      </div>
    );
  }
}

export function AppComponentWithRouter(): ReactElement {
  const navigate = useNavigate();
  return <AppComponent navigate={navigate} />;
}
