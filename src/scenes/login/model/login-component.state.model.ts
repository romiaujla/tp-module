import { NavigateFunction } from "react-router-dom";

export interface LoginComponentStateModel {
  isValidForm: boolean;
  errorMessage: string;
  navigate: NavigateFunction;
}
