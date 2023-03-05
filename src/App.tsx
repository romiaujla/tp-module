import Button from "@mui/material/Button";
import {
  Box,
  TextField,
  Container,
  Checkbox,
  FormControlLabel,
  Link,
  FormControl,
} from "@mui/material";

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
