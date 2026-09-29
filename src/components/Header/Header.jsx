import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header section-padding">
      <a href="/" className="header__logo">
        NewsExplorer
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
