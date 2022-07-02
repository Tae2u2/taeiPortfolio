import React, { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const Navigation = ({ changeNav, setChangeNav, position }) => {
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
          className={position < 570 ? "nav-li active" : "nav-li"}
        >
          Introduce
          {changeNav && <b>I</b>}
        </li>
        <li
          onClick={() => clickHere(2)}
          className={
            570 < position && position < 1200 ? "nav-li active" : "nav-li"
          }
        >
          Skill
          {changeNav && <b>S</b>}
        </li>
        <li
          onClick={() => clickHere(3)}
          className={
            1200 < position && position < 2100 ? "nav-li active" : "nav-li"
          }
        >
          Project
          {changeNav && <b>P</b>}
        </li>

        <li
          onClick={() => clickHere(4)}
          className={2100 < position ? "nav-li active" : "nav-li"}
        >
          Contact
          {changeNav && <b>C</b>}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
