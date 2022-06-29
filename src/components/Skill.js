import React, { useState, useEffect } from "react";

const Skill = ({ changeNav }) => {
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
      <h1 className="hashtag-title">#SKILL SET</h1>
      <div className="skill-div">
        <div className="skill-showcase">
          <h2 id="react">ReactJS(redux)</h2>
        </div>
        <div className="skill-showcase point">
          <h2 id="markup">HTML CSS3(Scss)</h2>
        </div>
        <div className="skill-showcase erase">
          <h2 id="js">JavaScript(ES6)</h2>
        </div>
        <div className="skill-showcase point">
          <h2 id="node">JAVA</h2>
        </div>
        <div className="skill-showcase">
          <h2 id="java">SQL(Oracle, MySQL)</h2>
        </div>
        <div className="skill-showcase erase">
          <h2 id="sql">etc</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
