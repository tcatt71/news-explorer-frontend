import MenuIcon from "../../images/menu.svg?react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__home-link">
        Home
      </a>
      <button type="button" className="navigation__sign-in-button">
        Sign in
      </button>
      <button type="button" className="navigation__menu-button">
        <MenuIcon className="navigation__menu-icon" />
      </button>
    </nav>
  );
}

export default Navigation;
