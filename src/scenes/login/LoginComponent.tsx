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
import { BaseSyntheticEvent, ReactElement, useState } from "react";
import { RouterPathEnum } from "../../global/enum/router-path.enum";
import { useNavigate } from "react-router-dom";

export const LoginComponent = (
  props: LoginComponentStateModel,
): ReactElement => {
  const [isValidForm, setIsValidForm] = useState(props.isValidForm);
  const [errorMessage, setErrorMessage] = useState(props.errorMessage);

  const navigate = useNavigate();

  const handleSubmit = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const loginData = new FormData(event.currentTarget);
    const email = loginData.get("email") as string;

    if (email.trim().length === 0) {
      setIsValidForm(false);
      setErrorMessage("Invalid Email");
    } else {
      navigate(RouterPathEnum.DASHBOARD_PATH);
    }
  };

  const handleChange = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    setIsValidForm(true);
    setErrorMessage("");
  };

  console.log("isValidForm", isValidForm);
  console.log("errorMessage", errorMessage);

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

        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: "1px" }}>
          <TextField
            label="Email Address"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
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

export interface LoginComponentStateModel {
  isValidForm: boolean;
  errorMessage: string;
}
