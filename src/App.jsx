// Utils
import "./App.css";

// Hooks
import { useState } from "react";

// Images
import hero_img from "./images/illustration-working.svg";

// Components
import Header from "./components/Header";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header handle_click={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {mobileMenuOpen && (
        <div className="mobile_menu">
          <ul className="mobile_menu_links">
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
          <div className="line_divider_mobile_menu"></div>
          <div className="account_area_mobile_menu">
            <button className="login_btn login_btn_mobile_menu">Login</button>
            <button className="signup_btn signup_btn_mobile_menu">
              Sign Up
            </button>
          </div>
        </div>
      )}

      <div className="hero_container">
        <div className="hero_img">
          <img src={hero_img} alt="Working..." />
        </div>
        <div className="hero_content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div className="input_bar_wrapper">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten it!</button>
      </div>
    </>
  );
}

export default App;
