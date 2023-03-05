import Button from "@mui/material/Button";
import {
  Box,
  TextField,
  Container,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Avatar,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { BaseSyntheticEvent, Component, ReactNode } from "react";

export class AppComponent extends Component {
  handleSubmit = (event: BaseSyntheticEvent): void => {
    event.stopPropagation();
    console.log("route to the dashboard page");
  };

  render(): ReactNode {
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
                margin: "1px",
                // @todo - update the color based on the ThemeProvider once setup
                backgroundColor: "#1976d2",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>

            <Typography>Login</Typography>

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
              ></TextField>

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
