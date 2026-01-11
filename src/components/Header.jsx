// Utils
import "./Header.css";

// Images
import logo from "../images/logo.svg";
import hamburguer_menu from "../images/bar.svg";

const Header = ({ handle_click }) => {
  return (
    <header className="page_header">
      <div className="header_main_area">
        <img src={logo} alt="Logo" />
        <ul className="header_links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div className="header_account_area">
        <button className="login_btn">Login</button>
        <button className="signup_btn">Sign Up</button>
      </div>
      <button className="mobile_hamburguer_menu" onClick={handle_click}>
        <img src={hamburguer_menu} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
