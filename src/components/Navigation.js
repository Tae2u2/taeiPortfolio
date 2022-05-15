import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.sass";

const Navigation = () => {
  const [userStayLi, setUserStayLi] = useState(1);
  const clickHere = (indexNumber) => setUserStayLi(indexNumber);
  return (
    <nav>
      <ul>
        <Link to="/">
          <li
            onClick={() => clickHere(1)}
            className={userStayLi === 1 && "active"}
          >
            <span>Introduce</span>
          </li>
        </Link>
        <Link to="/project">
          <li
            onClick={() => clickHere(2)}
            className={userStayLi === 2 && "active"}
          >
            <span>Project</span>
          </li>
        </Link>
        <Link to="/contact">
          <li
            onClick={() => clickHere(3)}
            className={userStayLi === 3 && "active"}
          >
            <span>Contact</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
