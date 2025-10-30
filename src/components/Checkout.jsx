import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Checkout({ isOpen, onClose, cartItems, total }) {
  const dialogRef = useRef();

  // Open/close dialog
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const dialog = dialogRef.current;
    const handleClickOutside = (e) => {
      if (dialog && !dialog.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return createPortal(
    <dialog ref={dialogRef} className="modal">
      <h2 className="center">تسویه حساب</h2>
      <div className="control">
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input id="name" type="text" placeholder="نام شما" />
      </div>
      <div className="control">
        <label htmlFor="email">ایمیل</label>
        <input id="email" type="email" placeholder="ایمیل شما" />
      </div>
      <div className="control">
        <label htmlFor="address">آدرس</label>
        <input id="address" type="text" placeholder="آدرس شما" />
      </div>

      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          بستن
        </button>
        <button className="button">ثبت سفارش</button>
      </div>
    </dialog>,
    document.body
  );
}
