import React, { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const Navigation = ({ changeNav, setChangeNav }) => {
  const [userStayLi, setUserStayLi] = useState(1);

  const clickHere = (indexNumber) => {
    setUserStayLi(indexNumber);
    if (indexNumber === 1) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (indexNumber === 2) {
      window.scrollTo({
        top: 670,
        left: 0,
        behavior: "smooth",
      });
    } else if (indexNumber === 3) {
      window.scrollTo({
        top: 1245,
        left: 0,
        behavior: "smooth",
      });
    } else if (indexNumber === 4) {
      window.scrollTo({
        top: 2250,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNavbar = () => {
    setChangeNav(!changeNav);
  };

  return (
    <nav className={changeNav ? "navi change-width" : "navi"}>
      <span>
        Taei Portfolio
        <i onClick={handleNavbar}>
          {changeNav ? <BsArrowBarRight /> : <BsArrowBarLeft />}
        </i>
      </span>
      <ul>
        <li
          onClick={() => clickHere(1)}
          className={userStayLi === 1 ? "nav-li active" : "nav-li"}
        >
          Introduce
          {changeNav && <b>I</b>}
        </li>
        <li
          onClick={() => clickHere(2)}
          className={userStayLi === 2 ? "nav-li active" : "nav-li"}
        >
          Skill
          {changeNav && <b>S</b>}
        </li>
        <li
          onClick={() => clickHere(3)}
          className={userStayLi === 3 ? "nav-li active" : "nav-li"}
        >
          Project
          {changeNav && <b>P</b>}
        </li>

        <li
          onClick={() => clickHere(4)}
          className={userStayLi === 4 ? "nav-li active" : "nav-li"}
        >
          Contact
          {changeNav && <b>C</b>}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
