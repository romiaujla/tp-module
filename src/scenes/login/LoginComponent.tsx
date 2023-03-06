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
import { LoginComponentStateModel } from "./model/login-component.state.model";

export class LoginComponent extends Component<LoginComponentStateModel> {
  constructor(props: LoginComponentStateModel) {
    super(props);
    this.state = {
      isValidForm: true,
      errorMessage: "",
    };
  }

  handleSubmit = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const loginData = new FormData(event.currentTarget);
    const email: string = loginData.get("email") as string;

    if (email.trim().length === 0) {
      this.setState({
        isValidForm: false,
        errorMessage: "Invalid email",
      });
    }
  };

  handleChange = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    this.setState({
      isValidForm: true,
      errorMessage: "",
    });
  };

  render(): ReactNode {
    const { isValidForm, errorMessage } = this
      .state as LoginComponentStateModel;
    console.log(isValidForm, errorMessage);

    return (
      <div className="app">
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
                // @todo - center component responsively
                marginTop: "120px",
                marginBottom: "5px",
                // @todo - update the color based on the ThemeProvider once setup
                backgroundColor: "#1976d2",
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
      </div>
    );
  }
}
