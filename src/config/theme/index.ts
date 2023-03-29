import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#393E46",
    },
    secondary: {
      main: "#222831",
    },
    background: {
      default: "#EEEEEE",
    },
    text: {
      primary: "#EEEEEE",
      secondary: "#EEEEEE",
    },
    info: {
      main: "#00ADB5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#393E46",
    },
    background: {
      default: "#222831",
    },
    text: {
      primary: "#EEEEEE",
      secondary: "#EEEEEE",
    },
    info: {
      main: "#00ADB5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
