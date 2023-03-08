import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Alert,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { BaseSyntheticEvent, Component, ReactNode } from "react";
import { RouterPathEnum } from "../../global/enum/router-path.enum";
import { LoginComponentStateModel } from "../Login/model/login-component.state.model";

export default class LoginComponent extends Component<LoginComponentStateModel> {
  constructor(props: LoginComponentStateModel) {
    super(props);
    this.state = {
      isValidForm: props.isValidForm,
      errorMessage: props.errorMessage,
      navigate: props.navigate,
    };
  }

  handleSubmit = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const loginData = new FormData(event.currentTarget);
    const email = loginData.get("email") as string;

    if (email.trim().length === 0) {
      this.setState({
        ...this.state,
        isValidForm: false,
        errorMessage: "Invalid email",
      });
    } else {
      const { navigate } = this.state as LoginComponentStateModel;
      navigate(RouterPathEnum.DASHBOARD_PATH);
    }
  };

  handleChange = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    this.setState({
      isValidForm: true,
      errorMessage: "",
    });
  };

  render = (): ReactNode => {
    const { isValidForm, errorMessage } = this
      .state as LoginComponentStateModel;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              marginTop: "120px",
              marginBottom: "5px",
              backGroundColor: "primary",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography fontSize="20px">Login</Typography>

          <Box
            component="form"
            onSubmit={this.handleSubmit}
            sx={{ marginTop: "1px" }}
          >
            <TextField
              label="Email Address"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            ></TextField>

            {!isValidForm && <Alert severity="error">{errorMessage}</Alert>}

            <TextField
              label="Password"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              autoComplete="current-password"
              type="password"
            ></TextField>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                marginTop: "3px",
                marginBottom: "3px",
              }}
            >
              Login
            </Button>
          </Box>

          <Link href="#" variant="body2" alignSelf="flex-end">
            Forgot Password?
          </Link>
        </Box>
      </Container>
    );
  };
}
