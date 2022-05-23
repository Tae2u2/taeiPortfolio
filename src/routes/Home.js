import React, { useState } from "react";
import "../style/routes-style.sass";
import taei from "../images/taei.JPG";
import alpaca from "../images/skyapc.png";
import { FaCaretSquareRight } from "react-icons/fa";

const Home = () => {
  const [skillBox, setSkillBox] = useState(false);
  const handleSkillBox = () => {
    if (skillBox) {
      setSkillBox(false);
    } else {
      setSkillBox(true);
    }
  };
  return (
    <div className="container-div">
      <div className="home-div">
        <div className="home-text">
          <h3>스스로 성장하는 웹 프론트엔드 개발자</h3>
          <div className="home-item">
            <img src={alpaca} id="alpaca" alt="alpaca" />
            <h2>강태이</h2>
            {skillBox ? (
              <div className="skill-div">
                <h4>▶️사용경험✅응용❌</h4>
                <h4>SpringMVC</h4>
                <h4>SQL(Oracle, MySQL)</h4>
                <h4>nodeJS</h4>
              </div>
            ) : (
              <div className="skill-div">
                <h4>▶️기능구현경험✅이론이해✅</h4>
                <h4>ReactJS(redux)</h4>
                <h4>HTML CSS(Sass) JS(ES6)</h4>
                <h4>JAVA</h4>
              </div>
            )}
            <span onClick={handleSkillBox}>
              <FaCaretSquareRight />
            </span>
          </div>
          <p>
            <span>
              알파카처럼 첫눈엔 그저 밝고 잘 웃는 사람으로 보이지만, 알파카가
              남미 지역에서 가장 중요한 축산물이듯이 저 역시 자신의 자리에서 꼭
              필요한 존재가 되는 강태이입니다.
            </span>
            긍정적인 성격으로 어디서나 적응도 잘하고, 주변 사람들과 잘 지내는 건
            첫눈에 들어오는 저의 특징입니다. 그러나 함께 일했던 분들은 마지막엔
            더 함께 일하고 싶은 사람으로 저를 기억합니다. 주인의식과 위기
            대처능력이 있는 직원, 다재다능하고 손이 빨랐던 아르바이트생,
            추진력과 새로운 아이디어가 가득했던 동아리 부장으로서 제가 맡았던
            자리를 넘치게 채웠습니다. 안데스산맥에서 더 빛을 발하는 알파카처럼
            결정적인 순간에 더 반짝이는 인재, 강태이입니다.
          </p>
        </div>
        <img src={taei} id="taei-img" alt="taeiKang" width="350px" />
      </div>
    </div>
  );
};

export default Home;
