// Utils
import "./App.css";

// Images
import hero_img from "./images/illustration-working.svg";

// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
