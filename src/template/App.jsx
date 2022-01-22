import Cart from '../components/Cart';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
