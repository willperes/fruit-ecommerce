import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import './styles.scss';

function App() {
  const THEME = createTheme({
    typography: {
     "fontFamily": `'Rubik', sans-serif`,
    }
 });

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <Header />
        <Hero />
        <Products />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
