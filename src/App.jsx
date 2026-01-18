// Utils
import "./App.css";

// Hooks
import { useState } from "react";

// Images
import hero_img from "./images/illustration-working.svg";
// Images - Product details
import brand_recognition from "./images/icon-brand-recognition.svg";
import detailed_records from "./images/icon-detailed-records.svg";
import fully_customizable from "./images/icon-fully-customizable.svg";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  // conexão com a API
  const shorten_url = async () => {
    setError("");
    setShortUrl("");

    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data.result_url) {
        setShortUrl(data.result_url);
        console.log(data.result_url);
      } else {
        setError("Failed to shorten link");
      }
    } catch {
      setError("Network error");
    }
  };

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

      {/* tem uma divisão no background... */}
      <div className="page_part_two">
        <div className="input_bar_wrapper">
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
          <button onClick={shorten_url}>Shorten it!</button>
        </div>

        <div className="advanced_statistics_text">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <div className="product_details_wrapper">
          <div className="product_detail_line"></div>
          <div className="product_detail_container">
            <div className="product_detail_img">
              <img src={brand_recognition} alt="Brand" />
            </div>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="product_detail_container">
            <div className="product_detail_img">
              <img src={detailed_records} alt="Records" />
            </div>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="product_detail_container">
            <div className="product_detail_img">
              <img src={fully_customizable} alt="Customizable" />
            </div>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="calltoaction_wrapper">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
      <Footer />  
    </>
  );
}

export default App;
