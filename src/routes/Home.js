import React from "react";
import "../style/routes-style.sass";
import taei from "../images/taei.jpg";

const Home = () => {
  return (
    <div className="container-div">
      <div className="home-div">
        <div className="home-text">
          <h3>스스로 성장하는 웹 프론트엔드 개발자</h3>
          <div style={{ display: "flex" }}>
            <h2>강태이</h2>
            <div className="skill-div">
              <h4>React(redux)</h4>
              <h4>HTML CSS(Sass) JS(ES6)</h4>
              <h4>JAVA nodeJS</h4>
              <h4>SQL Git</h4>
            </div>
          </div>
          <p></p>
        </div>
        <span></span>
        <img src={taei} alt="taeiKang" width="300px" height="450px" />
      </div>
    </div>
  );
};

export default Home;
