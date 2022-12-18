import logo from './logo.svg';
import './App.css';
import Food from './pages/Food';
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <>
      <CartContextProvider>
        <Food></Food>
      </CartContextProvider>
    </>
  );
}

export default App;
