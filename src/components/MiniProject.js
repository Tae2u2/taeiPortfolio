import React, { useState } from "react";
import side01 from "../images/JS-project1.png";
import side02 from "../images/JS-project2.png";
import side03 from "../images/handle-css.png";
import side04 from "../images/react-project1.png";

const MiniProject = () => {
  const [sideComment, setSideComment] = useState(1);

  return (
    <div className="mini-box">
      <h1>미니 프로젝트</h1>
      <div>
        <div className="mini-item">
          <p className={sideComment === 1 ? "mini-p show-comment" : "mini-p"}>
            JS를 이용한 그림판(canvas), <br />
            첫화면(할일 관리, 날씨api),
            <br />
            테이블 crud(온라인 튜토리얼)
          </p>
          <div onClick={() => setSideComment(1)}>
            <img
              src={side01}
              alt="side project"
              className={sideComment === 1 ? "achromatic color" : "achromatic"}
              width="250px"
            />
          </div>
        </div>
        <div className="mini-item">
          <p className={sideComment === 2 ? "mini-p show-comment" : "mini-p"}>
            JS를 이용한 관리자페이지,
            <br />
            장바구니, 계산기,
            <br />
            Focus 화면 구현
          </p>
          <div onClick={() => setSideComment(2)}>
            <img
              src={side02}
              alt="side project"
              className={sideComment === 2 ? "achromatic color" : "achromatic"}
              width="250px"
            />
          </div>
        </div>

        <div className="mini-item">
          <p className={sideComment === 3 ? "mini-p show-comment" : "mini-p"}>
            SVG와 animation으로 화면 구성
            <br />
            Javascript로 css 다루기
            <br />
            React 환경에서 CSS 제어
          </p>
          <div onClick={() => setSideComment(3)}>
            <img
              src={side03}
              alt="side project"
              className={sideComment === 3 ? "achromatic color" : "achromatic"}
              width="250px"
            />
          </div>
        </div>
        <div className="mini-item">
          <p className={sideComment === 4 ? "mini-p show-comment" : "mini-p"}>
            ReactJS와 firebase로
            <br />
            SNS 클론코딩(Do It 교재 참조), <br />
            코인트래커, 영화 소개 페이지
          </p>
          <div onClick={() => setSideComment(4)}>
            <img
              src={side04}
              alt="side project"
              className={sideComment === 4 ? "achromatic color" : "achromatic"}
              width="250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
