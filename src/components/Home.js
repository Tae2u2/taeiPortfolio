import React from "react";
import taei from "../images/taei.jpg";

const Home = () => {
  return (
    <div className="container-div">
      <h1 className="hashtag-title">#INTRODUCE</h1>
      <div className="home-div">
        <div className="home-img">
          <img src={taei} id="taei-img" alt="taeiKang" width="400px" />
        </div>
        <div className="home-text">
          <div className="home-item">
            <h1>FRONTEND</h1>
            <h1>DEVELOPER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
