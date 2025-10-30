import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../context/CartContext";
import Checkout from "./Checkout";

export default function Cart() {
  const { cartItems, isOpen, toggleCart, removeItem, updateQuantity, total } =
    useCart();
  const dialogRef = useRef();

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Open/close cart dialog
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  // Close cart when clicking outside
  useEffect(() => {
    const dialog = dialogRef.current;
    const handleClickOutside = (e) => {
      if (dialog && !dialog.contains(e.target)) {
        toggleCart();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleCart]);

  const handleCheckout = () => {
    toggleCart(); // close cart
    setCheckoutOpen(true); // open checkout modal
  };

  return (
    <>
      {createPortal(
        <dialog ref={dialogRef} className="modal">
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
          <div className="cart-total">
            جمع کل: {total.toFixed(2)} هزار تومان
          </div>
          <div className="modal-actions">
            <button className="text-button" onClick={toggleCart}>
              بستن
            </button>
            <button className="button" onClick={handleCheckout}>
              ثبت سفارش
            </button>
          </div>
        </dialog>,
        document.body
      )}

      {/* Checkout modal */}
      <Checkout
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        total={total}
      />
    </>
  );
}
