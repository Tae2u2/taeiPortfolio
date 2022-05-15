import React from "react";
import "../style/routes-style.sass";
import taei from "../images/taei.jpg";

const Home = () => {
  return (
    <div className="container-div">
      <div className="home-div">
        <div className="home-text">
          <h3>스스로 성장하는 웹 프론트엔드 개발자</h3>
          <h2>강태이</h2>
          <p></p>
        </div>
        <span></span>
        <img src={taei} alt="taeiKang" width="300px" height="450px" />
      </div>
    </div>
  );
};

export default Home;
