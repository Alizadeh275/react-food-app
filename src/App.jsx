import Header from "./components/Header";
import Cart from "./components/Cart";
import MealsList from "./components/Meals/MealsList";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <MealsList />
      <Cart />
    </CartProvider>
  );
}

export default App;
