import { ThemeProvider } from '@mui/system';
import Switcher from 'components/Switcher';
import { AppContextProvider } from 'hooks/AppContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Switcher />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
