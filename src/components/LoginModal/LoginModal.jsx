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
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        className="modal__input"
        type="email"
        id="login-email"
        placeholder="Enter email"
        required
      ></input>
      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        className="modal__input"
        type="password"
        id="login-password"
        placeholder="Enter password"
        required
      ></input>
    </ModalWithForm>
  );
}

export default LoginModal;
