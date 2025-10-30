// SuccessModal.jsx
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function SuccessModal({ isOpen, onClose }) {
  const dialogRef = useRef();

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

  return createPortal(
    <dialog ref={dialogRef} className="modal">
      <h2 className="center">سفارش با موفقیت ثبت شد!</h2>
      <div className="modal-actions">
        <button className="button" onClick={onClose}>
          تایید
        </button>
      </div>
    </dialog>,
    document.body
  );
}
