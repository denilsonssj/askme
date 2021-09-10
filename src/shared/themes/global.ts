import createTheme from "@material-ui/core/styles/createTheme";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        }
      },
    },
  },
});

export default theme;