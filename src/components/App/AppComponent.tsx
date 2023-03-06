import { Component, ReactNode } from "react";
import { LoginComponent } from "../../scenes/Login/LoginComponent";
import { AppComponentStateModel } from "./model/app-component.state.model";

export class AppComponent extends Component<AppComponentStateModel> {
  constructor(props: AppComponentStateModel) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <div className="app">
        <LoginComponent isValidForm={false} errorMessage="" />
      </div>
    );
  }
}
