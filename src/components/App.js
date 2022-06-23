import "../style/style.css";
import { BiArrowToTop } from "react-icons/bi";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Skill from "./Skill";

function App() {
  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Skill />
      <Project />
      <Contact />
      <button id="top-btn" onClick={goToTheTop}>
        <BiArrowToTop />
      </button>
    </div>
  );
}

export default App;
