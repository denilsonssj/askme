import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

import App from './App';
import theme from 'shared/themes/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('wrapper')
);
