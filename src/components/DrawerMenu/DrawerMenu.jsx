import "./DrawerMenu.css";

function DrawerMenu({ isOpen, onClose, onOpenModal }) {
  function handleLoginClick(modal) {
    onClose();
    onOpenModal(modal);
  }

  return (
    <div className={`drawer-menu ${isOpen ? "drawer-menu_opened" : ""}`}>
      <nav className="drawer-menu__content section-padding">
        <ul className="drawer-menu__list">
          <li className="drawer-menu__item">
            <a href="/" className="drawer-menu__link" onClick={onClose}>
              Home
            </a>
          </li>
          <li className="drawer-menu__item">
            <button
              type="button"
              className="drawer-menu__sign-in-button"
              onClick={() => {
                handleLoginClick("login");
              }}
            >
              Sign in
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DrawerMenu;
