import React, { useState } from "react";
import "../style/style.css";
import { BiArrowToTop } from "react-icons/bi";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Skill from "./Skill";

function App() {
  const [changeNav, setChangeNav] = useState(false);
  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <Navigation changeNav={changeNav} setChangeNav={setChangeNav} />
      <Home changeNav={changeNav} />
      <Skill changeNav={changeNav} />
      <Project changeNav={changeNav} />
      <Contact changeNav={changeNav} />
      <button id="top-btn" onClick={goToTheTop}>
        <BiArrowToTop />
      </button>
    </div>
  );
}

export default App;
