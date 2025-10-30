import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SuccessModal from "./SuccessModal";

export default function Checkout({ isOpen, onClose, cartItems, total }) {
  const dialogRef = useRef();
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) dialogRef.current.showModal();
      else dialogRef.current.close();
    }
  }, [isOpen]);

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

  const handleSubmitOrder = (event) => {
    // Simulate successful order submission
    event.preventDefault();
    onClose(); // close checkout modal
    setTimeout(() => setSuccessOpen(true), 100); // open success modal
  };

  return (
    <>
      {createPortal(
        <dialog ref={dialogRef} className="modal">
          <form onSubmit={handleSubmitOrder}>
            <h2 className="center">تسویه حساب</h2>
            <div className="control">
              <label htmlFor="name">نام و نام خانوادگی</label>
              <input required id="name" type="text" placeholder="نام شما" />
            </div>
            <div className="control">
              <label htmlFor="email">ایمیل</label>
              <input required id="email" type="email" placeholder="ایمیل شما" />
            </div>
            <div className="control">
              <label htmlFor="address">آدرس</label>
              <input required id="address" type="text" placeholder="آدرس شما" />
            </div>

            <div className="modal-actions">
              <button className="text-button" onClick={onClose}>
                بستن
              </button>
              <button type="submit" className="button">
                ثبت سفارش
              </button>
            </div>
          </form>
        </dialog>,
        document.body
      )}

      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
}
