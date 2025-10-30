import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, isOpen, toggleCart, removeItem, updateQuantity, total } =
    useCart();

  if (!isOpen) return null;

  return (
    <div className="modal center">
      <h2>سبد خرید شما</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} x {item.quantity}
            </p>
            <div className="cart-item-actions">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>×</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">جمع کل: ${total.toFixed(2)}</div>
      <div className="modal-actions">
        <button className="text-button" onClick={toggleCart}>
          بستن
        </button>
        <button className="button">ثبت سفارش</button>
      </div>
    </div>
  );
}
