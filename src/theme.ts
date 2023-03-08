import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      100: "#cce1f1",
      200: "#99c4e4",
      300: "#66a6d6",
      400: "#3389c9",
      500: "#006bbb",
      600: "#005696",
      700: "#004070",
      800: "#002b4b",
      900: "#001525",
    },
    secondary: {
      100: "#d6ecf9",
      200: "#acd9f3",
      300: "#83c6ec",
      400: "#59b3e6",
      500: "#30a0e0",
      600: "#2680b3",
      700: "#1d6086",
      800: "#13405a",
      900: "#0a202d",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

export default theme;
