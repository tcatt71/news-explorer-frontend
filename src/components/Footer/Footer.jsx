import gitHubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/linkedIn.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="footer__copyright">
        © 2024 Supersite, Powered by News API,
      </div>
      <div className="footer__menu">
        <div className="footer__menu-items">
          <a href="/" className="footer__link">
            Home
          </a>
          <a href="https://tripleten.com/" className="footer__link">
            TripleTen
          </a>
        </div>
        <div className="footer__social-links">
          <a
            href="https://github.com/tcatt71"
            className="footer__social-link"
            target="_blank"
            rel="noopener"
          >
            <img src={gitHubIcon} alt="GitHub profile" />
          </a>
          <a
            href="https://www.linkedin.com/in/troy-coffindaffer-b6a5921b0/"
            className="footer__social-link"
            target="_blank"
            rel="noopener"
          >
            <img src={linkedInIcon} alt="LinkedIn profile" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
