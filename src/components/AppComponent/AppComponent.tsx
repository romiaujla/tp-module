import { Component, ReactNode } from "react";
import { AppComponentStateModel } from "./model/app-component.state.model";
import { LoginComponent } from "../../scenes/login/LoginComponent";

export class AppComponent extends Component {
  constructor(props: AppComponentStateModel) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    const { isValidForm, errorMessage } = this.state as AppComponentStateModel;
    console.log(isValidForm, errorMessage);

    return (
      <div className="app">
        <LoginComponent />
      </div>
    );
  }
}
