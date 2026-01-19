// Utils
import "./Footer.css";

// Images
import Logo from "./Logo";
import facebook_icon from "../images/icon-facebook.svg";
import twitter_icon from "../images/icon-twitter.svg";
import pinterest_icon from "../images/icon-pinterest.svg";
import instagram_icon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_col_1">
        <Logo color="white" />
      </div>
      <div className="footer_col_2">
        <div className="footer_links_list">
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer_links_list">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer_links_list">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer_col_3">
        <img src={facebook_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={pinterest_icon} alt="Pinterest" />
        <img src={instagram_icon} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
