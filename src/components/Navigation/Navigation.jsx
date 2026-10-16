import MenuIcon from "../../images/menu.svg?react";
import CloseIcon from "../../images/close-icon.svg?react";
import LogoutIcon from "../../images/logout.svg?react";
import "./Navigation.css";

function Navigation({
  isMobileMenuOpen,
  isModalOpen,
  isLoggedIn,
  onOpenModal,
  onMenuClick,
  onLogout,
}) {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__home-link">
        Home
      </a>
      {!isLoggedIn ? (
        <button
          type="button"
          className="navigation__sign-in-button"
          onClick={() => {
            onOpenModal("login");
          }}
        >
          Sign in
        </button>
      ) : (
        <>
          <a href="/" className="navigation__saved-articles-link">
            Saved articles
          </a>
          <button
            className="navigation__logout-btn"
            type="button"
            onClick={onLogout}
          >
            Username
            <LogoutIcon />
          </button>
        </>
      )}
      {!isModalOpen && (
        <button
          type="button"
          className="navigation__menu-button"
          onClick={onMenuClick}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="navigation__close-icon" />
          ) : (
            <MenuIcon className="navigation__menu-icon" />
          )}
        </button>
      )}
    </nav>
  );
}

export default Navigation;
