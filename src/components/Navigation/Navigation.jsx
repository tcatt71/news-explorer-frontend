import MenuIcon from "../../images/menu.svg?react";
import CloseIcon from "../../images/close-icon.svg?react";
import "./Navigation.css";

function Navigation({ isOpen, onMenuClick }) {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__home-link">
        Home
      </a>
      <button type="button" className="navigation__sign-in-button">
        Sign in
      </button>
      <button
        type="button"
        className="navigation__menu-button"
        onClick={onMenuClick}
      >
        {isOpen ? (
          <CloseIcon className="navigation__close-icon" />
        ) : (
          <MenuIcon className="navigation__menu-icon" />
        )}
      </button>
    </nav>
  );
}

export default Navigation;
