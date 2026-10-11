import { useEffect } from "react";
import CloseIcon from "../../images/close-icon.svg?react";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  title,
  name,
  buttonText,
  redirectText,
  onSubmit,
  onClose,
  onRedirect,
  children,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <CloseIcon className="modal__close-icon" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-btn" type="submit">
            {buttonText}
          </button>
          <button
            className="modal__text-btn"
            type="button"
            onClick={onRedirect}
          >
            or <span className="modal__redirect">{redirectText}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
