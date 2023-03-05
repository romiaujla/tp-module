import Button from "@mui/material/Button";
import {
  Box,
  TextField,
  Container,
  Checkbox,
  FormControlLabel,
  Link,
  FormControl,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const handleSubmit = () => {
  console.log("route to the dashboard page");
};

function App() {
  return (
    <div className="app">
      <Container component="main" maxWidth="xs">
        <Box
          display="flex"
          flexDirection="column"
          marginTop="8"
          alignItems="center"
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
          <Grid xs>
            <Typography>Login</Typography>
          </Grid>
          <FormControl fullWidth>
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
              onClick={handleSubmit}
            >
              Login
            </Button>
          </FormControl>

          <Link href="#" variant="body2" alignSelf="flex-end">
            Forgot Password?
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default App;
