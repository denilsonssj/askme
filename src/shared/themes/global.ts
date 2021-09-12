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
        body: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden"
        },
        "#wrapper": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100vw",
          minHeight: "100vh",
          flex: 1
        },
        main: {
          height: "100%"
        }
      },
    },
  }
});

export default theme;