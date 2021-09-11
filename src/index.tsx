import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

import App from './App';
import theme from 'shared/themes/global';

import { LocalStorageContext } from "shared/contexts/LocalStorageContext";
import { getQuizFromLocalStorage } from "shared/utils/getQuizFromLocalStorage";


ReactDOM.render(
  <StrictMode>
    <LocalStorageContext.Provider value={{ getQuizFromLocalStorage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </LocalStorageContext.Provider>
  </StrictMode>,
  document.getElementById('wrapper')
);
