// src/components/Header.jsx
import { useCart } from "../context/CartContext";
import { convertToPersianDigits } from "../utils/convertToPersianDigits";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { toggleCart, cartItems } = useCart();

  return (
    <header id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="Logo" />
        <h1>فود اپ</h1>
      </div>
      <button className="button cart-button" onClick={toggleCart}>
        <FaShoppingCart className="cart-icon" size={18} />
        <span>سبد خرید ({convertToPersianDigits(cartItems.length)})</span>
      </button>
    </header>
  );
}
