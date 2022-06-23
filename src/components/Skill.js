import React, { useState } from "react";
import { FaCaretSquareRight } from "react-icons/fa";

const Skill = () => {
  const [showText, setShowText] = useState(1);
  const handleText = (index) => {
    setShowText(index);
  };

  return (
    <div className="container-div">
      <h1 className="hashtag-title">#SKILL SET</h1>
      <div className="skill-div">
        <div onClick={() => handleText(1)} className="skill-showcase">
          <h2 id="react">ReactJS(redux)</h2>
          {showText === 1 && <p>some explain</p>}
        </div>
        <div onClick={() => handleText(2)} className="skill-showcase point">
          <h2 id="markup">HTML CSS3(Scss)</h2>
          {showText === 2 && <p>some explain</p>}
        </div>
        <div onClick={() => handleText(3)} className="skill-showcase erase">
          <h2 id="js">JavaScript(ES6)</h2>
          {showText === 3 && <p>some explain</p>}
        </div>
        <div onClick={() => handleText(4)} className="skill-showcase point">
          <h2 id="node">nodeJS</h2>
          {showText === 4 && <p>some explain</p>}
        </div>
        <div onClick={() => handleText(5)} className="skill-showcase">
          <h2 id="java">JAVA</h2>
          {showText === 5 && <p>some explain</p>}
        </div>
        <div onClick={() => handleText(6)} className="skill-showcase erase">
          <h2 id="sql">SQL(Oracle, MySQL)</h2>
          {showText === 6 && <p>some explain</p>}
        </div>
      </div>
    </div>
  );
};

export default Skill;
