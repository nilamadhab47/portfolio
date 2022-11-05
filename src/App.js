import logo from './logo.svg';
import './App.css';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from './component/Theme';

function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={DarkTheme}>
    PortFolio
    </ThemeProvider>

    </>
  );
}

export default App;
