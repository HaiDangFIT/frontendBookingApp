import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { theme } from './themes/Theme';
import './i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>
);
