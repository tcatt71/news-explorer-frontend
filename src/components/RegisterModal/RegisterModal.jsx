import ModalWithForm from "./../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onOpenModal, onClose, onSubmit }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      name="register"
      title="Sign up"
      buttonText="Sign up"
      redirectText="Sign in"
      onClose={onClose}
      onRedirect={() => onOpenModal("login")}
      onSubmit={onSubmit}
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        className="modal__input"
        type="email"
        id="register-email"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter email"
        required
      ></input>
      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        className="modal__input"
        type="password"
        id="register-password"
        placeholder="Enter password"
        required
      ></input>
      <label className="modal__label" htmlFor="register-username">
        Username
      </label>
      <input
        className="modal__input"
        type="text"
        id="register-username"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter your username"
        required
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
