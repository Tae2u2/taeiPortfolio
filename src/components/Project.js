import React from "react";
import piggy from "../images/travel-pig.jpg";
import cuting from "../images/cuting.png";
import petals from "../images/petals-logo.png";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsImages } from "react-icons/bs";

const Project = ({ changeNav }) => {
  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#PROJECT</h1>
      <div className="project-div">
        <section>
          <div>
            <div className="project-Img-zone">
              <img src={piggy} id="piggys" alt="pig project" width="240px" />
            </div>
            <div className="button-set">
              <button
                onClick={() =>
                  window.open("https://github.com/Tae2u2/TaeiStory")
                }
                className="link-btn"
              >
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button
                onClick={() => window.open("https://travel-pig.herokuapp.com/")}
                className="link-btn"
              >
                <BiLinkExternal />
              </button>
            </div>
          </div>
        </section>
        <p>
          <b>돼지는 여행중</b>
          <br />
          여행중 사용한 금액을 해당 국가 금액으로 입력하면
          <br />
          환전된 금액(원 단위)을 함께 기록해주고
          <br />총 금액을 보여주는 웹 서비스
          <br />
          <br />
          개인프로젝트
          <br />
          2022. 03 ~ 04, 06 (3개월)
          <br />
          ReactJS, SCSS, nodeJS, MYSQL, AWS(RDS), heroku
        </p>
        <p id="petal-text">
          <b>Petal-May-Jasmine</b> <br />
          SNS 클론코딩 <br />
          <br />
          개인프로젝트 <br />
          2022.01 (1개월) <br />
          ReactJS, CSS, firebase <br />
        </p>
        <section id="petal-position">
          <div>
            <div className="project-Img-zone">
              <img
                src={petals}
                id="petal-img"
                alt="sns clone project"
                width="240px"
              />
            </div>
            <div className="button-set">
              <button
                onClick={() =>
                  window.open("https://github.com/Tae2u2/Petal-may_jasmine")
                }
                className="link-btn"
              >
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
        </section>
        <section id="cuting-position">
          <div>
            <div className="project-Img-zone">
              <img src={cuting} id="cuting-img" alt="cuting UI" width="240px" />
            </div>
            <div className="button-set">
              <button
                onClick={() =>
                  window.open("https://github.com/Tae2u2/cuting_project")
                }
                className="link-btn"
              >
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
        </section>
        <p id="cuting-text">
          <b>큐팅</b>
          <br />
          이용자가 반려동물 사진을 자유롭게 거래하고,
          <br />
          커뮤니티를 통해 소통할 수 있는 오픈마켓 웹 서비스
          <br />
          <br />
          5인 팀프로젝트(팀장, FE-70% / BE-30%)
          <br />
          2021.07 ~ 09 (3개월)
          <br />
          SpringMVC, JSP, CSS, Javascript, Oracle, Tomcat
        </p>
      </div>
    </div>
  );
};

export default Project;
