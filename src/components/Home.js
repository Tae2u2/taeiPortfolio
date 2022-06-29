import React, { useState, useEffect } from "react";
import taei from "../images/taei.jpg";
import { FaReact } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";

const Home = ({ changeNav }) => {
  const [position, setPosition] = useState(670);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#INTRODUCE</h1>
      <div className="home-div">
        <div className="home-img">
          <img src={taei} id="taei-img" alt="taeiKang" width="400px" />
        </div>
        <div className="home-text">
          <div className="home-item">
            <h1 className={position < 600 ? "home-h1 typing" : "home-h1"}>
              FRONTEND
            </h1>
            <h1 className={position < 600 ? "home-h1 typing" : "home-h1"}>
              DEVELOPER.
              <span>|</span>
            </h1>
            <h2>
              this is (<span>태이</span>)'s page, "I'm (<span>freindly</span>)
              and positive person"
            </h2>
            <h2>
              Finding something <b>new</b>, challenging more creative things,
              and (<b>growing</b>) be the necessary person
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
