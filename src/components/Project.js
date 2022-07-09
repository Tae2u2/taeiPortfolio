import React from "react";
import piggy from "../images/travel-pig.jpg";
import cuting from "../images/cuting.png";
import "../style/project_style.css";

import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import MiniProject from "./MiniProject";

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
              <button
                className="link-btn"
                onClick={() =>
                  window.open(
                    "https://bubble-account-b8f.notion.site/0ef07988d4264a48a55f4109d4255e7f"
                  )
                }
              >
                <SiNotion />
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
        <MiniProject />
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
                <SiNotion />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
