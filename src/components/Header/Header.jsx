import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isMobileMenuOpen, isModalOpen, onMenuClick, onOpenModal }) {
  return (
    <header
      className={`header section-padding ${isMobileMenuOpen ? "header_menu-open" : ""}`}
    >
      <a href="/" className="header__logo">
        NewsExplorer
      </a>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        isModalOpen={isModalOpen}
        onMenuClick={onMenuClick}
        onOpenModal={onOpenModal}
      />
    </header>
  );
}

export default Header;
