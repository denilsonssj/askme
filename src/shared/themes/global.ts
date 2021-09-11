import createTheme from "@material-ui/core/styles/createTheme";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        },
        "#wrapper": {
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "auto"
        },
        main: {
          width: "100%",
          height: "100%",
        }
      },
    },
  }
});

export default theme;