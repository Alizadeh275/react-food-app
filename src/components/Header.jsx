// src/components/Header.jsx
import { useCart } from "../context/CartContext";

export default function Header() {
  const { toggleCart, cartItems } = useCart();

  return (
    <header id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="Logo" />
        <h1>فود اپ</h1>
      </div>
      <button className="button" onClick={toggleCart}>
        سبد خرید ({cartItems.length})
      </button>
    </header>
  );
}
