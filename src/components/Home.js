import React from "react";
import taei from "../images/taei.jpg";
import "../style/home_style.css";

const Home = ({ changeNav }) => {
  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#INTRODUCE</h1>
      <div className="home-div">
        <div className="home-img">
          <img src={taei} id="taei-img" alt="taeiKang" width="400px" />
        </div>
        <div className="home-text">
          <section className="home-item">
            <h2>
              "Hello! I'm (<span>태이</span>), I'm (<span>freindly</span>) and (
              <span>positive</span>) person"
            </h2>

            <h1 className="home-h1">
              <span>WEB FRONTEND DEVELOPER.</span>
            </h1>
            <p>
              안녕하세요. 웹 개발자를 꿈꾸는 강태이입니다. <br />
              데이터 분석 자격증을 준비하며 파이썬을 공부하다가 반복문을 이용한
              알고리즘과 <br />웹 스크래핑 및 데이터 정제 작업이 흥미롭게
              다가와서 개발에 입문하게 되었습니다. <br />이 후 국비지원교육을
              통해 웹 프로젝트를 진행하며 UI화면을 구현하고, <br />
              데이터를 화면에 출력시키는 과정에 빠져 프론트엔드 개발자를 꿈꾸게
              되었습니다.
              <br />
              빠르게 변화하는 트렌드를 계속해서 접목해야 하는 것과 다른 팀원들과
              많은 소통을 해야하는 점은
              <br /> 호기심이 강하고, 한결같은 태도로 꾸준히 새로운 것들을
              학습하며
              <br /> 지속적으로 사람들과 더불어 일해온 저의 성향을 강점으로 살릴
              수 있다고 생각합니다.
              <br /> 함께 일하며 긍정적인 에너지를 보여드리겠습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
