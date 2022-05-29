import React from "react";
import "../style/routes-style.sass";
import piggy from "../images/pigMain.jpg";
import cuting from "../images/cutingHome.png";
import { HiCursorClick } from "react-icons/hi";

const Project = () => {
  return (
    <div className="container-div">
      <div className="project-div">
        <section>
          <a href="https://taeistory-piggy.herokuapp.com/">
            <img src={piggy} id="piggys" alt="pig project" />
            <div id="img-background">
              💚 클릭하시면 해당 페이지로 이동합니다.
            </div>
          </a>
          <div>
            <h4 style={{ backgroundColor: "#1E88E5" }}>React</h4>
            <h4 style={{ backgroundColor: "#558b2f" }}>nodeJS</h4>
            <h4 style={{ backgroundColor: "#d84315" }}>MySQL</h4>
            <h4 style={{ backgroundColor: "#757575" }}>AWS</h4>
          </div>
          <p>
            미니 프로젝트 [ 2개월 ]<br />
            당신은 돼지짱입니까? : 식비 기록 서비스
            <br />
            <br />
            - 회원가입, 로그인, CRUD 구현
            <br />
            - 식비의 합산을 통한 레벨 부여
            <br />
            - 사용자의 암호화된 정보 cookie로 관리
            <br />
            - 반응형 웹페이지 구현
            <br />
            - lighthouse 접근성 98점 기록
            <br />
            <br />
            <a href="https://github.com/Tae2u2/TaeiStory">
              Github [상세기능: README작성]
            </a>
            <HiCursorClick />
            <br />
            test ID : testuser
            <br />
            test PW : testpw1234
          </p>
        </section>
        <section>
          <img src={cuting} id="cuting-img" alt="cuting UI" />
          <div>
            <h4 style={{ backgroundColor: "#558b2f" }}>Spring</h4>
            <h4 style={{ backgroundColor: "#1E88E5" }}>JSP</h4>
            <h4 style={{ backgroundColor: "#d84315" }}>Oracle</h4>
            <h4 style={{ backgroundColor: "#757575" }}>Tomcat</h4>
          </div>
          <p>
            팀 프로젝트 [ 2개월 ]
            <br />
            큐팅 : 반려동물 사진 거래를 위한 <br />
            오픈마켓 웹 서비스
            <br />
            <br />
            -JSP로 웹 화면 구현
            <br />
            -Spring MVC로 게시판 구현
            <br />
            -Oracle SQL쿼리문 작성
            <br />
            <br />
            <a href="https://github.com/Tae2u2/cuting_project">
              Github[상세기능: README 작성]
            </a>
            <HiCursorClick />
          </p>
        </section>
      </div>
    </div>
  );
};

export default Project;
