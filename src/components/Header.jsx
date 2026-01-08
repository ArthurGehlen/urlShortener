// Utils
import "./Header.css";

// Images
import logo from "../images/logo.svg";
import hamburguer_menu from "../images/bar.svg";

const Header = () => {
  return (
    <header className="page_header">
      <div className="header_main_area">
        <img src={logo} alt="Logo" />
        <ul className="header_links">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="header_account_area">
        <button className="login_btn">Login</button>
        <button className="signup_btn">Sign Up</button>
      </div>
      <button className="mobile_hamburguer_menu">
        <img src={hamburguer_menu} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
