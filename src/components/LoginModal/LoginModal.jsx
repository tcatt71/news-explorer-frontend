import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onOpenModal, onClose }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      name="login"
      title="Sign in"
      buttonText="Sign in"
      redirectText="Sign up"
      onClose={onClose}
      onRedirect={() => onOpenModal("register")}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input"
        type="email"
        placeholder="Enter email"
        required
      ></input>
      <label className="modal__label">Password</label>
      <input
        className="modal__input"
        type="password"
        placeholder="Enter password"
        required
      ></input>
    </ModalWithForm>
  );
}

export default LoginModal;
