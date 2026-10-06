import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isOpen, onMenuClick }) {
  return (
    <header
      className={`header section-padding ${isOpen ? "header_menu-open" : ""}`}
    >
      <a href="/" className="header__logo">
        NewsExplorer
      </a>
      <Navigation isOpen={isOpen} onMenuClick={onMenuClick} />
    </header>
  );
}

export default Header;
